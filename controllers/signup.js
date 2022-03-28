const Joi = require("joi")
var validate_schema = require("../config/validate_scema")

module.exports.signup = async (req, res) => {
    try {
        let input_data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone_number: req.body.phone_number,
            is_checked: req.body.is_checked
        }

        let validation_schema =
            Joi.object({
                firstname: Joi.string().required(),
                lastname: Joi.string().required(),
                email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
                phone_number: Joi.number().integer().required(),
                is_checked: Joi.number().integer().required()
            })

        let validation = await validate_schema.validate_schema(validation_schema, input_data)

        if (validation) {


            if (input_data.is_checked != 1) {
                return res.status(200).json(
                    {
                        error: false,
                        message: `Hello ${input_data.firstname} ${input_data.lastname}, Thank you for signing up. Your account is now created`
                    }
                )
            }
            else {
                return res.status(200).json(
                    {
                        error: false,
                        message: `Hello ${input_data.firstname} ${input_data.lastname}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${input_data.email}`
                    }
                )
            }
        }
    } catch (e) {
        return res.status(500).json(
            {
                error: true,
                message: e.message
            }
        )
    }


}
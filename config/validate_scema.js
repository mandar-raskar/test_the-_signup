module.exports.validate_schema = async (main_schema, input_scema) => {
    let validation = await main_schema.validate(input_scema);
    const { value, error } = validation;
    const valid = error == null;
    if (!valid) {
        var error_message = {
            message: error.details[0].message
        }
        throw error_message
    }
    else {
        return true
    }
}
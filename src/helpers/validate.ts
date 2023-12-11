import Validator from 'validatorjs';

const validator = (body: any, rules: any, customMessages: any, callback: (error: any, result: boolean) => void) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

export default validator;

import Validator, { ValidationTypes } from 'js-object-validation';
import { message } from '../../common/messages';

export const loginValidator = (data: any) => {
  const validations = {
    email: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.EMAIL]: true,
    },
    password: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.MINLENGTH]: 8,
      // [ValidationTypes.PASSWORD]: true,
    },
  };
  // Error messages
  const messages = {
    email: {
      [ValidationTypes.EMAIL]: message.InvalidEmail,
      [ValidationTypes.REQUIRED]: message.RequiredEmail,
    },
    password: {
      [ValidationTypes.REQUIRED]: message.RequiredPassword,
      [ValidationTypes.MINLENGTH]: 'Password must be 8 character long',
      // [ValidationTypes.PASSWORD]: message.StrongPasswordValidation,
    },
  };

  const { isValid, errors } = Validator(data, validations, messages);
  return {
    isValid,
    errors,
  };
};

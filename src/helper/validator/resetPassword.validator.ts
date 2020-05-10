import Validator, { ValidationTypes } from 'js-object-validation';
import { message } from '../../common/messages';

export const resetPasswordValidator = (data: any) => {
  const validations = {
    password: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.MINLENGTH]: 8,
      [ValidationTypes.PASSWORD]: true,
    },
    confirmPassword: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.EQUAL]: 'password',
    },
  };
  // Error messages
  const messages = {
    password: {
      [ValidationTypes.REQUIRED]: message.RequiredPassword,
      [ValidationTypes.MINLENGTH]: message.InvalidPasswordLength,
      [ValidationTypes.PASSWORD]: message.StrongPasswordValidation,
    },
    confirmPassword: {
      [ValidationTypes.REQUIRED]: message.RequiredRePassword,
      [ValidationTypes.EQUAL]: message.PasswordMatchError,
    },
  };

  const { isValid, errors } = Validator(data, validations, messages);
  return {
    isValid,
    errors,
  };
};

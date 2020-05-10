import Validator, { ValidationTypes } from 'js-object-validation';
import { message } from '../../common/messages';

export const passwordValidator = (data: any) => {
  const validations = {
    oldPassword: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.MINLENGTH]: 8,
    },
    newPassword: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.MINLENGTH]: 8,
      [ValidationTypes.PASSWORD]: true,
    },
    confirmPassword: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.EQUAL]: 'newPassword',
    },
  };
  // Error messages
  const messages = {
    oldPassword: {
      [ValidationTypes.REQUIRED]: message.RequiredOldPassword,
      [ValidationTypes.MINLENGTH]: message.OldPasswordLength,
    },
    newPassword: {
      [ValidationTypes.REQUIRED]: message.RequiredNewPassword,
      [ValidationTypes.MINLENGTH]: message.InvalidNewPasswordLength,
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

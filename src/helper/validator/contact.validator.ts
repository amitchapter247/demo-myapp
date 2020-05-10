import Validator, { ValidationTypes } from 'js-object-validation';
import { message } from '../../common/messages';

export const contactValidator = (data: any) => {
  const validations = {
    name: {
      [ValidationTypes.REQUIRED]: true,
    },
    email: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.EMAIL]: true,
    },
    message: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.MINLENGTH]: 20,
    },
  };
  // Error messages
  const messages = {
    name: {
      [ValidationTypes.REQUIRED]: message.RequiredName,
    },
    email: {
      [ValidationTypes.REQUIRED]: message.RequiredEmail,
      [ValidationTypes.EMAIL]: message.InvalidEmail,
    },
    message: {
      [ValidationTypes.REQUIRED]: message.RequiredMessage,
      [ValidationTypes.MINLENGTH]: message.MinLengthMessage,
    },
  };

  const { isValid, errors } = Validator(data, validations, messages);
  return {
    isValid,
    errors,
  };
};

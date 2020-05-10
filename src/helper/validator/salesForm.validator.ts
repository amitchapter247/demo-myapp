import Validator, { ValidationTypes } from 'js-object-validation';
import { message } from '../../common/messages';

export const salesFormValidator = (data: any) => {
  const validations = {
    name: {
      [ValidationTypes.REQUIRED]: true,
    },
    email: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.EMAIL]: true,
    },
    trainingProvider: {
      [ValidationTypes.REQUIRED]: true,
    },
    interest: {
      [ValidationTypes.REQUIRED]: true,
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
    trainingProvider: {
      [ValidationTypes.REQUIRED]: message.CommonRequiredMessage,
    },
    interest: {
      [ValidationTypes.REQUIRED]: message.CommonRequiredMessage,
    },
  };

  const { isValid, errors } = Validator(data, validations, messages);
  return {
    isValid,
    errors,
  };
};

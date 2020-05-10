import Validator, { ValidationTypes } from 'js-object-validation';
import { message } from '../../common/messages';

export const profileValidator = (data: any) => {
  const validations = {
    firstName: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.ALPHA]: true,
    },
    lastName: {
      [ValidationTypes.ALPHA]: true,
    },
    email: {
      [ValidationTypes.REQUIRED]: true,
      [ValidationTypes.EMAIL]: true,
    },
    occupation: {
      [ValidationTypes.REQUIRED]: true,
    },
    experienceLevel: {
      [ValidationTypes.REQUIRED]: true,
    },
    educationLevel: {
      [ValidationTypes.REQUIRED]: true,
    },
    interest: {
      [ValidationTypes.REQUIRED]: true,
    },
  };
  // Error messages
  const messages = {
    firstName: {
      [ValidationTypes.REQUIRED]: message.RequiredFirstName,
      [ValidationTypes.ALPHA]: message.InvalidFirstName,
    },
    lastName: {
      [ValidationTypes.ALPHA]: message.InvalidLastName,
    },
    email: {
      [ValidationTypes.REQUIRED]: message.RequiredEmail,
      [ValidationTypes.EMAIL]: message.InvalidEmail,
    },
    occupation: {
      [ValidationTypes.REQUIRED]: message.RequiredOccupation,
    },
    experienceLevel: {
      [ValidationTypes.REQUIRED]: message.RequiredExpLevel,
    },
    educationLevel: {
      [ValidationTypes.REQUIRED]: message.RequiredEduLevel,
    },
    interest: {
      [ValidationTypes.REQUIRED]: message.RequiredInterest,
    },
  };

  const { isValid, errors } = Validator(data, validations, messages);
  return {
    isValid,
    errors,
  };
};

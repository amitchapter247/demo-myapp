import { IResponseHandlerModel } from '../interfaces';
import { AxiosResponse } from 'axios';

/**
 * ErrorHandlerHelper Class - For managing errors
 */
export class ErrorHandlerHelper {
  private rawError: any;
  public error: IResponseHandlerModel = {
    code: 500,
    isError: true,
    timestamp: Date.now(),
    error: 'Unknown error',
    messages: [],
    data: undefined,
  };
  constructor(err: AxiosResponse<any>) {
    this.rawError = err;
    this.setError();
  }

  private setError = () => {
    this.error.code =
      this.rawError && this.rawError.data
        ? this.rawError.data.responseCode
        : this.error.code;
    this.error.timestamp = Date.now();
    this.error.messages = [];
    if (
      this.rawError &&
      this.rawError.data &&
      typeof this.rawError.data === 'object'
    ) {
      this.error.messages.push(this.rawError.data.message);
      this.error.data = this.rawError.data.data;
    } else {
      this.error.error = 'Unknown';
      this.error.messages = ['An unexpected error occured.'];
    }
  };
}

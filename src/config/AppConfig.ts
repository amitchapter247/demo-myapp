export const ENVEnum: any = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

export const Environment: string = process.env.NODE_ENV || ENVEnum.DEVELOPMENT;

// base path for APIs
export const API_ENDPOINT: string =
  Environment === ENVEnum.DEVELOPMENT
    ? 'http://localhost:8007/api'
    : '';


// base path for images
export const ImageURL: string =
  Environment === ENVEnum.DEVELOPMENT
    ? 'http://localhost:8007/api/'
    : '';
export const FrontendUrl: string =
  Environment === ENVEnum.DEVELOPMENT ? "http://localhost:8007/" : "";



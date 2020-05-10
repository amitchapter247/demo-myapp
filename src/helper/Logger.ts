export const logger = (data: any) => {
  return process.env.NODE_ENV === 'development' ? console.log(data) : null;
};

  import type { Response } from 'express';
const  successResponse = (res: Response, message: string, data: any = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res: Response, message: string, statusCode = 500, errors: any = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

export default{
    successResponse,
    errorResponse
}

import { Response } from "express";

export class ApiResponse {
  public statusCode: number;
  public message: string;
  public status?: boolean;
  public data?: any | any[];
  constructor(statusCode: number, message: string, data?: any) {
    this.status = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    if (data !== undefined) {
      this.data = data;
    }
  }
  public send(res: Response): Response {
    return res.status(this.statusCode).json({
      status: this.status,
      message: this.message,
      data: this.data,
    });
  }
}

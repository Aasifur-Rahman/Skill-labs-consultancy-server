import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { TestimonialService } from "./testimonial.service";

const createTestimonial = async (req: Request, res: Response) => {
  const result = await TestimonialService.createTestimonial(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Testimonial submitted successfully',
    data: result,
  });
};

const getApprovedTestimonials = async (req: Request, res: Response) => {
  const result = await TestimonialService.getApprovedTestimonials();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Approved testimonials retrieved successfully',
    data: result,
  });
};

const getAllTestimonials = async (req: Request, res: Response) => {
  const result = await TestimonialService.getAllTestimonials();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Testimonials retrieved successfully',
    data: result,
  });
};

const updateTestimonialStatus = async (req: Request, res: Response) => {
  const result = await TestimonialService.updateTestimonialStatus(req.params.id as string, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Testimonial status updated successfully',
    data: result,
  });
};

const deleteTestimonial = async (req: Request, res: Response) => {
  const result = await TestimonialService.deleteTestimonial(req.params.id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Testimonial deleted successfully',
    data: result,
  });
};

export const TestimonialController = {
  createTestimonial,
  getApprovedTestimonials,
  getAllTestimonials,
  updateTestimonialStatus,
  deleteTestimonial,
};
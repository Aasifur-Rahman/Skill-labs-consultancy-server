import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { FaqService } from "./faq.service";

const createFaq = async (req: Request, res: Response) => {
  const result = await FaqService.createFaq(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Faq submitted successfully",
    data: result,
  });
};

const getAllFaqs = async (req: Request, res: Response) => {
  const result = await FaqService.getAllFaqs();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faq requests retrieved successfully",
    data: result,
  });
};

const updateFaq = async (req: Request, res: Response) => {
  const result = await FaqService.updateFaq(req.params.id as string, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faq updated successfully",
    data: result,
  });
};

const deleteFaq = async (req: Request, res: Response) => {
  const result = await FaqService.deleteFaq(req.params.id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faq deleted successfully",
    data: result,
  });
};

export const FaqController = {
  createFaq,
  getAllFaqs,
  updateFaq,
  deleteFaq,
};

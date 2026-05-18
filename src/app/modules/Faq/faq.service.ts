import { IFaq } from "./faq.interface";
import { Faq } from "./faq.model";

const createFaq = async (payload: IFaq) => {
  return await Faq.create(payload);
};

const getAllFaqs = async () => {
  return await Faq.find().sort({ createdAt: -1 });
};

const updateFaq = async (id: string, payload: Partial<IFaq>) => {
    return await Faq.findByIdAndUpdate(id, payload, { new: true });
};

const deleteFaq = async (id: string) => {
    return await Faq.findByIdAndDelete(id);
};

export const FaqService = {
    createFaq,
    getAllFaqs,
    updateFaq,
    deleteFaq
};
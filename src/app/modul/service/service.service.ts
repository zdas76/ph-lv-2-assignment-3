import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceInToDB = async (payLoad: TService) => {
  const isExsistService = await Service.findOne({ name: payLoad.name });

  if (isExsistService) {
    throw new AppError(httpStatus.BAD_REQUEST, "This name already used");
  }
  const result = await Service.create(payLoad);
  return result;
};

const getAllServiceFromDB = async () => {
  const result = await Service.find();
  return result;
};

const getOneServiceFromDB = async (id: string) => {
  const result = await Service.findOne({ _id: id });
  return result;
};

const updateServiceToDB = async (id: string, payLoad: Partial<TService>) => {
  const isServiceExists = await Service.findOne({ _id: id });
  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Not found any product");
  }
  const result = await Service.findOneAndUpdate(
    { _id: id },
    { price: payLoad.price }
  );

  return result;
};

const deleteServiceToDB = async (id: string) => {
  const isServiceExists = await Service.findOne({ _id: id });
  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Service Not found");
  }
  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

export const ServiceofService = {
  createServiceInToDB,
  getAllServiceFromDB,
  getOneServiceFromDB,
  updateServiceToDB,
  deleteServiceToDB,
};

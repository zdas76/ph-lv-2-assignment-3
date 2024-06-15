import { Slots } from "./slot.model";

const getAllSlotsFromBD = async (query: Record<string, unknown>) => {
  const result = await Slots.find({
    $or: [{ date: query.date }, { serviceId: query.serviceId }],
  }).populate("serviceId");
  return result;
};

export const SlotServices = {
  getAllSlotsFromBD,
};

import { Slots } from "./slot.model";

const getAllSlotsFromBD = async () => {
  const result = await Slots.find({ isBooked: { $ne: "booked" } }).populate(
    "service"
  );
  return result;
};

export const SlotServices = {
  getAllSlotsFromBD,
};


import { Slots } from "./slot.model";

// const getAllSlotsFromBD = async (query: Record<string, unknown>) => {
//   const result = await Slots.find({
//     $or: [{ date: query.date }, { serviceId: query.serviceId }],
//   }).populate("serviceId");
//   return result;
// };

const getAllSlotsFromBD = async (payLoad:{serviceId: string, date: string}) => {
  let condition = {};
  if(payLoad.serviceId ){
    condition= {service: payLoad.serviceId, date: payLoad.date, isBooked: "available"}}
  
  const result = await Slots.find(condition).populate("service");
  
  return result;
};

const getSlotsDateByIdFromBD = async (serviceId: string ) => {
  const date= new Date()
  const result = await Slots.find({service:serviceId, date: {$gte: date}});
  
  return result;
};

const deleteSlotsFormDB = async(id:string) => {
const result =  await Slots.findByIdAndDelete(id)
  return result;
}

export const SlotServices = {
  getAllSlotsFromBD,
  deleteSlotsFormDB,
  getSlotsDateByIdFromBD
};

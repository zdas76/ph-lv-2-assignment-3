export const generateTimeSlots = async (
  startTime: string,
  endTime: string,
  slotDuration: number
) => {
  if (!startTime || !endTime || slotDuration <= 0) {
    throw new Error("Invalid input parameters");
  }

  const slots = [];
  let start = new Date(`1970-01-01T${startTime}:00`);
  let end = new Date(`1970-01-01T${endTime}:00`);

  while (start < end) {
    let endSlot = new Date(start.getTime() + slotDuration * 60000);
    let startTimeFormate = start.toTimeString().slice(0, 5);
    let endTimeFormate = endSlot.toTimeString().slice(0, 5);
    slots.push({ startTime: startTimeFormate, endTime: endTimeFormate });
    start = endSlot;
  }
  return slots;
};

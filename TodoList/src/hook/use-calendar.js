import dayjs from "dayjs";
import { useState } from "react";

export const useCalender = (now) => {
  const [selectedDate, setSelectedDate] = useState(now);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };
  const subtractOneMonth = () => {
    setSelectedDate(dayjs(selectedDate).subtract(1, "M"));
  };
  const addOneMonth = () => {
    setSelectedDate(dayjs(selectedDate).add(1, "M"));
  };

  return {
    selectedDate,
    isDatePickerVisible,
    setSelectedDate,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractOneMonth,
    addOneMonth,
  };
};

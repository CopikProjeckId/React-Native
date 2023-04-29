import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import dayjs from "dayjs";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { runPracticeDayjs } from "./src/practice-dayjs";
import { getCalendarColumns, getDayColor, getDayText } from "./src/util";
import Margin from "./src/Margin";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useCalender } from "./src/hook/use-calendar";
import { useTodoList } from "./src/hook/use-TodoList";
//------------------------------------------------------------

const columnSize = 35;

const Column = ({ text, color, opacity, disabled, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: columnSize,
        height: columnSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#c2c2c2" : "transparent",
        borderRadius: columnSize / 2,
      }}>
      <Text style={{ color, opacity }}>{text} </Text>
    </TouchableOpacity>
  );
};

const ArrowButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <AntDesign name={iconName} size={15} color="black" on />
    </TouchableOpacity>
  );
};
export default function App() {
  const now = dayjs();

  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractOneMonth,
    addOneMonth,
  } = useCalender(now);

  const { todoList, addTodo, removeTodo, toggleTodo, input, setInput } =
    useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtractOneMonth;
  const onPressRightArrow = addOneMonth;

  
  useEffect(() => {
    runPracticeDayjs();
  }, []);
  useEffect(() => {
    console.log(
      "changed selectedDate",
      dayjs(selectedDate).format("YYYY.MM.DD")
    );
  }, [selectedDate]);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <FlatList 
      data={todoList} 
      // ListHeaderComponent={ListHeaderComponent}
      renderItem={({item: todo}) => {
        return (
          <Text>{todo.content}</Text>
        )
      }}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { runPracticeDayjs } from './src/practice-dayjs';
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import dayjs from 'dayjs';
import Margin from './src/Margin';
import { AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const columnSize = 35;

const Column = ({
  text,
  color,
  opacity,
  disabled,
  onPress,
  isSelected
}) => {
  return (
      <TouchableOpacity 
        disabled = {disabled}
        onPress= {onPress}
        style = {{ 
          width: columnSize, 
          height : columnSize, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: isSelected ? "#c2c2c2" : "transparent",
          borderRadius : columnSize / 2
        }}>
        <Text style ={{color, opacity}}>{text} </Text>
      </TouchableOpacity>
  )
}

const ArrowButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal : 20, paddingVertical: 15}}>
      <AntDesign name = {iconName} size={15} color="black" on/>
    </TouchableOpacity>
  );
}
export default function App() {
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const columns = getCalendarColumns(selectedDate);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };
  
  const onPressLeftArrow = () => {
    setSelectedDate(dayjs(selectedDate).subtract(1, "M"));
  }
  const onPressRightArrow = () => {
    setSelectedDate(dayjs(selectedDate).add(1, "M"));
  }
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");
    return (
      <View>
        <Margin height={15}/>
        {/** < YYYY.MM.DD > */}
        <View style = {{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          
          <ArrowButton iconName='left' onPress={onPressLeftArrow}/>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style = {{ fontSize : 20, color: "#404040"}}>{currentDateText}</Text>
          </TouchableOpacity>
          
          <ArrowButton iconName='right' onPress={onPressRightArrow}/>
        </View>
        {/* 일~토 */}
        <View style = {{ flexDirection : "row"}}>

        {[0,1,2,3,4,5,6].map(day => {
          const dayText = getDayText(day);
          const color = getDayColor(day);
          return (
            <Column key={`day-${day}`}text={dayText} color={color} opacity={1} disabled={true}/>
            )
          })}
        </View>
      </View>
    )
  }
  const renderItem = ({item : date}) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
    const color = getDayColor(day);
    const onPress = () => {
      setSelectedDate(date);
    }
    const isSelected = dayjs(date).isSame(selectedDate, 'date');
    return (
      <Column 
        text = {dateText} color ={color} opacity={isCurrentMonth ? 1 : 0.3} 
        onPress={onPress}
        isSelected={isSelected}
      />
    )
  }
  useEffect(() => {
    runPracticeDayjs();

  }, []);
  useEffect(() => {
    console.log('changed selectedDate', dayjs(selectedDate).format("YYYY.MM.DD"));
  }, [selectedDate])
  return (
    <View style={styles.container}>
      <FlatList
        data = {columns}
        keyExtractor={(_, index) => `column-${index}`}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
      ></FlatList>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

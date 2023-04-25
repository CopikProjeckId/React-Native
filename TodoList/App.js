import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { runPracticeDayjs } from './src/practice-dayjs';
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import dayjs from 'dayjs';
import Margin from './src/Margin';
import { AntDesign } from '@expo/vector-icons';

const columnSize = 35;

const Column = ({
  text,
  color,
  opacity
}) => {
  return (
      <View style = {{ width: columnSize, height : columnSize, justifyContent: 'center', alignItems: 'center'}}>
        <Text style ={{color, opacity}}>{text} </Text>
      </View>
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
  const columns = getCalendarColumns(now);

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(now).format("YYYY.MM.DD");
    return (
      <View>
        <Margin height={15}/>
        {/** < YYYY.MM.DD > */}
        <View style = {{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          
          <ArrowButton iconName='left' onPress={()=>{}}/>
          <TouchableOpacity>
            <Text style = {{ fontSize : 20, color: "#404040"}}>{currentDateText}</Text>
          </TouchableOpacity>
          
          <ArrowButton iconName='right' onPress={()=>{}}/>
        </View>
        {/* 일~토 */}
        <View style = {{ flexDirection : "row"}}>

        {[0,1,2,3,4,5,6].map(day => {
          const dayText = getDayText(day);
          const color = getDayColor(day);
          return (
            <Column key={`day-${day}`}text={dayText} color={color} opacity={1}/>
            )
          })}
        </View>
      </View>
    )
  }
  const renderItem = ({item : date}) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const isCurrentMonth = dayjs(date).isSame(now, 'month');
    const color = getDayColor(day);
    return (
      <Column text = {dateText} color ={color} opacity={isCurrentMonth ? 1 : 0.3} />
    )
  }
  useEffect(() => {
    // runPracticeDayjs();

  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data = {columns}
        keyExtractor={(_, index) => `column-${index}`}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
      ></FlatList>
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

import dayjs from "dayjs";
import React from "react";
import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";


const statusBarHeight = getStatusBarHeight(true);

export default (
    selectedDate,
    onPressLeftArrow,
    onPressRightArrow
) => {
    const ListHeaderComponent = () => {
        const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");
        return (
          <View>
            <Margin height={15} />
            {/** < YYYY.MM.DD > */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ArrowButton iconName="left" onPress={onPressLeftArrow} />
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={{ fontSize: 20, color: "#404040" }}>
                  {currentDateText}
                </Text>
              </TouchableOpacity>
    
              <ArrowButton iconName="right" onPress={onPressRightArrow} />
            </View>
            {/* 일~토 */}
            <View style={{ flexDirection: "row" }}>
              {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                const dayText = getDayText(day);
                const color = getDayColor(day);
                return (
                  <Column
                    key={`day-${day}`}
                    text={dayText}
                    color={color}
                    opacity={1}
                    disabled={true}
                  />
                );
              })}
            </View>
          </View>
        );
      };
      const renderItem = ({ item: date }) => {
        const dateText = dayjs(date).get("date");
        const day = dayjs(date).get("day");
        const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
        const color = getDayColor(day);
        const onPress = () => {
          setSelectedDate(date);
        };
        const isSelected = dayjs(date).isSame(selectedDate, "date");
        return (
          <Column
            text={dateText}
            color={color}
            opacity={isCurrentMonth ? 1 : 0.3}
            onPress={onPress}
            isSelected={isSelected}
          />
        );
      };
    return (
        <FlatList
        data={columns}
        scrollEnabled={false}
        contentContainerStyle={{ paddingTop: statusBarHeight }}
        keyExtractor={(_, index) => `column-${index}`}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}/>
    );
}
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import { useCarculator } from './hook/use-calculator';


// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
    const backgroundColor = type === 'reset' ? COLOR.RESET : type === 'operator' ? COLOR.OPERATOR : type === 'num' ? COLOR.NUM : 'transparent'
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={{ 
            flex , backgroundColor ,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderWidth: isSelected ? 1 : 0.2,
            borderColor: "black"
        }}
    >
        <Text style = {{color: "white", fontSize: 25}}>{text}</Text>
    </TouchableOpacity>
  )
}



const COLOR = {
  RESULT: '#4e4c51',
  RESET: '#5f5e62',
  OPERATOR: '#f39c29',
  NUM: '#5c5674',
}
const ButtonContainer = styled.View`
    flexDirection: row;
    width : 100%;
    
`;
const InputContainer = styled.View`
    background-color: ${COLOR.RESULT};
    min-height: 50px;
    justify-content: center;
    align-items: flex-end;
    padding: 5px;
`;
export default () => {
    const {
        input,
        curr,
        result,
        temp,
        tempO,
        hasInput,
        onPressNum,
        onPressO,
        onPressReset
    } = useCarculator();
  return (
    <View style={{flex : 1, width : 250, justifyContent : 'center'}}>
        {__DEV__ && (
            <>
                <Text>input : {input}</Text>
                <Text>curr : {curr}</Text>
                <Text>result : {result}</Text>
                <Text>temp : {temp}</Text>
                <Text>tempO : {tempO}</Text>
            </>
        )}
        
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>{input}</Text>
      </InputContainer>
      {/* [AC ~ /] */}
      <ButtonContainer>
        <Button
            type="reset"
            text={hasInput ? "C" : "AC"}
            onPress={onPressReset}
            flex={3}
        />
        <Button
            type="operator"
            text="/"
            onPress={() => onPressO("/")}
            flex={1}
            isSelected={curr === "/"}
        />
      </ButtonContainer>
        
      {/* [7 ~ x] */}
      <ButtonContainer>
        {[7,8,9].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text= {String(num)}
                onPress={() => onPressNum(num)}
                flex={1}
            />
        ))}
        <Button
            type="operator"
            text="*"
            onPress={() => onPressO("*")}
            flex={1}
            isSelected={curr === "*"}
        />
      </ButtonContainer>
      {/* [4 ~ -] */}
      <ButtonContainer>
        {[4,5,6].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text= {String(num)}
                onPress={() => onPressNum(num)}
                flex={1}
            />
        ))}
        <Button
            type="operator"
            text="-"
            onPress={() => onPressO("-")}
            flex={1}
            isSelected={curr === "-"}
        />
      </ButtonContainer>
      {/* [1 ~ +] */}
      <ButtonContainer>
        {[1,2,3].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text= {String(num)}
                onPress={() => onPressNum(num)}
                flex={1}
            />
        ))}
        <Button
            type="operator"
            text="+"
            onPress={() => onPressO("+")}
            flex={1}
            isSelected={curr === "+"}
        />
      </ButtonContainer>
      {/* [0 ~ =] */}
      <ButtonContainer>
        {[0].map((num) => (
            <Button
                key={`num-${num}`}
                type="num"
                text= {String(num)}
                onPress={() => onPressNum(num)}
                flex={3}
            />
        ))}
        <Button
            type="operator"
            text="="
            onPress={() => onPressO("=")}
            flex={1}
        />
      </ButtonContainer>
    </View>
  )
}
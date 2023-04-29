import { useState } from "react";

export const useCarculator = () => {
    const [input, setInput] = useState(0); // 입력
    const [curr, setCurr] = useState(null); // 계산식
    const [result, setResult] = useState(null); // 결과값
    const [temp, setTemp] = useState(null); // history
    const [tempO, setTempO] = useState(null); // history
    const [isclickedOperator, setIsClickedOperator] = useState(false); 
    const [isclickedEqual, setIsClickedEqual] = useState(false);

    const hasInput = !!input;

    const onPressNum = (num) => {
        if(curr && isclickedOperator) {
            setResult(input);
            setInput(num);
            setIsClickedOperator(false);
        }else {
            const newInput = Number(`${input}${num}`);
            setInput(newInput);
        }
    }
    const onPressO = (oper) => {
        if(oper !== "=") {
            setCurr(oper);
            setIsClickedOperator(true);
            setIsClickedEqual(false);
        } else {
            let finalResult = result;
            const finalInput = isclickedEqual ? temp : input;
            const finalOperator = isclickedEqual ? tempO : curr;
            switch (curr) {
                case '+':
                    finalResult = result + finalInput;
                break;
                case '-':
                    finalResult = result - finalInput;
                break;
                case '*':
                    finalResult = result * finalInput;
                break;
                case '/':
                    finalResult = result / finalInput;
                break;
                default : break;
            }
            setResult(finalResult);
            setInput(finalResult);
            setTemp(finalInput);
            setCurr(null);
            setTempO(finalOperator);
            setIsClickedEqual(true);
        }
    }
    const onPressReset = () => {
        if (hasInput) {
            setInput(0);
        } else {
            setInput(0);
            setCurr(null);
            setResult(null);
            setTemp(null);
            setTempO(null);
        }
    }

    return {
        input,
        curr,
        result,
        temp,
        tempO,
        hasInput,
        onPressNum,
        onPressO,
        onPressReset
    }
} 
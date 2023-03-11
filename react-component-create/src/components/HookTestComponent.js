import React, {useMemo} from "react";
import { View } from "react-native";
import Typography from "./atom/Typography";

export const HookTestComponent = (props) => {
    const text = useMemo(()=>{
        return props.a + props.b;
    }, [props.a, props.b])
    return (
        <View>
            <Typography>
                결과 값은 : {text}
            </Typography>
        </View>
    )
}
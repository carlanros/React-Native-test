import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
interface IProps {
    amount: number;
}

const Progress = ({amount}: IProps) => {
    return (<View>
        <Text>Progress: {amount}</Text>
        <ActivityIndicator />
    </View>);
};
export default Progress;
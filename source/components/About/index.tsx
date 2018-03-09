import React from 'react';
import { View, Text } from 'react-native';
interface Iprops {
    aboutText: string;
}
const about = ({aboutText}:Iprops) => {
    return (<View>
       <Text>About us</Text>
       <Text>{aboutText}</Text>
    </View>);
 };
export default about;
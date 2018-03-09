import React from 'react';
import { View, Text } from 'react-native';

interface Iprops {
    firstText: string;
}

const about = ({firstText}: Iprops) => {
    return (<View>
       <Text>The family app</Text>
       <Text>{firstText}</Text>
    </View>);
 };
export default about;
import React from "react";
import {Text,
        TextInput,
        View,
} from 'react-native';
import styles from './Input.style';
const Input = ({label, onChangeText,placeholder}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                 <TextInput 
                 onChangeText={onChangeText} 
                 placeholder={placeholder}/>
            </View>
           
        </View>
        
    )
}
export default Input;
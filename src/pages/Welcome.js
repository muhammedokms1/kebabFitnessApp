import React from "react";
import {View,
        Text,
        StyleSheet,
        } from 'react-native';
import Button from '../components/Button';
const Welcome = ({navigation}) => {
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Kebap Fitness</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }

})
export default Welcome;
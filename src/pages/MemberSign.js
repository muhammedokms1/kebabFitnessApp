import React, { useState } from "react";
import { View,
        Button,
        StyleSheet,
        Alert,

} from 'react-native';
import Input from "../components/Input";

const MemberSign = ({navigation}) =>  {
    const [userName,setUserName] = useState(null);
    const [userSurname,setUserSurname] = useState(null);
    const [userAge,setUserAge] = useState(null);
    const [userEmail,setUserEmail] = useState(null);
    const [userKilo,setUserKilo] = useState(null);
    const [userSize,setUserSize] = useState(null);

    function handleSubmit(){
        if(!userName || !userSurname || !userAge || !userEmail || !userKilo || !userSize){
            Alert.alert('Kebap Fitness' , 'Bilgiler Boş Bırakılamaz');
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
            userKilo,
            userSize,
        }
        navigation.navigate('MemberResultScreen', {user})
    }
    return(
        <View style={styles.container}>
            <Input label="Ad" placeholder="Adınızı giriniz.."  
            onChangeText={setUserName}/>
            <Input label="Soyad" placeholder="Soyadını giriniz.." 
            onChangeText={setUserSurname}/>
            <Input label="Yaş" placeholder="Yaşınızı giriniz.." 
            onChangeText={setUserAge}/>
            <Input label="E-posta" placeholder="E-posta adresinizi giriniz.." 
            onChangeText={setUserEmail}/>
            <Input label="Kilo" placeholder="Kilonuzu giriniz.." 
             onChangeText={setUserKilo}/>
            <Input label="Boy" placeholder="Boyunuzu giriniz.." 
            onChangeText={setUserSize}/>
            <Button  title="Kaydı Tamamla" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 5,
    },
})
export default MemberSign;
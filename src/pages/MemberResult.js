import React from "react";
import { View,
        Text,
        StyleSheet,

} from 'react-native';

const MemberResult = ({route}) => {
    const {user} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Kayıt Tamamlandı</Text>
            <Text style={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-maili: {user.userEmail}</Text>
            <Text style={styles.label}>Üye Kilosu: {user.userKilo}</Text>
            <Text style={styles.label}>Üye Boyu: {user.userSize}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 10,
        padding: 10,

    },
    label:{
        fontSize:20,
        fontWeight: 'bold',
        padding: 1,
        margin: 2,



    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color: 'black',
        textAlign: 'center',
        margin: 10,
        padding: 10,
    }
})

export default MemberResult;
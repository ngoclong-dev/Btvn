import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.contaienr}>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}

        style={styles.input}/>
    </View>
  )
}
const styles=StyleSheet.create({
    contaienr:{
        backgroundColor:'white',
        width:'100%',
        borderColor:"#fffff",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
        
        

    },
    input:{}
})

export default CustomInput
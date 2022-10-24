import { View, Text ,Image,StyleSheet,useWindowDimensions} from 'react-native';
import React,{useState} from 'react';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {createStackNavigator} from '@react-navigation/stack';




const SignUpScreen = () => {
    


  

    const [username, setUsername]=useState('')
    const [email, setEmail]=useState('')

    const [password, setPassword]=useState('')

    const {height}=useWindowDimensions();

    const onSignUpPressed=()=>{
        
        console.warn("Sign in");
    }


    const ScreenTwo = () => {
        return (
          <View >
            <Text>Screen Two</Text>
          </View>
        );
      };
      





    return (
        
    <View style={styles.root}>
        <Image source={Logo} style={[styles.logo,{height:height*0.3}]} resizeMode="contain"></Image>
        <Text style={styles.title}>Create Account</Text>
        <CustomInput placeholder={'Name'} value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder={'Email'} value={email} setValue={setEmail} secureTextEntry={false}/>

        <CustomInput placeholder={'Password'}value={password} setValue={setPassword} secureTextEntry={true}/>

        <CustomButton text="Sign In"   />



    </View>
  )
};

const styles = StyleSheet.create(
    {
        root:{
            alignItems:'center',
            padding:20,
            

        },
        logo:{
            width:"70%",
            maxWidth:200,
           maxHeight:100,
        },
        title:
        {
            fontSize:30,
            fontWeight:'bold'

        }
    }
)


export default SignUpScreen
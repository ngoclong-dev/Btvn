import { View, Text ,Image,StyleSheet,useWindowDimensions} from 'react-native';
import React,{useState} from 'react';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';





const SignlnScreen = () => {
    


  

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const {height}=useWindowDimensions();

    const onSignInPressed=()=>{
        
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
        <CustomInput placeholder={'Name'} value={username} setValue={setUsername} secureTextEntry={false}/>
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
        }
    }
)


export default SignlnScreen
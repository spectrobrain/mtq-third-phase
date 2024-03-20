import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import CryptoJS from 'react-native-crypto-js'
import { useUserDataContext } from '../../contexts'
import { login } from '../../service'
import { horizontalScale,moderateScale,verticalScale} from '../../utils/metrics'

const { width, height } = Dimensions.get('window')

export const FormLogin = () => {
  const { user } = useUserDataContext()
  const [password, setPassword] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [secureText, setSecureText] = useState(true)
  const isTablet = width >= 768
  const handledButtonLogin = async () => {
    if (!username.trim()) {
      return Alert.alert('Please verify', 'Username cannot be empty.')
    }

    setIsLoading(true)
    const _secret: any = process.env.secret
    const encryptedPassword = CryptoJS.AES.encrypt(
      `${password}`,
      _secret
    ).toString()

    const params = {
      email: `${username}@mail.com`,
      encryptedPassword,
      password,
      username,
    }
    
    const loginResponse = await login(params)
    setIsLoading(false)

    if (loginResponse.resolveType === 'withError') {
      return Alert.alert('Error', 'An unexpected error occurred.')
    }

    user.set({
      ...loginResponse.data,
      expires: new Date().getTime() + Number(loginResponse.data.expires) * 1000,
    })
    setUserName('')
    setPassword('')
  }

  return (
    <View style={{...styles.formLoginContainer,paddingBottom:isTablet ? 250 : '80%',paddingTop:isTablet ? 120 : '40%'}}>
      <TextInput
        style={styles.inputTextEmail}
        value={username}
        placeholder='Username...'
        placeholderTextColor='#82888C'
        autoCapitalize='characters'
        onChangeText={text => setUserName(text)}
      />
      <View style={styles.viewTextPassword}>
        <TextInput
          style={styles.inputTextPassword}
          value={password}
          placeholder='Password...'
          placeholderTextColor='#82888C'
          secureTextEntry={secureText}
          onChangeText={text => setPassword(text)}
        />
        <Entypo
          name={secureText ? 'eye-with-line' : 'eye'}
          size={20}
          color='white'
          onPress={() => setSecureText(!secureText)}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => handledButtonLogin()}
        disabled={isLoading}
      >
        {isLoading ? (
          <Image
            style={styles.imageLoader}
            source={require('../../../assets/images/loader.gif')}
          />
        ) : (
          <Text style={styles.textbutton}>Log in</Text>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  formLoginContainer: {
    display: 'flex',
    width: horizontalScale(360),
    height:'60%', //verticalScale(250),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingBottom: '20%',
   // paddingTop: '20%',
   
  },
  inputTextEmail: {
    color: '#FFF',
    paddingLeft: horizontalScale(16),
    marginTop: verticalScale(10),
    width: moderateScale(280),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: moderateScale(6),
    fontSize: moderateScale(12)
  },
  inputTextPassword: {
    color: '#FFF',
    width: moderateScale(250),
    paddingLeft: horizontalScale(16),
    height: verticalScale(50),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(12)
  },
  viewTextPassword: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFF',
    marginTop: moderateScale(18),
    width: moderateScale(280),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: moderateScale(6),
    fontSize: moderateScale(12)
  },
  button: {
    backgroundColor: '#3ed9f4',
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(280),
    height: verticalScale(50),
    borderRadius:moderateScale(6),
    marginTop: moderateScale(18),
  },
  textbutton: {
    color: '#fff',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  buttonPressed: {
    backgroundColor: '#2db9d1', // Darker shade of your button color
  },
  imageLoader: {
    width: horizontalScale(40),
    height: verticalScale(50),
  },
})
export default FormLogin

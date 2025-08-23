// screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess } from '../store/AuthSlice';
import {
  AppleIcon,
  FacebookIcon,
  FaceScannerIcon,
  FingerPrintIcon,
  GoogleIcon,
} from '../constants/Images';
import Colors from '../constants/Colors';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Separator from '../components/Separator';
import SocialButtons from '../components/SocialButtons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    dispatch(loginStart());

    // Simulate API call
    setTimeout(() => {
      dispatch(loginSuccess({ email }));
    }, 1500);
  };

  return (
    <Wrapper>
      <Text style={styles.title}>Hi, Welcome Back!👋</Text>

      {error && <Text style={styles.error}>{error}</Text>}

      <InputField
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <InputField
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <CustomButton title="Login" onPress={handleLogin} />
      )}
      <TouchableOpacity style={styles.otpButton}>
        <Text style={{ color: '#000', fontSize: 18 }}>OTP Login</Text>
      </TouchableOpacity>
      <Separator />
      <SocialButtons />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ alignSelf: 'center' }}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.bioContainer}>
        {/* Fingerprint */}
        <TouchableOpacity style={styles.bioButton}>
          <FingerPrintIcon width={30} height={30} />
        </TouchableOpacity>

        {/* Face ID */}
        <TouchableOpacity style={styles.bioButton}>
          <FaceScannerIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight:'bold',
    marginVertical: 50,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 12,
  },

  otpButton: {
    height: 40,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: Colors.blue,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  bioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bioButton: {
    marginHorizontal: 15,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default LoginScreen;

// screens/SignUpScreen.js
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
import { signupStart, signupSuccess } from '../store/AuthSlice';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Separator from '../components/Separator';
import SocialButtons from '../components/SocialButtons';
import Colors from '../constants/Colors';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    dispatch(signupStart());

    // Simulate API call
    setTimeout(() => {
      dispatch(signupSuccess({ email }));
    }, 1500);
  };

  return (
    <Wrapper>
      <View style={styles.titleContainer}>
              <Text style={[styles.title,{fontSize:24, fontWeight:'bold'}]}>Create an account</Text>
      <Text style={styles.title}>Connect with your friends today!</Text>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}

      <InputField
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />
            <InputField
        placeholder="Enter Your Username"
        value={username}
        onChangeText={setUsername}
      />
            <InputField
        placeholder="Enter Your Email"
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
        <CustomButton title="Sign Up" onPress={handleSignUp} />
      )}
      <Separator />
      <SocialButtons />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}
      >
        <Text style={{textDecorationLine:'underline'}}>Don't have an account?</Text>
        <View style={{ width: '2%' }} />
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  titleContainer:{
    marginVertical:'10%',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: Colors.blue,
    textAlign: 'center',
    textDecorationLine:'underline',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SignUpScreen;

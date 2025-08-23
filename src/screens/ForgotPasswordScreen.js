// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart, resetPasswordSuccess } from '../store/AuthSlice';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleResetPassword = () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    dispatch(resetPasswordStart());
    
    // Simulate API call
    setTimeout(() => {
      dispatch(resetPasswordSuccess('12345'));
      setMessage('Password reset link has been sent to your email');
    }, 1500);
  };

  return (
    <Wrapper>
      <Text style={styles.title}>Reset Password</Text>
      
      {error && <Text style={styles.error}>{error}</Text>}
      {message && <Text style={styles.success}>{message}</Text>}
      
      <Text style={styles.description}>
        Enter your email address and we'll send you a link to reset your password.
      </Text>
      
      <InputField
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <CustomButton 
          title="Send Reset Link" 
          onPress={handleResetPassword} 
          disabled={!!message}
        />
      )}
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }} >
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight:'bold',
    marginTop:'10%',
    marginBottom:'2%',
    textAlign: 'center',
  },
  description: {
    marginBottom: '10%',
    textAlign: 'center',
    color: '#666',
  },
  link: {
    fontSize:18,
    fontWeight:'600',
    color: Colors.blue,
    textDecorationLine:'underline',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  success: {
    color: 'green',
    marginBottom: 15,
    textAlign: 'center',
  }
});

export default ForgotPasswordScreen;

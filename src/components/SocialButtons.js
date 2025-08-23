// components/SocialButtons.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FacebookIcon, GoogleIcon, AppleIcon } from '../constants/Images'; // adjust path

const SocialButtons = ({ onFacebookPress, onGooglePress, onApplePress }) => {
  return (
    <View style={styles.socialContainer}>
      {/* Facebook */}
      <TouchableOpacity style={styles.socialButton} onPress={onFacebookPress}>
        <FacebookIcon width={36} height={36} /> 
      </TouchableOpacity>

      {/* Google */}
      <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
        <GoogleIcon width={36} height={36} />
      </TouchableOpacity>

      {/* Apple */}
      <TouchableOpacity style={styles.socialButton} onPress={onApplePress}>
        <AppleIcon width={36} height={36} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: '5%',
  },
  socialButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, // gives breathing room for bigger icons
    borderRadius: 12,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default SocialButtons;

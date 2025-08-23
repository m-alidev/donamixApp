import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Man } from '../constants/Images';

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
    <Text style={{ fontSize: 16, color: '#000' }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.nextButton} {...props}>
    <Text style={styles.nextButtonText}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={styles.nextButton} {...props}>
    <Text style={styles.nextButtonText}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onDone={() => navigation.navigate('LogIn')}
      onSkip={() => navigation.navigate('LogIn')}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={Man} style={styles.image} />,
          title: 'Welcome to Donamix! Connect. Share. Discover',
          subtitle:
            'Join a community where your voice matters. Build meaningful connections and discover exciting content tailored just for you.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={Man} style={styles.image} />,
          title: 'Build Your Profile',
          subtitle:
            'Your identity, your way. Set up your profile to reflect your unique style. Upload a photo, share your interests, and let the world see who you really are!',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={Man} style={styles.image} />,
          title: 'Find Your Community',
          subtitle:
            'Explore chat hubs, send gifts, stream live, tune into radio, play games, plan a trip, and more. Your journey, your way!',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={Man} style={styles.image} />,
          title: 'Ready to Start?',
          subtitle:
            "Let's make your experience unforgettable. Start connecting now. Your journey begins here, where every moment counts.",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default OnboardingScreen;

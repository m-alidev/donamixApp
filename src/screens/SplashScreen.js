import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SplashLogo } from '../constants/Images';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade In
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second
      useNativeDriver: true,
    }).start(() => {
      // Wait 1.5 seconds, then fade out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate('Onboarding'); // Navigate to Onboarding screen
        });
      }, 1500);
    });
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* <View style={styles.centerContent}>
        <Image source={SplashLogo} width={10} height={10}/>
      </View> */}
      {/* <View style={styles.container}> */}
      {/* Logo */}
      <Image source={SplashLogo} style={styles.logo} />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={''}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot,]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    {/* </View> */}
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#1E1E1E',
  //   justifyContent: 'space-between',
  //   paddingVertical: 40,
  // },
  // centerContent: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // logo: {
  //   fontSize: 32,
  //   color: '#ffffff',
  //   fontWeight: 'bold',
  // },
  // footer: {
  //   alignItems: 'center',
  // },
  // getStarted: {
  //   fontSize: 18,
  //   color: '#fff',
  //   fontWeight: '600',
  //   // textDecorationLine: 'underline',
  // },
   container: {
    flex: 1,
    backgroundColor: '#111', // dark background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
});

import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import { ROUTES } from '../../constants/navigation';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1800,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.delay(1200),
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 1600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]);

    animation.start(({ finished }) => {
      if (finished) {
        navigation.replace(ROUTES.INTRO);
      }
    });

    return () => {
      logoOpacity.stopAnimation();
    };
  }, [logoOpacity, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoWrap, { opacity: logoOpacity }]}>
        <Image source={images.logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.brand}>DONAMIX</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B20',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 70,
  },
  logoWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    tintColor: '#FFFFFF',
  },
  brand: {
    color: '#FFFFFF',
    fontSize: fontSizes.title,
    letterSpacing: 1,
    fontWeight: '900',
    marginTop: -10,
  },
});

export default SplashScreen;

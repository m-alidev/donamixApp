/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useState } from 'react';
import AppNavigation from './src/navigations/Navigation';

function App() {
    const [showSplash, setShowSplash] = useState(true);
  return (
        <>
      {/* {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <View style={styles.main}>
          <Text style={styles.mainText}>Welcome to the App!</Text>
        </View>
      )} */}
      <AppNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const bulletItems = [
  '50 Thrilling Levels: Explore unique planets with vibrant levels and intricate puzzles.',
  'Boosters & Combos: Power up your game with boosters and combos to tackle those tricky puzzles.',
  'Daily Rewards: Log in daily to earn exciting rewards and enhance your gameplay.',
  'Global Leaderboards: Compete with players worldwide and see where you rank!',
];

const MatchManiaScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Match Mania Mix" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <View style={styles.planet} />
          <View style={styles.rocket}><Text style={styles.rocketTxt}>🚀</Text></View>
          <Text style={styles.bannerText}>MATCH{'\n'}MANIA{'\n'}MIX</Text>
          <Text style={styles.star}>⭐</Text>
        </View>

        <Text style={styles.title}>Match Mania Mix</Text>
        <Text style={styles.paragraph}>
          Try <Text style={styles.highlight}>Match Mania Mix - Your Ultimate Puzzle Adventure!</Text> Powered by Donamix, Match Mania Mix is here to challenge your puzzle-solving skills and keep you entertained for hours!
        </Text>

        <Text style={styles.subTitle}>What’s waiting for you?</Text>
        {bulletItems.map(item => (
          <Text key={item} style={styles.bullet}>• {item}</Text>
        ))}

        <Text style={styles.paragraph}>
          Match Mania Mix is more than just a game, it’s an experience. Stunning visuals, immersive gameplay, and the ultimate challenge are just a download away.
        </Text>
        <Text style={styles.paragraph}>
          👉 Download <Text style={styles.highlight}>Match Mania Mix</Text> now and get ready to embark on an exciting puzzle adventure!
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 14, paddingBottom: 18 },
  header: { height: 84, flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 10 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  banner: {
    height: 300,
    borderRadius: 16,
    marginBottom: 14,
    backgroundColor: '#8C52D8',
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'center',
  },
  planet: {
    position: 'absolute',
    left: -35,
    top: -35,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#C48C2E',
  },
  rocket: { position: 'absolute', right: 24, top: 24 },
  rocketTxt: { fontSize: fontSizes.title},
  bannerText: {
    color: '#fff',
    fontSize: fontSizes.title,
    fontWeight: '900',
    lineHeight: 62 / 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  star: { position: 'absolute', left: 18, bottom: 14, fontSize: fontSizes.title},
  title: { color: '#B611FF', fontSize: fontSizes.title, fontWeight: '700', marginBottom: 8 },
  paragraph: { color: '#17181E', fontSize: fontSizes.buttonText, lineHeight: 35 / 2, marginBottom: 10 },
  highlight: { color: '#B611FF', fontWeight: '700' },
  subTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700', marginBottom: 8 },
  bullet: { color: '#1C1D22', fontSize: fontSizes.buttonText, lineHeight: 34 / 2, marginBottom: 6 },
});

export default MatchManiaScreen;

import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const FEATURE_CARDS = [
  { id: 'f1', title: 'Innovation', subtitle: 'We leverage cutting-edge technology' },
  { id: 'f2', title: 'Integrity', subtitle: 'We foster cultural connections', active: true },
  { id: 'f3', title: 'Networking', subtitle: 'Connect and Socialize with Ease' },
];

const AboutUsScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="About Us" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={images.avatar} style={styles.hero} />

        <Text style={styles.sectionTitle}>About us</Text>
        <Text style={styles.aboutText}>
          <Text style={styles.bold}>DONAMIX</Text> is global community that offers a range of amazingly services. Since 2009, Donamix has grown from a simple chat site into a dynamic platform offering a range of unique services. As a large-scale social community, Donamix keeps on offering high-end services, so that the users could experience a new feel of life. As the world becomes more connected, it's important to have a platform that brings people together from all around the globe.
        </Text>
        <Text style={styles.aboutText}>
          At Donamix, we believe that everyone should have the opportunity to connect, share, discover, and explore boundless possibilities.
        </Text>

        <Text style={styles.sectionTitle}>What we do?</Text>
        <View style={styles.featureRow}>
          {FEATURE_CARDS.map(card => (
            <View key={card.id} style={[styles.featureCard, card.active ? styles.featureActive : null]}>
              <Icon name="settings-outline" size={36} color={card.active ? '#fff' : '#111217'} />
              <Text style={[styles.featureTitle, card.active ? styles.featureActiveText : null]}>{card.title}</Text>
              <Text style={[styles.featureSub, card.active ? styles.featureActiveText : null]}>{card.subtitle}</Text>
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}><Text style={styles.bold}>Connect:</Text> Donamix facilitates connections by providing a platform for users to connect and engage with others who share similar interests and passions.</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}><Text style={styles.bold}>Empower:</Text> Donamix empowers individuals by giving them the tools and resources to express themselves, share their talents, and build their personal brand.</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}><Text style={styles.bold}>Innovate:</Text> Donamix is at the forefront of innovation in the social networking space. It continuously introduces new features and functionalities to enhance user experience.</Text>
        </View>
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
  hero: { width: '100%', height: 250, borderRadius: 12, marginBottom: 12 },
  sectionTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700', marginBottom: 10 },
  aboutText: { color: '#202127', fontSize: fontSizes.buttonText, lineHeight: 37 / 2, marginBottom: 10 },
  bold: { fontWeight: '700' },
  featureRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  featureCard: { width: '31.5%', borderRadius: 14, backgroundColor: '#E4E4E6', alignItems: 'center', padding: 10 },
  featureActive: { backgroundColor: '#0C0D12' },
  featureTitle: { marginTop: 8, color: '#111217', fontSize: fontSizes.subMenu, fontWeight: '700' },
  featureSub: { marginTop: 2, color: '#313238', fontSize: fontSizes.subTitle, textAlign: 'center' },
  featureActiveText: { color: '#fff' },
  infoCard: { backgroundColor: '#E4E4E6', borderRadius: 14, padding: 14, marginBottom: 10 },
  infoText: { color: '#404148', fontSize: fontSizes.subMenu, lineHeight: 33 / 2 },
});

export default AboutUsScreen;

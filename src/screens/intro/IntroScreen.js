import React, { useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { introSlides } from '../../data/mockData';
import { ROUTES } from '../../constants/navigation';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const Illustration = ({ type }) => {
  if (type === 'ready') {
    return (
        <View style={styles.photoFrame}>
        <Image source={images.introReady} style={styles.photo} resizeMode="cover" />
        <View style={styles.playOverlay}>
          <Icon name="play" size={20} color="#FFFFFF" />
        </View>
      </View>
    );
  }

  if (type === 'community') {
    return (
      <View style={styles.illusCenter}>
        <View style={styles.circleBg} />
        <View style={styles.phoneFrame}>
          <View style={styles.chatBubbleLeft} />
          <View style={styles.chatBubbleRight} />
          <View style={[styles.chatBubbleLeft, { top: 120 }]} />
          <View style={[styles.chatBubbleRight, { top: 164 }]} />
        </View>
      </View>
    );
  }

  if (type === 'profile') {
    return (
      <View style={styles.illusCenter}>
        <View style={styles.cardStack}>
          <View style={styles.profileCardHeader}>
            <Icon name="person-circle-outline" size={58} color="#4B4C63" />
            <View style={styles.textBars}>
              <View style={styles.bar} />
              <View style={[styles.bar, { width: 64 }]} />
            </View>
          </View>
          <View style={styles.tileRow}>
            <View style={styles.tile} />
            <View style={styles.tile} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.illusCenter}>
      <View style={styles.phoneWrap}>
        <View style={styles.phoneTopNotch} />
        <View style={styles.mockPost}>
          <Icon name="person" size={38} color="#46475E" />
        </View>
        <View style={styles.heartRow}>
          <Icon name="heart" size={16} color="#0D0E13" />
          <Icon name="heart" size={16} color="#0D0E13" />
          <Icon name="heart" size={16} color="#0D0E13" />
        </View>
      </View>
      <View style={styles.sideAvatar} />
    </View>
  );
};

const IntroScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const slide = introSlides[index];
  const isLast = index === introSlides.length - 1;

  const dotWidth = useMemo(() => (index === 0 ? 24 : 8), [index]);

  const onSkip = () => {
    navigation.replace(ROUTES.AUTH_STACK);
  };

  const onNext = () => {
    if (isLast) {
      onSkip();
      return;
    }
    setIndex(prev => prev + 1);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Pressable style={styles.skipBtn} onPress={onSkip} hitSlop={10}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>

        <View style={styles.topArea}>
          <Illustration type={slide.art} />
        </View>

        <View style={styles.contentArea}>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.subtitle}>{slide.subtitle}</Text>
        </View>

        <View style={styles.bottomArea}>
          <Pressable style={styles.nextCircle} onPress={onNext}>
            <View style={styles.nextInner}>
              <Icon name="remove" size={18} color="#FFFFFF" />
              <Icon name="play" size={15} color="#FFFFFF" />
            </View>
          </Pressable>
          <Text style={styles.nextText}>Next</Text>

          <View style={styles.bottomDots}>
            {introSlides.map((item, dotIndex) => (
              <View
                key={item.id}
                style={[
                  styles.dot,
                  dotIndex === index && styles.dotActive,
                  dotIndex === index && index === 0 ? { width: dotWidth } : null,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E9E9EA',
  },
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    marginHorizontal: 18,
    marginVertical: 16,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 24,
  },
  skipBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  skipText: {
    fontSize: fontSizes.subMenu,
    fontWeight: '700',
    color: '#17181F',
  },
  topArea: {
    minHeight: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentArea: {
    marginTop: 8,
    alignItems: 'center',
    paddingHorizontal: 6,
    gap: 12,
  },
  title: {
    fontSize: fontSizes.title,
    lineHeight: 60,
    textAlign: 'center',
    color: '#111219',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: fontSizes.subMenu,
    lineHeight: 30,
    textAlign: 'center',
    color: '#5D5D62',
    fontWeight: '500',
  },
  bottomArea: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 6,
  },
  nextCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#191A20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },
  nextText: {
    fontSize: fontSizes.title,
    color: '#1B1C22',
    fontWeight: '700',
    marginTop: 10,
  },
  bottomDots: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9C9CD',
  },
  dotActive: {
    backgroundColor: '#191A20',
  },

  illusCenter: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneWrap: {
    width: 180,
    height: 292,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#1F2026',
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    paddingTop: 16,
  },
  phoneTopNotch: {
    width: 64,
    height: 14,
    borderRadius: 8,
    backgroundColor: '#1D1E25',
    marginBottom: 12,
  },
  mockPost: {
    width: 140,
    height: 130,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartRow: {
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'flex-start',
    marginLeft: 18,
    marginTop: 12,
  },
  sideAvatar: {
    position: 'absolute',
    right: 74,
    top: 64,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#D4D4D6',
  },

  cardStack: {
    width: 262,
    height: 276,
    borderRadius: 16,
    backgroundColor: '#EBEBEC',
    borderWidth: 1,
    borderColor: '#E4E4E5',
    padding: 14,
    justifyContent: 'space-between',
  },
  profileCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textBars: {
    gap: 8,
  },
  bar: {
    width: 92,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#C9C9CF',
  },
  tileRow: {
    flexDirection: 'row',
    gap: 10,
  },
  tile: {
    flex: 1,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#D7D7DB',
  },

  circleBg: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#BDBDC7',
    position: 'absolute',
    top: 20,
  },
  phoneFrame: {
    width: 180,
    height: 302,
    borderWidth: 6,
    borderColor: '#20212A',
    borderRadius: 18,
    backgroundColor: '#DFDFE3',
    padding: 16,
  },
  chatBubbleLeft: {
    width: 84,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#4B4C63',
    marginBottom: 12,
  },
  chatBubbleRight: {
    position: 'absolute',
    right: 16,
    top: 86,
    width: 84,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#252630',
  },

  photoFrame: {
    width: '100%',
    maxWidth: 420,
    height: 300,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#D6D7DA',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  playOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -22,
    marginTop: -22,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#00000055',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IntroScreen;

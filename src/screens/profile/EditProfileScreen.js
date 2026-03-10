import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { ROUTES } from '../../constants/navigation';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const MENU_ITEMS = [
  { id: 'basic', label: 'Basic Information', route: ROUTES.BASIC_INFORMATION },
  { id: 'hobbies', label: 'My Hobbies', route: ROUTES.MY_HOBBIES },
  { id: 'edu-work', label: 'Education and Work', route: ROUTES.EDUCATION_WORK },
  { id: 'connections', label: 'My Connections' },
  { id: 'profile', label: 'My Profile' },
  { id: 'security', label: 'Security', route: ROUTES.CHANGE_PASSWORD },
  { id: 'trips', label: 'Travel Trips', route: ROUTES.TRIPS },
  { id: 'settings', label: 'Settings', route: ROUTES.SETTINGS },
];

const EditProfileScreen = ({ navigation }) => {
  const onItemPress = item => {
    if (item.route) {
      navigation.navigate(item.route);
    }
  };

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={
        <AppHeader
          title=""
          onLeftPress={() => navigation.goBack()}
          mode="plain"
          containerStyle={styles.header}
          rightIcons={[{ icon: 'grid-outline', size: 30 }, { icon: 'ellipsis-vertical', size: 26 }]}
        />
      }
    >
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.coverSection}>
          <View style={styles.coverEdit}>
            <Icon name="create-outline" size={36} color="#111217" />
            <Text style={styles.coverEditText}>Change Cover</Text>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.avatarWrap}>
              <Image source={images.avatar} style={styles.avatar} />
              <View style={styles.cameraBadge}>
                <Icon name="camera" size={24} color="#fff" />
              </View>
            </View>
            <Text style={styles.name}>John Doe <Icon name="create-outline" size={20} color="#111217" /></Text>
            <Text style={styles.subline}>Add personal information</Text>
          </View>
        </View>

        <View style={styles.bioBox}>
          <Text style={styles.bioPlaceholder}>Write some Short Bio</Text>
        </View>

        <View style={styles.menuWrap}>
          <Text style={styles.infoHead}>Info</Text>
          {MENU_ITEMS.map(item => (
            <TouchableOpacity key={item.id} onPress={() => onItemPress(item)} style={styles.menuItem} activeOpacity={0.8}>
              <Text style={[styles.menuText, item.id === 'trips' ? styles.boldText : null]}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  screen: { flex: 1, paddingHorizontal: 14 },
  header: { height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  coverSection: { marginTop: 8 },
  coverEdit: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 8, marginBottom: 10 },
  coverEditText: { color: '#1D1E23', fontSize: fontSizes.buttonText, fontWeight: '500' },
  profileCard: { backgroundColor: '#F1F1F2', borderRadius: 14, alignItems: 'center', paddingBottom: 18, paddingTop: 12 },
  avatarWrap: { width: 138, height: 138, borderRadius: 69, borderWidth: 2, borderColor: '#E6E6E8', marginTop: -4, marginBottom: 10 },
  avatar: { width: '100%', height: '100%', borderRadius: 69 },
  cameraBadge: {
    position: 'absolute',
    top: 48,
    left: 48,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#111217',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700', marginBottom: 4 },
  subline: { color: '#1D1E23', fontSize: fontSizes.buttonText},
  bioBox: { marginTop: 14, height: 98, borderRadius: 12, backgroundColor: '#F1F1F2', justifyContent: 'center', paddingHorizontal: 16 },
  bioPlaceholder: { color: '#A9A9AE', fontSize: fontSizes.buttonText},
  menuWrap: { marginTop: 20, paddingHorizontal: 4, paddingBottom: 40 },
  infoHead: { color: '#101116', fontSize: fontSizes.buttonText, fontWeight: '700', marginBottom: 10 },
  menuItem: { height: 74, justifyContent: 'center' },
  menuText: { color: '#3A3B40', fontSize: fontSizes.buttonText, fontWeight: '500' },
  boldText: { color: '#111217', fontWeight: '700' },
});

export default EditProfileScreen;

import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const REACTIONS = [
  { id: 'terrible', icon: '😠', label: 'Terrible' },
  { id: 'bad', icon: '☹️', label: 'Bad' },
  { id: 'good', icon: '👍', label: 'Good' },
  { id: 'love', icon: '😍', label: 'Loved It' },
];

const FeedbackScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('good');

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Feedback" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <View style={styles.card}>
        <View style={styles.cardHead}>
          <View style={styles.iconWrap}><Icon name="chatbubble-ellipses-outline" size={30} color="#111217" /></View>
          <View style={styles.headTxtWrap}>
            <Text style={styles.headTitle}>Send us your feedback</Text>
            <Text style={styles.headSub}>Do you have any suggestion or had any problem? Let us know below</Text>
          </View>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.q1}>How was you experience using our app ?</Text>
          <View style={styles.userRow}>
            <Image source={images.avatar} style={styles.avatar} />
            <Text style={styles.userName}>Smith Mathew</Text>
          </View>

          <View style={styles.reactionsRow}>
            {REACTIONS.map(item => (
              <TouchableOpacity key={item.id} style={styles.reactionItem} onPress={() => setSelected(item.id)}>
                <Text style={styles.reactionEmoji}>{item.icon}</Text>
                <Text style={[styles.reactionLabel, selected === item.id ? styles.activeLabel : null]}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.divider} />
        <View style={styles.feedbackArea}>
          <Text style={styles.feedbackTitle}>Give your feedback below</Text>
          <TextInput
            style={styles.feedbackInput}
            multiline
            placeholder="Describe your experience"
            placeholderTextColor="#A0A0A5"
            textAlignVertical="top"
          />
        </View>

        <View style={styles.footerActions}>
          <TouchableOpacity>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendBtn}>
            <Text style={styles.sendText}>Send Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 10 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  card: { marginHorizontal: 12, backgroundColor: '#F1F1F2', borderRadius: 16, borderWidth: 1, borderColor: '#D8D8DC', overflow: 'hidden' },
  cardHead: { minHeight: 128, backgroundColor: '#05060B', padding: 14, flexDirection: 'row', alignItems: 'center' },
  iconWrap: { width: 74, height: 74, borderRadius: 37, backgroundColor: '#F1F1F2', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  headTxtWrap: { flex: 1 },
  headTitle: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '700' },
  headSub: { color: '#E3E3E7', fontSize: fontSizes.subMenu, marginTop: 4, lineHeight: 24 },
  cardBody: { padding: 14 },
  q1: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '600', textAlign: 'center' },
  userRow: { marginTop: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 },
  avatar: { width: 66, height: 66, borderRadius: 33 },
  userName: { color: '#111217', fontSize: fontSizes.title, fontWeight: '600' },
  reactionsRow: { marginTop: 22, flexDirection: 'row', justifyContent: 'space-between' },
  reactionItem: { alignItems: 'center', width: '24%' },
  reactionEmoji: { fontSize: fontSizes.title},
  reactionLabel: { marginTop: 4, color: '#1B1C21', fontSize: fontSizes.subMenu},
  activeLabel: { fontWeight: '700' },
  divider: { borderBottomWidth: 1, borderBottomColor: '#C7C7CC' },
  feedbackArea: { padding: 14 },
  feedbackTitle: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '600', marginBottom: 10 },
  feedbackInput: { height: 230, borderRadius: 12, borderWidth: 1, borderColor: '#BFBFC4', backgroundColor: '#F7F7F8', padding: 14, fontSize: fontSizes.paragraph, color: '#111217' },
  footerActions: { paddingHorizontal: 14, paddingBottom: 14, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 14 },
  skipText: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '500' },
  sendBtn: { height: 54, borderRadius: 14, backgroundColor: '#0A0B10', paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center' },
  sendText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '500' },
});

export default FeedbackScreen;

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ModalShell from '../../components/ModalShell';
import ScreenContainer from '../../components/ScreenContainer';
import { ROUTES } from '../../constants/navigation';
import { resolveTheme } from '../../utils/theme';
import fontSizes from '../../constants/fontsize';

const LiveStreamScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);
  const [joinVisible, setJoinVisible] = useState(false);
  const [endVisible, setEndVisible] = useState(false);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Live Stream" rightIcon="analytics-outline" onRightPress={() => navigation.navigate(ROUTES.LIVE_ANALYTICS)} />
      <View style={[styles.videoArea, { backgroundColor: theme.surfaceAlt, borderColor: theme.border }]}>
        <Text style={{ color: theme.text, fontWeight: '700' }}>Live video UI placeholder</Text>
        <View style={[styles.viewer, { backgroundColor: '#00000066' }]}>
          <Text style={styles.viewerText}>1,284 watching</Text>
        </View>
        <View style={styles.commentOverlay}>
          <Text style={styles.commentText}>@mina: Amazing stream!</Text>
          <Text style={styles.commentText}>@noah: Send gifts now 🔥</Text>
        </View>
        <View style={styles.giftAnim}>
          <Text style={styles.giftText}>Gift animation placeholder</Text>
        </View>
      </View>
      <AppCard theme={theme}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Live Actions</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.surfaceAlt }]} onPress={() => setJoinVisible(true)}>
            <Text style={{ color: theme.text }}>Join Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.surfaceAlt }]} onPress={() => setEndVisible(true)}>
            <Text style={{ color: theme.text }}>End Live</Text>
          </TouchableOpacity>
        </View>
      </AppCard>

      <ModalShell theme={theme} visible={joinVisible} onClose={() => setJoinVisible(false)}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Join Request Modal</Text>
        <AppButton title="Approve" theme={theme} onPress={() => setJoinVisible(false)} />
      </ModalShell>

      <ModalShell theme={theme} visible={endVisible} onClose={() => setEndVisible(false)}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>End Live Modal</Text>
        <AppButton title="End Stream" theme={theme} onPress={() => setEndVisible(false)} />
      </ModalShell>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  videoArea: { height: 360, borderRadius: 18, borderWidth: 1, padding: 12, justifyContent: 'space-between' },
  viewer: { alignSelf: 'flex-start', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  viewerText: { color: '#FFFFFF', fontSize: fontSizes.paragraph, fontWeight: '700' },
  commentOverlay: { gap: 6 },
  commentText: { color: '#FFFFFF', fontWeight: '600' },
  giftAnim: { alignSelf: 'center', backgroundColor: '#00000080', padding: 8, borderRadius: 10 },
  giftText: { color: '#FFFFFF' },
  sectionTitle: { fontSize: fontSizes.subMenu, fontWeight: '700' },
  actions: { flexDirection: 'row', gap: 10, marginTop: 10 },
  actionBtn: { flex: 1, padding: 12, borderRadius: 12, alignItems: 'center' },
});

export default LiveStreamScreen;

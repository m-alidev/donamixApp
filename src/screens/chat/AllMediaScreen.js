import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const mediaItems = Array.from({ length: 15 }).map((_, i) => ({ id: `m-${i}`, source: images.introReady }));
const docs = [
  { id: 'd1', name: 'Donamix.txt', size: '4.3 kb .txt', time: '12 : 24 am', icon: 'document-text-outline' },
  { id: 'd2', name: 'Donamix.pdf', size: '4.3 kb .pdf', time: '12 : 24 am', icon: 'document-outline' },
  { id: 'd3', name: 'Donamix.docx', size: '4.3 kb .pdf', time: '12 : 24 am', icon: 'document-attach-outline' },
];

const AllMediaScreen = ({ navigation, route }) => {
  const [tab, setTab] = useState(route.params?.tab || 'media');
  const tabs = useMemo(() => ['media', 'docs', 'links'], []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#13141A" />
        </TouchableOpacity>
        <Text style={styles.title}>All Media</Text>
      </View>

      <View style={styles.searchWrap}>
        <Icon name="search-outline" size={34} color="#2A2A2F" />
        <TextInput placeholder="Search here.." placeholderTextColor="#B2B2B6" style={styles.searchInput} />
      </View>

      <View style={styles.segment}>
        {tabs.map(item => {
          const active = tab === item;
          return (
            <TouchableOpacity key={item} style={[styles.segmentItem, active && styles.segmentActive]} onPress={() => setTab(item)}>
              <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{item === 'media' ? 'Media' : item === 'docs' ? 'Docs' : 'Links'}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {tab === 'media' && (
        <ScrollView style={styles.body} contentContainerStyle={styles.grid}>
          {mediaItems.map(item => (
            <Image key={item.id} source={item.source} style={styles.mediaCard} />
          ))}
        </ScrollView>
      )}

      {tab === 'docs' && (
        <ScrollView style={styles.body}>
          {docs.map(doc => (
            <View key={doc.id} style={styles.docRow}>
              <Icon name={doc.icon} size={44} color="#111" />
              <View style={styles.docInfo}>
                <Text style={styles.docName}>{doc.name}</Text>
                <Text style={styles.docMeta}>{doc.size}</Text>
              </View>
              <Text style={styles.docTime}>{doc.time}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      {tab === 'links' && (
        <View style={styles.body}>
          <Text style={styles.linkInfo}>Only VIPs, Admins, and Guardians can share links.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingTop: 8, marginBottom: 12 },
  title: { fontSize: fontSizes.title, fontWeight: '700', color: '#101117', marginLeft: 12 },
  searchWrap: {
    marginHorizontal: 14,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#D6D6D8',
    backgroundColor: '#EFEFF0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: fontSizes.subMenu, color: '#1F2025' },
  segment: { marginHorizontal: 14, height: 50, borderRadius: 25, backgroundColor: '#D5D5D8', flexDirection: 'row', padding: 2, marginBottom: 12 },
  segmentItem: { flex: 1, borderRadius: 23, alignItems: 'center', justifyContent: 'center' },
  segmentActive: { backgroundColor: '#000' },
  segmentText: { color: '#18191F', fontSize: fontSizes.subMenu, fontWeight: '600' },
  segmentTextActive: { color: '#fff' },
  body: { flex: 1, paddingHorizontal: 14 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: 20 },
  mediaCard: { width: '31%', aspectRatio: 1, borderRadius: 2, marginBottom: 10, backgroundColor: '#ddd' },
  docRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  docInfo: { flex: 1, marginLeft: 12 },
  docName: { color: '#15161B', fontSize: fontSizes.subMenu, fontWeight: '600' },
  docMeta: { color: '#8B8B90', fontSize: fontSizes.subTitle, marginTop: 2 },
  docTime: { color: '#222328', fontSize: fontSizes.subTitle},
  linkInfo: { marginTop: 18, color: '#8A8A90', fontSize: fontSizes.subMenu},
});

export default AllMediaScreen;

import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const FAQS = [
  {
    id: 'q1',
    q: 'What is Donamix?',
    a: 'Donamix is a global social network that brings people together from all over the world. Our platform offers communication, networking, and engagement.',
  },
  { id: 'q2', q: 'What are the membership plans on Donamix?' },
  { id: 'q3', q: 'What is the VIP Plan?' },
  { id: 'q4', q: 'What is the Guardian Plan?' },
  { id: 'q5', q: 'What is the Admin Plan?' },
  { id: 'q6', q: 'How do I upgrade to a premium membership plan?' },
  { id: 'q7', q: 'How can I report inappropriate content or behavior?' },
  { id: 'q8', q: 'How can I connect with other members?' },
  { id: 'q9', q: 'How do I mute or kick users in chat hubs?' },
  { id: 'q10', q: 'How can I contact Donamix support?' },
  { id: 'q11', q: 'Can I kick user with Guardian Plan?' },
  { id: 'q12', q: 'Can I cancel my premium membership?' },
];

const HelpSupportScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState('q1');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return FAQS;
    }
    return FAQS.filter(item => item.q.toLowerCase().includes(term) || item.a?.toLowerCase().includes(term));
  }, [query]);

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Help & Support" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Frequently Asked Questions</Text>

        <View style={styles.searchWrap}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
            placeholder="Looking for something specific"
            placeholderTextColor="#7D7E83"
          />
          <Icon name="search-outline" size={34} color="#9C9CA1" />
        </View>

        {filtered.map(item => {
          const open = openId === item.id;
          return (
            <View key={item.id} style={styles.faqCard}>
              <TouchableOpacity style={styles.faqHead} onPress={() => setOpenId(prev => (prev === item.id ? '' : item.id))}>
                <Text style={styles.faqQ}>{item.q}</Text>
                <Icon name={open ? 'chevron-up' : 'chevron-down'} size={26} color="#111217" />
              </TouchableOpacity>
              {open && item.a ? <Text style={styles.faqA}>{item.a}</Text> : null}
            </View>
          );
        })}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 12, paddingBottom: 18 },
  header: { height: 84, flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 10 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  pageTitle: { marginTop: 10, marginBottom: 14, color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  searchWrap: {
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#D7D7DB',
    backgroundColor: '#F1F1F2',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  searchInput: { flex: 1, color: '#15161B', fontSize: fontSizes.buttonText},
  faqCard: { backgroundColor: '#E4E4E6', borderRadius: 14, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 10 },
  faqHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  faqQ: { flex: 1, color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '600', paddingRight: 8 },
  faqA: { marginTop: 8, color: '#4A4B50', fontSize: fontSizes.buttonText, lineHeight: 33 / 2 },
});

export default HelpSupportScreen;

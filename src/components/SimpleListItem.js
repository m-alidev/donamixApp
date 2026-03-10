import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import fontSizes from '../constants/fontsize';

const SimpleListItem = ({ theme, title, subtitle, icon = 'chevron-forward', onPress }) => (
  <TouchableOpacity style={[styles.row, { borderColor: theme.border, backgroundColor: theme.surface }]} onPress={onPress}>
    <View style={styles.textWrap}>
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      {!!subtitle && <Text style={[styles.subtitle, { color: theme.mutedText }]}>{subtitle}</Text>}
    </View>
    <Icon name={icon} size={20} color={theme.mutedText} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrap: { flex: 1, marginRight: 12 },
  title: { fontSize: fontSizes.subTitle, fontWeight: '600' },
  subtitle: { fontSize: fontSizes.paragraph, marginTop: 2 },
});

export default SimpleListItem;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import fontSizes from '../constants/fontsize';

const AppHeader = ({
  theme,
  title,
  subtitle,
  onLeftPress,
  leftIcon = 'arrow-back',
  leftSize = 31,
  leftColor,
  rightIcon,
  onRightPress,
  rightIcons,
  rightSize = 28,
  rightColor,
  mode,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  const usePillIcons = mode === 'pill' || (!mode && !!theme);
  const textColor = theme?.text || '#111217';
  const secondaryTextColor = theme?.mutedText || '#6C6D72';
  const iconColor = leftColor || textColor;
  const finalRightColor = rightColor || textColor;
  const rightActions = rightIcons || (rightIcon ? [{ icon: rightIcon, onPress: onRightPress }] : []);

  return (
    <View style={[styles.row, containerStyle]}>
      {onLeftPress ? (
        <TouchableOpacity
          onPress={onLeftPress}
          style={usePillIcons ? [styles.iconWrap, { backgroundColor: theme?.surfaceAlt || '#ECECEE' }] : styles.iconPlain}
        >
          <Icon name={leftIcon} size={leftSize} color={iconColor} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      <View style={styles.center}>
        <Text style={[styles.title, { color: textColor }, titleStyle]}>{title}</Text>
        {!!subtitle && <Text style={[styles.subtitle, { color: secondaryTextColor }, subtitleStyle]}>{subtitle}</Text>}
      </View>

      <View style={styles.rightRow}>
        {rightActions.map((item, idx) => (
          <TouchableOpacity
            key={`${item.icon}-${idx}`}
            onPress={item.onPress}
            style={usePillIcons ? [styles.iconWrap, { backgroundColor: theme?.surfaceAlt || '#ECECEE' }] : styles.iconPlain}
          >
            <Icon name={item.icon} size={item.size || rightSize} color={item.color || finalRightColor} />
          </TouchableOpacity>
        ))}
        {!rightActions.length ? <View style={styles.iconPlaceholder} /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { minHeight: 58, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  center: { flex: 1, alignItems: 'flex-start', paddingHorizontal: 8 },
  title: { fontSize: fontSizes.title, fontWeight: '700' },
  subtitle: { fontSize: fontSizes.paragraph, marginTop: 2 },
  iconWrap: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  iconPlain: { minWidth: 34, minHeight: 34, alignItems: 'center', justifyContent: 'center' },
  rightRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconPlaceholder: { width: 38, height: 38 },
});

export default AppHeader;

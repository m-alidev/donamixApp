import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BadgePill from './BadgePill';
import fontSizes from '../constants/fontsize';

const ChatBubble = ({ theme, message }) => {
  const mine = message.sender === 'me';

  return (
    <View style={[styles.row, mine ? styles.right : styles.left]}>
      <View
        style={[
          styles.bubble,
          {
            backgroundColor: mine ? theme.primary : theme.surface,
            borderColor: mine ? theme.primary : theme.border,
          },
        ]}
      >
        {!!message.role && !mine && <BadgePill role={message.role} />}
        {message.type === 'media' ? (
          <View style={[styles.media, { borderColor: mine ? '#FFFFFF66' : theme.border }]}>
            <Text style={[styles.text, { color: mine ? '#FFFFFF' : theme.text }]}>{message.mediaLabel}</Text>
          </View>
        ) : (
          <Text style={[styles.text, { color: mine ? '#FFFFFF' : theme.text }]}>{message.text}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { marginBottom: 10, flexDirection: 'row' },
  right: { justifyContent: 'flex-end' },
  left: { justifyContent: 'flex-start' },
  bubble: {
    maxWidth: '80%',
    borderRadius: 14,
    borderWidth: 1,
    padding: 10,
    gap: 6,
  },
  text: { fontSize: fontSizes.subTitle, lineHeight: 20 },
  media: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default ChatBubble;

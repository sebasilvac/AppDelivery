import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '@/Presentation/theme/appTheme';

interface RoundedButtonProps {
  text: string;
  onPress?: () => void;
}

export const RoundedButton = (props: RoundedButtonProps) => {

  const { text, onPress } = props;

  return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.roundedButton}
      >
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  roundedButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 15,
  },
  textButton: {
    color: '#fff',
  },
});
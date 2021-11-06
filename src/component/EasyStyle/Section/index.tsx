import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { styles } from './style';
import { Style } from '@react-pdf/types/style';

const Section: React.FC<{ title: string; style?: Style }> = ({
  title,
  style,
  children
}) => (
  <>
    <View style={[styles.fr, style]}>
      <View style={styles.divider} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.children}>{children}</View>
  </>
);

export default Section;

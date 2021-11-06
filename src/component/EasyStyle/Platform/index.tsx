import { Image, Text, View } from '@react-pdf/renderer';
import { SourceObject } from '@react-pdf/types/image';
import React from 'react';
import { Style } from '@react-pdf/types/style';
import { styles } from './style';

const PlatForm: React.FC<{ icon: SourceObject; url: string; style?: Style }> =
  ({ icon, url, style }) => (
    <View style={[styles.fr, style]}>
      <Image src={icon} style={styles.icon} />
      <Text style={styles.url}>{url}</Text>
    </View>
  );

export default PlatForm;

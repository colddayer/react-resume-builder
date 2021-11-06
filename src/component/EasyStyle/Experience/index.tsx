import { Image, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { SourceObject } from '@react-pdf/types/image';
import { styles } from './style';

const Experience: React.FC<{
  icon?: SourceObject;
  mainText: string;
  secondText?: string;
  time: string;
}> = ({ icon, mainText, secondText, time, children }) => (
  <>
    <View style={[styles.fr, { alignItems: 'center' }]}>
      <View>{!!icon && <Image src={icon} style={styles.icon} />}</View>
      <View style={[styles.fr, styles.jcstw]}>
        <View>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.secondText}>{secondText}</Text>
        </View>
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
    <View style={styles.children}>{children}</View>
  </>
);

export default Experience;

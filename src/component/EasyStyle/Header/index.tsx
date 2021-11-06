import { Image, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { getImage } from '../../../static/image';
import { styles } from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2845579061-6A76ACA4BD89547F1A8D69FEE1410CED%2F0%3Ffmt%3Djpg%26size%3D27%26h%3D700%26w%3D700%26ppv%3D1.jpg"
          style={styles.avatar}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>你的名字</Text>
        <View style={[styles.fr, styles.block]}>
          <Text style={styles.desc}>男</Text>
          <Text style={[styles.desc, styles.divide]}>|</Text>
          <Text style={[styles.desc, styles.divide]}>XX年</Text>
        </View>
        <View style={[styles.fr, styles.block]}>
          <Text style={styles.desc}>本科</Text>
          <Text style={[styles.desc, styles.divide]}>|</Text>
          <Text style={[styles.desc, styles.divide]}>XXXXX大学</Text>
          <Text style={[styles.desc, styles.divide]}>|</Text>
          <Text style={[styles.desc, styles.divide]}>XXXX专业</Text>
        </View>
        <View style={[styles.fr, styles.block]}>
          <Text style={styles.desc}>期望职位</Text>
          <Text style={[styles.desc, styles.divide]}>|</Text>
          <Text style={[styles.desc, styles.divide]}>XXXXXXXX</Text>
        </View>
        <View style={[styles.fr, styles.block]}>
          <Image src={getImage('phoneIcon')} style={styles.phone} />
          <Text style={[styles.desc, styles.divide]}>111xxxx1111</Text>
          <Image src={getImage('emailIcon')} style={styles.email} />
          <Text style={[styles.desc, styles.divide]}>xxxx@xx.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

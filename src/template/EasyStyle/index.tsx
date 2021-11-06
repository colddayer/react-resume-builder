import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import Header from '../../component/EasyStyle/Header';
import { styles } from './style';
import PlatForm from '../../component/EasyStyle/Platform';
import { getImage } from '../../static/image';
import Section from '../../component/EasyStyle/Section';
import Experience from '../../component/EasyStyle/Experience';

const Easy = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Section title="社交平台" style={styles.titleTop}>
          <PlatForm
            icon={getImage('githubIcon')}
            url="https://github.com/xxxxx"
          />
        </Section>
        <Section title="专业技能" style={styles.titleTop}>
          <Text style={styles.skill}>
            Your Skills: Something / Something / Something / Something
          </Text>
          <Text style={styles.skill}>
            Your Skills: Something / Something / Something / Something
          </Text>
          <Text style={styles.skill}>
            Your Skills: Something / Something / Something / Something
          </Text>
          <Text style={styles.skill}>
            Your Skills: Something / Something / Something / Something
          </Text>
          <Text style={styles.skill}>
            Your Skills: Something / Something / Something / Something
          </Text>
        </Section>
        <Section title="工作经历" style={styles.titleTop}>
          <Experience
            mainText="XXXXX公司"
            secondText="XXX部门 | XXX职位"
            time="xxxx/xx/xx - xxxx/xx/xx"
            icon={getImage('companyIcon')}
          />
          <View style={styles.mb10} />
          <Experience
            mainText="XXXXX公司"
            secondText="XXX部门 | XXX职位"
            time="xxxx/xx/xx - xxxx/xx/xx"
            icon={getImage('companyIcon')}
          />
        </Section>
        <Section title="项目经历" style={styles.titleTop}>
          <Experience mainText="XXXXX项目" time="xxxx/xx/xx - xxxx/xx/xx">
            <Text>Something you did</Text>
          </Experience>
        </Section>
      </View>
    </View>
  );
};

export default Easy;

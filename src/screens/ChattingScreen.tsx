import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
  Header,
  ChattingList,
} from 'components';

const ChattingScreen = () => (
  <SafeAreaView style={styles.container}>
    <Header>
      대화
    </Header>
    <ChattingList
      data={[{
        id: 1,
        partner: {
          displayName: '뮤바보',
          email: '',
          photoURL: 'https://avatars3.githubusercontent.com/u/8934513?s=460&v=4',
        },
        lastMessage: {
          audioUrl: '',
          duration: 29,
          createdAt: '2019-05-14 08:01:00',
        },
        messageCount: 2,
      }, {
        id: 2,
        partner: {
          displayName: '정인중',
          email: '',
          // tslint:disable
          photoURL: 'https://lh3.googleusercontent.com/-RMEOQ83RZvY/WoOiwZ6_NvI/AAAAAAAAAFU/SqSGd61TFbwGX0UJ0J1Q0QVqRJ8G9DPSgCEwYBhgL/w280-h280-p/d8bb8f6a-efa1-4132-a3d7-40a7bfd27ec6',
        },
        lastMessage: {
          audioUrl: '',
          duration: 29,
          createdAt: '2019-05-10 08:01:00',
        },
        messageCount: 8,
      }]}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});

export default ChattingScreen;
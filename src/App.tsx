import React, {useCallback, useEffect} from 'react';
import {StatusBar} from 'react-native';
import AppProvider from './hooks';

import Messaging from '@react-native-firebase/messaging';

import {Button, ButtonText, Container, Text} from './styles/App';

const App: React.FC = () => {
  const handleRequestPermission = useCallback(async () => {
    try {
      const authStatus = await Messaging().requestPermission();

      const enabled =
        Messaging.AuthorizationStatus.AUTHORIZED ||
        Messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Firebase Messaging is Authorized: ', authStatus);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleRequestPermission();

    // eslint-disable-next-line
  }, []);

  return (
    <AppProvider>
      <Container>
        <StatusBar barStyle={'light-content'} backgroundColor="#643bc1" />
        <Text>Notification</Text>
        <Button activeOpacity={0.7}>
          <ButtonText>Receive Notification</ButtonText>
        </Button>
      </Container>
    </AppProvider>
  );
};

export default App;

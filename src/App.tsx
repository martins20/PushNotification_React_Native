import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import AppProvider from './hooks';
import {useFirebaseToken} from './hooks/useFirebaseToken';

import {Button, ButtonText, Container, Text} from './styles/App';

const App: React.FC = () => {
  const {token} = useFirebaseToken();

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <AppProvider>
      <Container>
        <StatusBar barStyle={'light-content'} backgroundColor="#643bc1" />
        <Text>Notification</Text>
        <Button activeOpacity={0.7}>
          <ButtonText>Test</ButtonText>
        </Button>
      </Container>
    </AppProvider>
  );
};

export default App;

import React from 'react';
import FirebaseProvider from './useFirebaseToken';

const AppProvider: React.FC = ({children}) => (
  <FirebaseProvider>{children}</FirebaseProvider>
);

export default AppProvider;

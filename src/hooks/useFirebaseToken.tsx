import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import messaging from '@react-native-firebase/messaging';

interface IFirebaseContextData {
  token: string;
  handleGetDeviceToken(): Promise<void>;
}

const FirebaseContextData = createContext({} as IFirebaseContextData);

const FirebaseProvider: React.FC = ({children}) => {
  const [token, setToken] = useState('');

  const handleStorageTokenIntoDatabase = useCallback((deviceToken: string) => {
    // Storage device token on database

    console.log(deviceToken);
  }, []);

  const handleGetDeviceToken = useCallback(async () => {
    const deviceToken = await messaging().getToken();

    setToken(deviceToken);

    handleStorageTokenIntoDatabase(deviceToken);

    messaging().onTokenRefresh(handleStorageTokenIntoDatabase);
  }, [handleStorageTokenIntoDatabase]);

  useEffect(() => {
    handleGetDeviceToken();

    // eslint-disable-next-line
  }, []);

  return (
    <FirebaseContextData.Provider
      value={{
        token,
        handleGetDeviceToken,
      }}>
      {children}
    </FirebaseContextData.Provider>
  );
};

export const useFirebaseToken = (): IFirebaseContextData => {
  const context = useContext(FirebaseContextData);

  if (!context) {
    throw new Error('Cannot use useFirebaseToken without FirebaseProvider');
  }

  return context;
};

export default FirebaseProvider;

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #643bc1;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  color: #643bc1;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  padding: 10px 20px;
  border-radius: 10px;

  margin-top: 10px;
`;

import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: space-between;
`;

export const ContainerDetails = styled.View`
  align-items: center;
`;

export const ListCryptoText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

export const SubmitButton = styled(RectButton)`
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #ff4500;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

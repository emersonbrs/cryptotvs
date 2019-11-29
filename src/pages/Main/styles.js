import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const CryptoContainer = styled.View`
  flex-direction: column;
  margin: 15px 0 15px 0;
`;

export const CryptoCurrencies = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0 15px 0;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const CryptoDetails = styled.View`
  flex-direction: row;
`;

export const CryptoUSD = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const CryptoText = styled.View`
  margin: 4px 0 0 5px;
`;

export const ListCryptoText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #000;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#778899',
})`
  flex: 1;
  height: 40px;
  background: #ddd;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

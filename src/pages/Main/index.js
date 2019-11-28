import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { coinIcons } from '../../utils/coinIcons';
import normalizeMoney from '../../utils/format';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  AddCryptoButton,
  CryptoContainer,
  CryptoCurrencies,
  CryptoDetails,
  CryptoUSD,
  CryptoText,
} from './styles';

export default class Main extends Component {
  state = {
    newCrypto: '',
    cryptos: '',
  };

  async componentDidMount() {
    const response = await api.get(`btc/metrics`);

    const data = {
      name: response.data.data.name,
      symbol: response.data.data.symbol,
      price: response.data.data.market_data.price_usd,
      percentChangeUSD:
        response.data.data.market_data.percent_change_usd_last_24_hours,
    };
    this.setState({ cryptos: data });
  }

  handleAddCrypto = async () => {};

  render() {
    const { cryptos, newCrypto } = this.state;
    const { price } = cryptos;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add Crypto"
            value={newCrypto}
            onChangeText={text => this.setState({ newCrypto: text })}
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <CryptoContainer>
          <CryptoCurrencies>
            <CryptoDetails>
              <Image
                style={{ width: 60, height: 60 }}
                source={{
                  uri: coinIcons[cryptos.symbol],
                }}
              />
              <CryptoText>
                <Text
                  style={{ fontWeight: 'bold', color: '#000', fontSize: 16 }}
                >
                  {cryptos.name}
                </Text>
                <Text style={{ color: '#778899', fontSize: 16 }}>
                  {cryptos.symbol}
                </Text>
              </CryptoText>
            </CryptoDetails>

            <CryptoUSD>
              <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 14 }}>
                {/* $ {normalizeMoney(price)} */}$ {price}
              </Text>
              <Text style={{ color: '#000', fontSize: 14 }}>
                {cryptos.percentChangeUSD}
              </Text>
            </CryptoUSD>
          </CryptoCurrencies>
        </CryptoContainer>

        <AddCryptoButton onPress={this.handleAddCrypto}>
          <Text style={{ color: '#fff', fontSize: 16 }}>
            Add a Cryptocurrent
          </Text>
        </AddCryptoButton>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'CryptoTracker Pro',
};

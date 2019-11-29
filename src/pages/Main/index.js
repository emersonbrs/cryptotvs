import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { coinIcons } from '../../utils/coinIcons';

import * as CryptoActions from '../../store/modules/crypto/actions';

import {
  Container,
  Form,
  Input,
  ListCryptoText,
  SubmitButton,
  CryptoContainer,
  CryptoCurrencies,
  CryptoDetails,
  CryptoUSD,
  CryptoText,
} from './styles';

class Main extends Component {
  state = {
    newCrypto: '',
  };

  componentDidMount() {
    this.props.loadCryptoRequest();
  }

  goToTree = () => {
    this.props.navigation.navigate('CryptoDescription');
  };

  handleAddNewCrypto = async () => {
    this.props.addCryptoRequest(this.state.newCrypto);
    this.setState({ newCrypto: '' });
  };

  render() {
    const { newCrypto } = this.state;

    const { crypto, removeCrypto } = this.props;

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
          <SubmitButton onPress={this.handleAddNewCrypto}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
        <ListCryptoText>List Of Cryptocurrencies</ListCryptoText>
        <CryptoContainer>
          {crypto.map(crypto => (
            <CryptoCurrencies>
              <CryptoDetails>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={{
                    uri: coinIcons[crypto.data.symbol],
                  }}
                />
                <CryptoText>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 16,
                    }}
                  >
                    {crypto.data.name}
                  </Text>
                  <Text style={{ color: '#778899', fontSize: 16 }}>
                    {crypto.data.symbol}
                  </Text>
                </CryptoText>
              </CryptoDetails>

              <CryptoUSD>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: 14,
                  }}
                >
                  $ {crypto.data.market_data.price_usd.toFixed(2)}
                </Text>
                {Math.sign(
                  crypto.data.market_data.percent_change_usd_last_24_hours
                ) == 1 ? (
                  <Text style={{ color: 'green', fontSize: 12 }}>
                    <Icon name="call-made" size={12} color="green" />
                    {crypto.data.market_data.percent_change_usd_last_24_hours.toFixed(
                      2
                    )}
                    %
                  </Text>
                ) : (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    <Icon name="call-received" size={12} color="red" />
                    {crypto.data.market_data.percent_change_usd_last_24_hours.toFixed(
                      2
                    )}
                    %
                  </Text>
                )}
              </CryptoUSD>
              <SubmitButton onPress={() => removeCrypto(crypto.data.symbol)}>
                <Icon name="add" size={20} color="#fff" />
              </SubmitButton>
            </CryptoCurrencies>
          ))}
          <SubmitButton
            onPress={() => {
              this.goToTree();
            }}
          >
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </CryptoContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CryptoActions, dispatch);

export default connect(
  state => ({
    crypto: state.crypto,
  }),
  mapDispatchToProps
)(Main);

Main.navigationOptions = {
  title: 'CryptoTracker Pro',
};

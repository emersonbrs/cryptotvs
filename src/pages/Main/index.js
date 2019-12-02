import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNToasty } from 'react-native-toasty';
import CryptoList from '../../components/CryptoList';

import * as CryptoActions from '../../store/modules/crypto/actions';

import {
  Container,
  Form,
  Input,
  ListCryptoText,
  ListCryptoView,
  SubmitButton,
} from './styles';

class Main extends Component {
  static navigationOptions = () => {
    return {
      title: 'CryptoTracker Pro',
    };
  };

  state = {
    newCrypto: '',
    cryptosList: [
      'BTC',
      'ETH',
      'XRP',
      'BCH',
      'LTC',
      'DASH',
      'XEM',
      'BCC',
      'XMR',
      'NEO',
    ],
  };

  handleAddNewCrypto = async () => {
    const AlreadyExist = 0;
    this.props.crypto.map(crypto =>
      crypto.data.symbol == this.state.newCrypto.toUpperCase()
        ? (AlreadyExist = 1)
        : false
    );

    this.state.cryptosList.indexOf(this.state.newCrypto.toUpperCase()) > -1 &&
    AlreadyExist == 0
      ? this.props.addCryptoRequest(this.state.newCrypto)
      : RNToasty.Error({ title: 'Invalid Crypto', titleSize: 20 });

    this.setState({ newCrypto: '' });
  };

  render() {
    const { newCrypto } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add New Crypto"
            value={newCrypto}
            onChangeText={text => this.setState({ newCrypto: text })}
          />
          <SubmitButton onPress={this.handleAddNewCrypto}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
        <ListCryptoView>
          <ListCryptoText>List of Cryptocurrencies</ListCryptoText>
        </ListCryptoView>
        <CryptoList />
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

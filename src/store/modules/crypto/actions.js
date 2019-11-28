export function addCryptoRequest(symbol) {
  return { type: '@crypto/ADD_REQUEST', symbol };
}

export function addCryptoSuccess(crypto) {
  return { type: '@crypto/ADD_SUCCESS', crypto };
}

export function removeCrypto(symbol) {
  return { type: '@crypto/REMOVE', symbol };
}

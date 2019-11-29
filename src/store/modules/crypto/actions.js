export function addCryptoRequest(symbol) {
  return { type: '@crypto/ADD_REQUEST', symbol };
}

export function addCryptoSuccess(crypto) {
  return { type: '@crypto/ADD_SUCCESS', crypto };
}

export function loadCryptoRequest() {
  return { type: '@crypto/LOAD_REQUEST' };
}

export function loadCryptoSuccess(crypto) {
  return { type: '@crypto/LOAD_SUCCESS', crypto };
}

export function removeCrypto(symbol) {
  return { type: '@crypto/REMOVE', symbol };
}

/**
 * AES JSON formatter for CryptoJS
 * @link https://github.com/brainfoolong/cryptojs-aes-php
 * @version 2.1.1
 */

var CryptoJSAesJson = {
  /**
   * Encrypt any value
   * @param {*} value
   * @param {string} password
   * @return {string}
   */
  'encrypt': function (value, password) {
    return CryptoJS.AES.encrypt(JSON.stringify(value), password, { format: CryptoJSAesJson }).toString()
  },
  /**
   * Decrypt a previously encrypted value
   * @param {string} jsonStr
   * @param {string} password
   * @return {*}
   */
  'decrypt': function (jsonStr, password) {
    return JSON.parse(CryptoJS.AES.decrypt(jsonStr, password, { format: CryptoJSAesJson }).toString(CryptoJS.enc.Utf8))
  },
  /**
   * Stringify cryptojs data
   * @param {Object} cipherParams
   * @return {string}
   */
  'stringify': function (cipherParams) {
    var j = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
    if (cipherParams.iv) j.iv = cipherParams.iv.toString()
    if (cipherParams.salt) j.s = cipherParams.salt.toString()
    return JSON.stringify(j).replace(/\s/g, '')
  },
  /**
   * Parse cryptojs data
   * @param {string} jsonStr
   * @return {*}
   */
  'parse': function (jsonStr) {
    var j = JSON.parse(jsonStr)
    var cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) })
    if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
    if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
    return cipherParams
  }
}

function prepareAjaxRequest(requestData){
    var encryptedData = "";
    if(typeof requestData ==="object"){
        requestData = JSON.stringify(requestData);
        if(typeof requestData==="string" && requestData!==""){
            var encryptedRequestData = CryptoJSAesJson.encrypt(requestData,REK); 
            if(typeof encryptedRequestData==="string" && encryptedRequestData!==""){
                encryptedData   = {requestData:btoa(encryptedRequestData)};
            }
        }
    }
    return encryptedData;
}

function prepareAJAXDataNew(data) {

    if (data == '') {
        return '';
    }

    // random AES key
    var aesKey = CryptoJS.lib.WordArray.random(16).toString();

    // encrypt payload with AES
    var ctObj = CryptoJS.AES.encrypt(JSON.stringify(data), aesKey);

    // encrypt AES key with RSA
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(REK_PUB);
    var encryptedKey = encrypt.encrypt(aesKey);

    return { "requestData": ctObj.toString(), "rek": encryptedKey };
}

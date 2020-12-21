const axios = require('axios');
const config = require('../config/config.json');

async function getBalance(address) {
  try {
    const response = await axios.get(`${config.dev.base_url + '/address/' + address}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": config.dev.api_key
      } 
    });
    return response;
  } catch (e) {
    console.error(e);
    return e;
  };
};
async function getTransHist(address,index,limit) {
  try {
    const response = await axios.get(`${config.dev.base_url + '/address/' + address + '/basic/transactions?' + 'index=' + index + '&' + 'limit='+ limit}`,{
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": config.dev.api_key
        } 
      });
      for (i = 0; i < response.data.payload.length; i ++) {

        const sent = response.data.payload[i].sent[address];
        if (sent) {
          response.data.payload[i].isSent = true;
          const receivedAddr =  Object.keys(response.data.payload[i].received)
          response.data.payload[i].receivedAddr = receivedAddr[0]
          delete response.data.payload[i].sent;
          delete response.data.payload[i].received;
        } else {  
          response.data.payload[i].isSent = false;
          const receivedAddr =  Object.keys(response.data.payload[i].received)
          response.data.payload[i].receivedAddr = receivedAddr[0];
          delete response.data.payload[i].sent;
          delete response.data.payload[i].received;
        }
      }
      // console.log(JSON.stringify(response.data.payload[0].sent))
      return response;
  } catch (e) {
    console.error(e);
    return e;
  };
};
async function getUxto(address) {
  try {
    const response = await axios.get(`${config.dev.base_url + '/address/' + address + '/unspent-transactions'}`,{
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": config.dev.api_key
      } 
    });
    return response;
  } catch (e) {
    console.error(e);
    return e;
  }
};
async function sendSignedTx(hex) {
  try {
    const payload = {
      hex: hex
    };
    const response = await axios.post(`${config.dev.base_url} + '/txs/send/'`,payload);
    return response;
  } catch (e) {
    console.error(e);
    return e;
  }
}
module.exports = {
  getBalance,
  getTransHist,
  getUxto,
  sendSignedTx
} 
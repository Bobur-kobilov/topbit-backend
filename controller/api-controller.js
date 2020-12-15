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
async function getTransHist(address) {
  try {
    const response = await axios.get(`${config.dev.base_url + '/address/' + address + '/basic/transactions'}`,{
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
}
module.exports = {
  getBalance,
  getTransHist,
  getUxto
} 
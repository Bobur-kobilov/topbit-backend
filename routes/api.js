const express = require ('express');
const axios = require('axios');
const router = express.Router();

var options = {
  "method": "GET",
  "hostname": "api.cryptoapis.io",
  "path": "/v1/bc/btc/mainnet/info",
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "3e15c45f06b3c46fd2bdc83814b908fc63251cf9"
  }
};

router.get('/balance', async function(req,res) {
  try {
    const  response = await axios.get('https://api.cryptoapis.io/v1/bc/btc/testnet/address/2N6HeA8vi3LieVEpqz5ZBdcYzXpzTR55sT4',
    {
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "3e15c45f06b3c46fd2bdc83814b908fc63251cf9"
      } 
    });
    console.log(response.data);
    res.send(response.data);
  } catch (e) {
    console.error(e);
    return e;
  };
});
router.post('/deposit', function(req,res) {
  try {
    res.send('Deposit')
  } catch (e) {
    console.error(e);
    return e;
  }
});
router.get('/transaction', function(req,res) {
  try {
    res.send("Transaction History");
  } catch(e) {
    console.error(e);
    return e;
  }
});
router.post('/generate/address', function(req,res) {
  try {
    const response = await axios.get('https://api.cryptoapis.io/v1/bc/btc/testnet/address/2N6HeA8vi3LieVEpqz5ZBdcYzXpzTR55sT4',
    {
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "3e15c45f06b3c46fd2bdc83814b908fc63251cf9"
      } 
    });
    res.send(response.data);
  } catch (e) {
    console.error(e);
    return e;
  }
})
module.exports = router;

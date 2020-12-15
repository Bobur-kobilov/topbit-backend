const express = require ('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config/config.json');
const apiController = require('../controller/api-controller');

const addr = '2N6HeA8vi3LieVEpqz5ZBdcYzXpzTR55sT4';
router.get('/balance', async function(req,res) {
  try {
    const response = await apiController.getBalance(addr);
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
router.get('/transaction', async function(req,res) {
  try {
    const response = await apiController.getTransHist(addr);
    res.send(response.data);
  } catch(e) {
    console.error(e);
    return e;
  }
});
router.get('/account', async function(req, res) {
  try {
    const balanceData = await apiController.getBalance(addr);
    const transHistData = await apiController.getTransHist(addr);
    const response = {
      balanceData : balanceData.data,
      transHistData : transHistData.data
    }
    res.send(response);
  } catch (e) {
    console.error(e);
    return e;
  };
});
router.get('/uxto', async function(req, res) {
  try {
    const response = await apiController.getUxto(addr);
    res.send(response.data);
  } catch (e) {
    console.error(e);
    return e;
  }
})
module.exports = router;

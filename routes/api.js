const express = require ('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config/config.json');
const apiController = require('../controller/api-controller');

router.get('/balance', async function(req,res) {
  try {
    const address = req.query.address;
    const response = await apiController.getBalance(address);
    res.send(response.data);
  } catch (e) {
    console.error(e);
    return e;
  };
});
router.post('/tx/send', function(req,res) {
  try {
    const address = req.body.hex;
    const hex = '02000000012ef6ff4aaa76aaff4bea235df134923a830a89d2fbdea5fdc330c9a42eb920a8010000006a47304402205c44fb58b3eaa907cccb2cac87749f00cb52f0d050d183ebba80d672413b9a540220749c8b53665db9f36d5e760ad627b0e22072a6cf91a5d77d35ac2b95d4c1ea54012102275753690ab58df3c923001e94d407e30b03e60b1f2461729a1dd4f37ebe2469ffffffff02c8320000000000001976a914481e003d23566c1789dc9362085c3a0876570c7c88ac80380100000000001976a9147b9a627a184897f10d31d73d87c2eea191d8f50188ac00000000';
    const response = apiController.sendSignedTx(hex);
    res.send(response.data);
  } catch (e) {
    console.error(e);
    return e;
  }
});
router.get('/transaction', async function(req,res) {
  try {
    const address = req.query.address;
    const index = req.query.index;
    const limit = req.query.limit;
    const response = await apiController.getTransHist(address,index,limit);
    res.send(response.data);
  } catch(e) {
    console.error(e);
    return e;
  }
});
router.get('/account', async function(req, res) {
  try {
    const address = req.query.address;
    const balanceData = await apiController.getBalance(address);
    const transHistData = await apiController.getTransHist(address);
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
    const address = req.query.address;
    const response = await apiController.getUxto(address);
    res.send(response.data);
  } catch (e) {
    console.error(e);
    return e;
  }
})
module.exports = router;

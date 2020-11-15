const express = require("express");
const router = express.Router();

const md5 = require('md5');
const short = require('short-uuid');

router.get('/credentials', async (req, res, next) => {
    const Hostapd = require('../../configuration/hostapd/hostapd.js');
    const wifi = await Hostapd.loadWiFiSettings();
    const code = md5(short().generate())
    res.render('hub/wifi_creds', {"wifi": {creds: wifi, auth: {code: code, time_until_unusable: 3/*Entries in minutes*/, time_created: Date.now()}}})
})

module.exports.pre_route = "/hub/wifi"
module.exports.router = router;
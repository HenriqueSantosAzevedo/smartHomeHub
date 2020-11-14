const express = require("express");
const router = express.Router();

//Implement libraries to create unique code
//const hash = require('object-hash');
const short = require('short-uuid');

router.get('/credentials', async (req, res, next) => {
    const Hostapd = require('../../configuration/hostapd/hostapd.js');
    const wifi = await Hostapd.loadWiFiSettings();
    const code = short().generate()
    res.render('hub/wifi_creds', {"wifi": {creds: wifi, auth: code}})
})

module.exports.pre_route = "/hub/wifi"
module.exports.router = router;
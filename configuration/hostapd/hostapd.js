const fs = require('fs');
const path = require('path');

let hostapdPath = "/etc/hostapd/hostapd.conf";

module.exports = { loadWiFiSettings: loadWiFiSettings }


async function loadWiFiSettings() {
    if(! fs.existsSync(hostapdPath)) return console.log(`File: ${hostapdPath} couldn't be found!\nMake sure this path is correct.`.red)
    let host_data = new Object;
    fs.readFileSync(hostapdPath, 'utf-8').split('\n').filter(x => x!='').forEach(line => {
        line = line.split('=');
        host_data[line[0]] = line[1]
    })
    return await host_data
}
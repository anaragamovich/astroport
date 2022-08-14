const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/contracts_data', (req, res) => {
    let values = [
        {
            "address": "terra19t8ffmz6q2rdm3rllyksd6sex6n650a4anttzzvz9mf8mqr4nkrq44cyu6",
            "localName": "staking_address",
            "localVersion": "1.0.1",
            "deployedName": "astroport-staking",
            "deployedVersion": "1.0.0"
        },
        {
            "address": "terra19t8ffmz6q2rdm3rllyksd6sex6n650a4anttzzvz9mf8mqr4nkrq44cyu6",
            "localName": "staking_address",
            "localVersion": "1.0.1",
            "deployedName": "astroport-staking",
            "deployedVersion": "1.0.0"
        },
        {
            "address": "terra19t8ffmz6q2rdm3rllyksd6sex6n650a4anttzzvz9mf8mqr4nkrq44cyu6",
            "localName": "staking_address",
            "localVersion": "1.0.1",
            "deployedName": "astroport-staking",
            "deployedVersion": "1.0.0"
        },
        {
            "address": "terra19t8ffmz6q2rdm3rllyksd6sex6n650a4anttzzvz9mf8mqr4nkrq44cyu6",
            "localName": "staking_address",
            "localVersion": "1.0.1",
            "deployedName": "astroport-staking",
            "deployedVersion": "1.0.0"
        },
        {
            "address": "terra19t8ffmz6q2rdm3rllyksd6sex6n650a4anttzzvz9mf8mqr4nkrq44cyu6",
            "localName": "staking_address",
            "localVersion": "1.0.1",
            "deployedName": "astroport-staking",
            "deployedVersion": "1.0.0"
        }
    ];

    return res.send(values);
});

const server = app.listen(15000, function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log('Express app listening at https://%s:%s', host, port)

});
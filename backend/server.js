const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
require('dotenv').config();
const os = require('os');

//process.env.UV_THREADPOOL_SIZE = 1;

app.get('/', async (req, res) => {


    //console.log(`UV_THREADPOOL_SIZE ${process.env.UV_THREADPOOL_SIZE}`);

    const hasPassword = await bcrypt.hash('this is a password', 10);
    res.send(hasPassword);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
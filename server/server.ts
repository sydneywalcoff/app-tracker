const express = require('express');

const app = express();
const db = require('./config/connection');

const PORT: string | number = process.env.PORT || 3001;

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`listening at localhost:${PORT}`);
    })
});
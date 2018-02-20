const express = require('express');
const path = require('path');

const app = express();
const data = require('./income.json');

app.get('/income', function (req, res) {
    res.send(JSON.stringify(data));
});

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require("webpack-dev-middleware");
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');

    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build/index.html'));
    })
}


app.listen(process.env.PORT || 8000, () => console.log('Listening'));
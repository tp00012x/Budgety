const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');

app.get('/data', function (req, res) {
    res.send(data);
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
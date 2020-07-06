/* Packages */
const express = require('express');
const path = require('path');
const chalk = require('chalk');


/* Local files */
const publicPath = path.join(__dirname, '../../public/');
const appRoute = path.join(publicPath, 'index.html');
const wildcardRoute = path.join(publicPath, '404.html');


/* Router config */
const router = new express.Router();


/* Routes */
router.get('/', (req, res) => {
    try {
        return res.sendFile(appRoute);
    
    } catch(e) {
        res.send();
        console.log(
            chalk.red('An error occured on the homepage: '),
            '\n',
            `${e}`
        );
    }
});

router.get('/*', (req, res) => {
    try {
        return res.sendFile(wildcardRoute);

    } catch(e) {
        res.send();
        console.log(
            chalk.red('An error occured on the homepage: '),
            '\n',
            `${e}`
        );
    }
});


module.exports = router;
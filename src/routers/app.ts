import { Request, Response } from 'express';
const express = require('express');
const path = require('path');
const chalk = require('chalk');

import { publicPath } from '../server';
const appRoute = path.join(publicPath, 'index.html');
const wildcardRoute = path.join(publicPath, '404.html');


/* Router config */
const router = new express.Router();


/* Routes */
router.get('/', (req: Request, res: Response) => {
    try {
        return res.sendFile(appRoute);
    
    } catch(e) {
        res.send();
        console.log(
            chalk.red('An error occured: '),
            '\n',
            `${e}`
        );
    }
});

router.get('/*', (req: Request, res: Response) => {
    try {
        return res.sendFile(appRoute);

    } catch(e) {
        res.send();
        console.log(
            chalk.red('An error occured: '),
            '\n',
            `${e}`
        );
    }
});


module.exports = router;
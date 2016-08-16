/**
 * Copyright (C) 2016 antiaris.xyz
 * index.jsx
 *
 * changelog
 * 2016-08-01[20:02:07]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Nav from '../component/nav/nav.jsx';

import nunjucks from 'nunjucks';

nunjucks.configure({autoescape: false});

export default async (ctx, next) => {

    const tpl = await new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/../view/index.html', 'utf-8', (err, content) => {
            err ? reject(err) : resolve(content);
        });
    });

    ctx.addScript('client:src/entry/index.jsx');

    const content = ReactDOMServer.renderToString(<Nav/>);

    ctx.body = nunjucks.renderString(tpl, {
        content,
        systemjs: ctx.getScript('client:src/lib/system.js'),
        style: ctx.comboStyle(),
        script: ctx.comboScript()
    })

    next();
};
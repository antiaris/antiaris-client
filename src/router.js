/**
 * Copyright (C) 2016 yanni4night.com
 * router.js
 *
 * changelog
 * 2016-06-16[00:09:32]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Nav from './component/nav/nav.jsx';

import nunjucks from 'nunjucks';

nunjucks.configure({autoescape: false});

export default (router) => {
    router.get('/', async function (ctx, next) {
        const {add} = ctx;

        const tpl = await new Promise((resolve, reject) => {
            fs.readFile(__dirname + '/view/index.html', 'utf-8', (err, content) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(content);
                }
            });
        });

        const content = ReactDOMServer.renderToString(<Nav add={add}/>);

        ctx.body = nunjucks.renderString(tpl,{
            content,
            css: `<link rel="stylesheet" href="/s?` + ctx.comboCss().join() + `">`,
            script: `<script src="/s?` + ctx.comboScript().join() +`"></script>`
        })

        next();
    });
};

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
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Nav from './component/nav/nav.jsx';

export default function (router) {
    router.get('/', async function (ctx, next) {
        const variable = await Promise.resolve(1);
        ctx.body = ReactDOMServer.renderToString( < Nav text = 'Hello Client' / > );
        next();
    });

};
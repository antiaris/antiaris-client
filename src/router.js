/**
 * Copyright (C) 2016 antiaris.xyz
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
import indexRouter from './router/index.jsx';

export default (router) => {
    router.get('/', indexRouter);
};

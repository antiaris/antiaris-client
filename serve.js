/**
 * Copyright (C) 2016 yanni4night.com
 * serve.js
 *
 * changelog
 * 2016-03-08[15:29:17]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();

router.get('/', koaBody,
    function* (next) {
        this.body = require('fs').readFileSync('./index.html', {
            encoding: 'utf-8'
        });
    }
);

app.use(router.routes());

app.use(require('koa-static')('.', {
    gzip: true
}));

app.listen(3131);
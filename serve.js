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
var serverRouter = require('./output/server/server/');

app.use(koaBody);

router.get('/', function* (next) {
    this.body = serverRouter.index();
});

app.use(router.routes());

app.use(require('koa-static')('.', {
    gzip: true
}));

app.listen(3131);
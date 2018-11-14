#!/usr/bin/node

const express = require('express');

const app = express();

app.use(express.static('.'));// web静态服务的根目录在哪

app.listen(8080);

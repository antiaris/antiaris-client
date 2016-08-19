/**
  * Copyright (C) 2016 antiaris.xyz
  * index.jsx
  *
  * changelog
  * 2016-08-16[11:05:09]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import Nav from '../component/nav/nav.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const data = window.data;

ReactDOM.render(<Nav {...data}/>, document.querySelector('#react-dom'));

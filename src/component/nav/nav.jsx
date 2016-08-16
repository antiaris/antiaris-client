/**
  * Copyright (C) 2016 antiaris.xyz
  * nav.jsx
  *
  * changelog
  * 2016-06-16[00:22:44]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (<nav>{this.props.text || 'Default NAV'}</nav>);
    }
}
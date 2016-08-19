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
    onClickHandler() {
        console.log('on click');
    }
    render() {
        return (<nav ref="nav" onClick={this.onClickHandler}>{this.props.title || 'default nav title'}</nav>);
    }
    componentDidMount() {
        this.refs.nav.style.fontSize = '30px';
    }
}
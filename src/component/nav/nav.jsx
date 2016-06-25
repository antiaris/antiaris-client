/**
  * Copyright (C) 2016 yanni4night.com
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
import Base from '../base/base.jsx';

export default class Nav extends Base {
    constructor(props) {
        super(props, 'nav');
    }
    render() {
        return (<nav>{this.props.text||'Default NAV'}</nav>);
    }
}
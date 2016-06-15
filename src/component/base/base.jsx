/**
  * Copyright (C) 2016 yanni4night.com
  * base.jsx
  *
  * changelog
  * 2016-06-16[00:30:29]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import AntiarisComponent from 'antiaris-component';

export default class Base extends AntiarisComponent {
    constructor(props, displayName) {
        super(props, 'client', displayName);
    }
}


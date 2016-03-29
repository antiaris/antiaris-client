/**
  * Copyright (C) 2016 yanni4night.com
  * index.jsx
  *
  * changelog
  * 2016-03-18[14:02:40]:revised
  *
  * @author yanni4night@gmail.com
  * @version 1.0.0
  * @since 1.0.0
  */
import {Segment} from '../common/segment';
import {React} from '../lib/react';
import {ReactDOMServer} from '../lib/react-dom-server';

export const index = () => ReactDOMServer.renderToString(<Segment/>);
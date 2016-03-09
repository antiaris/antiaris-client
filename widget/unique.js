/**
  * Copyright (C) 2016 tieba.baidu.com
  * unique.js
  *
  * changelog
  * 2016-03-09[16:57:47]:revised
  *
  * @author yinyong02@baidu.com
  * @version 1.0.0
  * @since 1.0.0
  */
function unique(){
    return new Number(Math.random()*1e8|0). toString(16);
}

export {unique};
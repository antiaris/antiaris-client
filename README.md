# antiaris-client

An web framework demo involves `ES2015`/`isomorphic javascript`/`virtual dom`/`modular resource`/`http chunk`.

As you see, there are both sever modules and client modules in this project,meaning that it going to be an isomorphic architecture.

We use ES2015 module syntax to define modules, then convert to [commonjs](http://www.commonjs.org/) syntax which is anonymous for server side(nodejs), to [systemjs](https://github.com/systemjs/systemjs) syntax for client side. Note that we have to fix the module path in systemjs, I created [fix-module-ids](https://github.com/yanni4night/fix-module-ids) for that.

[React](facebook.github.io/react/) is optional, but it enchances the isomorphic.

`modular resource` and `HTTP chunk` are in considering.
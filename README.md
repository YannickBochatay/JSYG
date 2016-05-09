# JSYG
Core of JSYG framework

It's just a pooling of modules :
* [jsyg-wrapper](https://github.com/YannickBochatay/JSYG-wrapper)
* [jsyg-point](https://github.com/YannickBochatay/JSYG.Point)
* [jsyg-vect](https://github.com/YannickBochatay/JSYG.Vect)
* [jsyg-matrix](https://github.com/YannickBochatay/JSYG.Matrix)
* [jsyg-utils](https://github.com/YannickBochatay/JSYG-utils)
* [jsyg-strutils](https://github.com/YannickBochatay/JSYG-strutils)
* [jsyg-events](https://github.com/YannickBochatay/JSYG.Events)
* [jsyg-stdconstruct](https://github.com/YannickBochatay/JSYG.StdConstruct)

It also includes jquery virtual mouse bindings, and [isMobile](https://github.com/kaimallea/isMobile) library.

Each of these modules can be used standalone if you don't need JSYG framework.

### Installation

##### with npm
```shell
npm install jsyg
```

##### with bower
```shell
bower install jsyg
```



### Usage

##### es6 modules (webpack+babel)
```javascript
import JSYG from "jsyg"
JSYG("svg").attr({width:400,height:300}).appendTo("body")
```

##### browserify
```javascript
var JSYG = require("jsyg");
JSYG("svg").attr({width:400,height:300}).appendTo("body")
```

##### without bundler
```html
<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/jsyg/dist/JSYG.js"></script>
<script>
  JSYG("svg").attr({width:400,height:300}).appendTo("body")
</script>
```
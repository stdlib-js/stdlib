<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNativeFunction

> Test if a value is a native function.

<section class="intro">

Native functions execute native code that is typically not written in JavaScript, but a lower-level language like C++. This includes the JavaScript [built-in functions][mdn-builtins], functions implemented using [Node.js C/C++ addons][node-js-add-ons], and code compiled via [WebAssembly][webassembly].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isNativeFunction = require( '@stdlib/assert/is-native-function' );
```

#### isNativeFunction( value )

Tests if a `value` is a native `function`.

```javascript
var bool = isNativeFunction( Date );
// returns true

function beep() {
    console.log( 'beep' );
}

bool = isNativeFunction( beep );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```javascript
var isNativeFunction = require( '@stdlib/assert/is-native-function' );

var bool = isNativeFunction( Math.sqrt );
// returns true

bool = isNativeFunction( Date );
// returns true

bool = isNativeFunction( RegExp );
// returns true

bool = isNativeFunction( function foo() {} );
// returns false

bool = isNativeFunction( 'beep' );
// returns false

bool = isNativeFunction( 5 );
// returns false

bool = isNativeFunction( true );
// returns false

bool = isNativeFunction( null );
// returns false

bool = isNativeFunction( [] );
// returns false

bool = isNativeFunction( {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-builtins]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

[node-js-add-ons]: https://nodejs.org/api/addons.html

[webassembly]: https://webassembly.org/

</section>

<!-- /.links -->

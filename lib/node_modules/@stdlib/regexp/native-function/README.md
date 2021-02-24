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

# Native Function

> [Regular expression][regexp] to match a native function.

<section class="usage">

## Usage

```javascript
var reNativeFunction = require( '@stdlib/regexp/native-function' );
```

#### reNativeFunction()

Returns a [regular expression][regexp] to match a native `function`.

```javascript
var RE_NATIVE_FUNCTION = reNativeFunction();
var bool = RE_NATIVE_FUNCTION.test( Date.toString() );
// returns true
```

#### reNativeFunction.REGEXP

[Regular expression][regexp] to match a native `function`.

```javascript
var bool = reNativeFunction.REGEXP.test( Date.toString() );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var reNativeFunction = require( '@stdlib/regexp/native-function' );

var RE_NATIVE_FUNCTION = reNativeFunction();
function isNativeFunction( fcn ) {
    return RE_NATIVE_FUNCTION.test( fcn.toString() );
}

var bool = isNativeFunction( Math.sqrt );
// returns true

bool = isNativeFunction( String );
// returns true

bool = isNativeFunction( Int8Array );
// returns true

bool = isNativeFunction( Date );
// returns true

bool = isNativeFunction( function noop() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->

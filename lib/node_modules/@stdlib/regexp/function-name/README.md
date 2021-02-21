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

# Function Name

> [Regular expression][regexp] to capture a function name.

<section class="usage">

## Usage

```javascript
var reFunctionName = require( '@stdlib/regexp/function-name' );
```

#### reFunctionName

Returns a [regular expression][regexp] to capture a `function` name.

```javascript
function beep() {
    return 'boop';
}

var RE_FUNCTION_NAME = reFunctionName();
var str = RE_FUNCTION_NAME.exec( beep.toString() )[ 1 ];
// returns 'beep'
```

#### reFunctionName.REGEXP

[Regular expression][regexp] to capture a `function` name.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var str = reFunctionName.REGEXP.exec( Math.sqrt.toString() )[ 1 ];
// returns 'sqrt'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable func-names, no-restricted-syntax, no-empty-function, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var reFunctionName = require( '@stdlib/regexp/function-name' );
var RE_FUNCTION_NAME = reFunctionName();

function fname( fcn ) {
    return RE_FUNCTION_NAME.exec( fcn.toString() )[ 1 ];
}

var f = fname( Math.sqrt );
// returns 'sqrt'

f = fname( Int8Array );
// returns 'Int8Array'

f = fname( Object.prototype.toString );
// returns 'toString'

f = fname( function () {} );
// returns ''
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->

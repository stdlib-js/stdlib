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

> Determine a function's name.

<section class="usage">

## Usage

```javascript
var functionName = require( '@stdlib/utils/function-name' );
```

#### functionName( fcn )

Returns the name of a `function`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var v = functionName( Math.sqrt );
// returns 'sqrt'
```

If provided an **anonymous** `function`, the function returns an empty `string` or the string `"anonymous"`.

<!-- eslint-disable no-empty-function, func-names, no-restricted-syntax -->

```javascript
var v = functionName( function () {} );
// returns '' || 'anonymous'
```

If provided a value which is not a `function`, the function **throws** a `TypeError`.

```javascript
try {
    functionName( 'beep' );
    // throws error...
} catch ( err ) {
    console.error( err );
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For more information regarding the naming of anonymous functions, see

    -   [Function Names in ES6][2ality-function-names]
    -   Webkit bug [7726][webkit-bug-7726]
    -   [MDN][mdn-function-name]

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax, func-names, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Buffer = require( '@stdlib/buffer/ctor' );
var Number = require( '@stdlib/number/ctor' );
var functionName = require( '@stdlib/utils/function-name' );

var v = functionName( Math.sqrt );
// returns 'sqrt'

v = functionName( Float64Array );
// returns 'Float64Array'

v = functionName( Buffer );
// returns 'Buffer'

v = functionName( Date );
// returns 'Date'

v = functionName( String );
// returns 'String'

v = functionName( Boolean );
// returns 'Boolean'

v = functionName( Function );
// returns 'Function'

v = functionName( Number );
// returns 'Number'

v = functionName( function foo() {} );
// returns 'foo'

v = functionName( function () {} );
// returns '' || 'anonymous'
```

</section>

<!-- /.examples -->

<section class="links">

[2ality-function-names]: http://www.2ality.com/2015/09/function-names-es6.html

[webkit-bug-7726]: https://bugs.webkit.org/show_bug.cgi?id=7726

[mdn-function-name]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

</section>

<!-- /.links -->

<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Unary

> Multiple dispatch for unary mathematical functions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dispatch = require( '@stdlib/math/tools/unary' );
```

#### dispatch( table )

Returns a function which dispatches to specified functions based on input argument types.

<!-- eslint-disable array-element-newline -->

```javascript
var nabs = require( '@stdlib/math/base/special/abs' );
var dabs = require( '@stdlib/math/strided/special/dabs' );
var sabs = require( '@stdlib/math/strided/special/sabs' );
var gabs = require( '@stdlib/math/strided/special/abs' );

var table = {
    'scalar': [
        'number', nabs
    ],
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ],
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

var abs = dispatch( table );
```

The function accepts the following arguments:

-   **table**: resolution table object which maps input argument types to corresponding implementations.

A `table` resolution object may contain one or more of the following fields:

-   **scalar**: strided look-up table for scalar arguments. Implementation functions must accept a single input argument: a scalar value. Supported data types: `'number'` and `'complex'`.

-   **array**: strided look-up table for array-like object arguments. Implementation functions must follow strided array interface argument conventions:

    ```text
    fcn( N, x, strideX, y, strideY )
    ```

    where

    -   **N**: number of indexed elements.
    -   **x**: input strided array.
    -   **strideX**: index increment for `x`.
    -   **y**: destination strided array.
    -   **strideY**: index increment for `y`.

    Supported array data types consist of all supported [ndarray][@stdlib/ndarray/dtypes] data types.

-   **ndarray**: strided look-up table for [`ndarray`][@stdlib/ndarray/ctor] arguments. Implementation functions must follow strided array ndarray interface argument conventions:

    ```text
    fcn( N, x, strideX, offsetX, y, strideY, offsetY )
    ```

    where

    -   **N**: number of indexed elements.
    -   **x**: input strided array (i.e., underlying input [`ndarray`][@stdlib/ndarray/ctor] buffer).
    -   **strideX**: index increment for `x`.
    -   **offsetX**: starting index for `x`.
    -   **y**: destination strided array (i.e., underlying output [`ndarray`][@stdlib/ndarray/ctor] buffer).
    -   **strideY**: index increment for `y`.
    -   **offsetY**: starting index for `y`.

    Supported data types consist of all supported [ndarray][@stdlib/ndarray/dtypes] data types.

Each strided look-up table should be comprised as follows:

```text
[ <dtype>, <fcn>, <dtype>, <fcn>, ... ]
```

If an argument's data type is **not** found in the argument's corresponding look-up table and if a `'generic'` data type is present in that same table, the returned dispatch function will resolve the "generic" implementation. In other words, an implementation associated with a `'generic'` data type will be treated as the default implementation.

If unable to resolve an implementation for a provided argument data type, the returned function throws an error.

* * *

#### dispatcher( x )

Dispatches to an underlying implementation based the data type of `x`.

<!-- eslint-disable array-element-newline -->

```javascript
var nabs = require( '@stdlib/math/base/special/abs' );
var dabs = require( '@stdlib/math/strided/special/dabs' );
var sabs = require( '@stdlib/math/strided/special/sabs' );
var gabs = require( '@stdlib/math/strided/special/abs' );

var table = {
    'scalar': [
        'number', nabs
    ],
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ],
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

var abs = dispatch( table );

var y = abs( -1.0 );
// returns 1.0
```

The returned dispatch function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor], array-like object, or number. If provided an [`ndarray`][@stdlib/ndarray/ctor] or array-like object, the function performs element-wise computation.

If provided an [`ndarray`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having the same shape and data type as `x`.

<!-- eslint-disable array-element-newline -->

```javascript
var dabs = require( '@stdlib/math/strided/special/dabs' );
var sabs = require( '@stdlib/math/strided/special/sabs' );
var gabs = require( '@stdlib/math/strided/special/abs' );
var array = require( '@stdlib/ndarray/array' );

var table = {
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

var abs = dispatch( table );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ); // 2x2
var y = abs( x );
// returns <ndarray>

var v = y.get( 0, 1 );
// returns 2.0
```

If provided an array-like object, the function returns an array-like object having the same length and data type as `x`.

<!-- eslint-disable array-element-newline -->

```javascript
var dabs = require( '@stdlib/math/strided/special/dabs' );
var sabs = require( '@stdlib/math/strided/special/sabs' );
var gabs = require( '@stdlib/math/strided/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );

var table = {
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ]
};

var abs = dispatch( table );

var x = new Float64Array( [ -1.0, -2.0 ] );
var y = abs( x );
// returns <Float64Array>[ 1.0, 2.0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var nabs = require( '@stdlib/math/base/special/abs' );
var dabs = require( '@stdlib/math/strided/special/dabs' );
var sabs = require( '@stdlib/math/strided/special/sabs' );
var gabs = require( '@stdlib/math/strided/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var array = require( '@stdlib/ndarray/array' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var dispatch = require( '@stdlib/math/tools/unary' );

var table;
var sub;
var abs;
var sh;
var x;
var y;
var i;

// Define a table for resolving unary functions based on argument data types:
table = {
    'scalar': [
        'number', nabs
    ],
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ],
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

// Create a function which dispatches based on argument data types:
abs = dispatch( table );

// Provide a number...
y = abs( -1.0 );
console.log( 'x = %d => abs(x) = %d', -1.0, y );

// Provide an array-like object...
x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
y = abs( x );
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x_%d = %d => abs(x_%d) = %d', i, x[ i ], i, y[ i ] );
}

// Provide an ndarray...
x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
sh = x.shape;

y = abs( x );
for ( i = 0; i < x.length; i++ ) {
    sub = ind2sub( sh, i );
    console.log( 'x_%d%d = %d => abs(x_%d%d) = %d', sub[ 0 ], sub[ 1 ], x.iget( i ), sub[ 0 ], sub[ 1 ], y.iget( i ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->

<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# minBy

> Compute the minimum value of a one-dimensional ndarray via a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var minBy = require( '@stdlib/stats/base/ndarray/min-by' );
```

#### minBy( arrays, clbk\[, thisArg ] )

Computes the minimum value of a one-dimensional ndarray via a callback function.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

function clbk( value ) {
    return value * 2.0;
}

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = minBy( [ x ], clbk );
// returns 2.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.
-   **clbk**: callback function.
-   **thisArg**: callback execution context (_optional_).

The invoked callback is provided three arguments:

-   **value**: current array element.
-   **idx**: current array element index.
-   **array**: input ndarray.

To set the callback execution context, provide a `thisArg`.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

function clbk( value ) {
    this.count += 1;
    return value * 2.0;
}

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
var ctx = {
    'count': 0
};

var v = minBy( [ x ], clbk, ctx );
// returns 2.0

var count = ctx.count;
// returns 4
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var minBy = require( '@stdlib/stats/base/ndarray/min-by' );

function clbk( value ) {
    return value * 2.0;
}

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = minBy( [ x ], clbk );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

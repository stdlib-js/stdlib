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

# nanminBy

> Compute the minimum value of a one-dimensional ndarray via a callback function, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nanminBy = require( '@stdlib/stats/base/ndarray/nanmin-by' );
```

#### nanminBy( arrays, clbk\[, thisArg ] )

Computes the minimum value of a one-dimensional ndarray via a callback function, ignoring `NaN` values.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

function clbk( value ) {
    return value * 2.0;
}

var xbuf = [ 1.0, -2.0, NaN, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = nanminBy( [ x ], clbk );
// returns -4.0
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

var xbuf = [ 1.0, -2.0, NaN, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
var ctx = {
    'count': 0
};

var v = nanminBy( [ x ], clbk, ctx );
// returns -4.0

var count = ctx.count;
// returns 4
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function returns `NaN`, the value is ignored.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array/filled-by' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var uniform = require( '@stdlib/random/base/uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var nanminBy = require( '@stdlib/stats/base/ndarray/nanmin-by' );

function rand() {
    if ( bernoulli( 0.2 ) > 0 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

function clbk( value ) {
    return value * 2.0;
}

var xbuf = filledarrayBy( 10, 'generic', rand );
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = nanminBy( [ x ], clbk );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

</section>

<!-- /.links -->

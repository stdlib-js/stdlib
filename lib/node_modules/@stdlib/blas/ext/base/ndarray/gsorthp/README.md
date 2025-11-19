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

# gsorthp

> Sort a one-dimensional ndarray using heapsort.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gsorthp = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
```

#### gsorthp( arrays )

Sorts a one-dimensional ndarray using heapsort.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, -2.0, 3.0, -4.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

var out = gsorthp( [ x, order ] );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray and a zero-dimensional ndarray specifying the sort order.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is sorted **in-place** (i.e., the input ndarray is **mutated**).
-   When the sort order is less than zero, the input ndarray is sorted in **decreasing** order. When the sort order is greater than zero, the input ndarray is sorted in **increasing** order. When the sort order is equal to zero, the input ndarray is left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var gsorthp = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});
console.log( 'Order:', ndarraylike2scalar( order ) );

gsorthp( [ x, order ] );
console.log( ndarray2array( x ) );
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

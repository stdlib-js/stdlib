<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# dsort

> Sort a double-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dsort = require( '@stdlib/blas/ext/base/ndarray/dsort' );
```

#### dsort( arrays )

Sorts a double-precision floating-point ndarray.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

var out = dsort( [ x, order ] );
// returns <ndarray>[ -4.0, -2.0, 1.0, 3.0 ]

var bool = ( out === x );
// returns true
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
var uniform = require( '@stdlib/random/uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dsort = require( '@stdlib/blas/ext/base/ndarray/dsort' );

var x = uniform( [ 10 ], -100, 100 );
console.log( ndarray2array( x ) );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

dsort( [ x, order ] );
console.log( ndarray2array( x ) );

order = scalar2ndarray( -1.0, {
    'dtype': 'generic'
});

dsort( [ x, order ] );
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

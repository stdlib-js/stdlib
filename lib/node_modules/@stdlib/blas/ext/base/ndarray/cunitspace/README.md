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

# cunitspace

> Fill a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cunitspace = require( '@stdlib/blas/ext/base/ndarray/cunitspace' );
```

#### cunitspace( arrays )

Fills a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.

<!-- eslint-disable max-len -->

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var start = scalar2ndarray( new Complex64( 3.0, 0.0 ), {
    'dtype': 'complex64'
});

var out = cunitspace( [ x, start ] );
// returns <ndarray>[ <Complex64>[ 3.0, 0.0 ], <Complex64>[ 4.0, 0.0 ], <Complex64>[ 5.0, 0.0 ], <Complex64>[ 6.0, 0.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing a starting value.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is modified **in-place** (i.e., the input ndarray is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cunitspace = require( '@stdlib/blas/ext/base/ndarray/cunitspace' );

var x = new Complex64Vector( 10 );
console.log( ndarray2array( x ) );

var start = scalar2ndarray( new Complex64( 3.0, 0.0 ), {
    'dtype': 'complex64'
});

cunitspace( [ x, start ] );
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

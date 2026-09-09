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

# dunitspace

> Fill a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dunitspace = require( '@stdlib/blas/ext/base/ndarray/dunitspace' );
```

#### dunitspace( arrays )

Fills a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
// returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]

var start = scalar2ndarray( 3.0, {
    'dtype': 'float64'
});

var out = dunitspace( [ x, start ] );
// returns <ndarray>[ 3.0, 4.0, 5.0, 6.0 ]
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
var zeros = require( '@stdlib/ndarray/zeros' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dunitspace = require( '@stdlib/blas/ext/base/ndarray/dunitspace' );

var opts = {
    'dtype': 'float64'
};

var x = zeros( [ 10 ], opts );
console.log( ndarray2array( x ) );

var start = scalar2ndarray( 3.0, opts );

dunitspace( [ x, start ] );
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

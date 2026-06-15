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

# gcusumors

> Compute the cumulative sum of a one-dimensional ndarray using ordinary recursive summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gcusumors = require( '@stdlib/blas/ext/base/ndarray/gcusumors' );
```

#### gcusumors( arrays )

Computes the cumulative sum of a one-dimensional ndarray using ordinary recursive summation.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = vector( [ 1.0, 3.0, 4.0, 2.0 ], 'generic' );
var y = vector( [ 0.0, 0.0, 0.0, 0.0 ], 'generic' );

var initial = scalar2ndarray( 0.0, {
    'dtype': 'generic'
});

var z = gcusumors( [ x, y, initial ] );
// returns <ndarray>[ 1.0, 4.0, 8.0, 10.0 ]

var bool = ( z === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray containing the initial sum.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional input ndarray, the function returns the output ndarray unchanged.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation is acceptable; in all other cases, exercise due caution.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gcusumors = require( '@stdlib/blas/ext/base/ndarray/gcusumors' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -50, 50, opts );
console.log( ndarray2array( x ) );

var y = zerosLike( x );
console.log( ndarray2array( y ) );

var initial = scalar2ndarray( 100.0, opts );

var v = gcusumors( [ x, y, initial ] );
console.log( ndarray2array( v ) );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

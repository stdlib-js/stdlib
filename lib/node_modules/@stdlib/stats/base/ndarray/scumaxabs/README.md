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

# scumaxabs

> Compute the cumulative maximum absolute value of a one-dimensional single-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scumaxabs = require( '@stdlib/stats/base/ndarray/scumaxabs' );
```

#### scumaxabs( arrays )

Computes the cumulative maximum absolute value of a one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );

var x = new Float32Vector( [ 1.0, 3.0, 4.0, 2.0 ] );
var y = new Float32Vector( [ 0.0, 0.0, 0.0, 0.0 ] );

var v = scumaxabs( [ x, y ] );
// returns <ndarray>[ 1.0, 3.0, 4.0, 4.0 ]

var bool = ( v === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional input ndarray, the function returns the output ndarray unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scumaxabs = require( '@stdlib/stats/base/ndarray/scumaxabs' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], -50, 50, opts );
console.log( ndarray2array( x ) );

var y = zerosLike( x );
console.log( ndarray2array( y ) );

var v = scumaxabs( [ x, y ] );
console.log( ndarray2array( v ) );
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

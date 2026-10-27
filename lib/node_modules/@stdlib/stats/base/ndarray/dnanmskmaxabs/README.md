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

# dnanmskmaxabs

> Compute the maximum absolute value of a double-precision floating-point ndarray according to a mask, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnanmskmaxabs = require( '@stdlib/stats/base/ndarray/dnanmskmaxabs' );
```

#### dnanmskmaxabs( arrays )

Computes the maximum absolute value of a double-precision floating-point ndarray according to a mask, ignoring `NaN` values.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var Uint8Vector = require( '@stdlib/ndarray/vector/uint8' );

var x = new Float64Vector( [ 1.0, -2.0, NaN, 2.0 ] );
var mask = new Uint8Vector( [ 0, 0, 0, 0 ] );

var v = dnanmskmaxabs( [ x, mask ] );
// returns 2.0
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional mask ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a mask array element is `0`, the corresponding element in the input ndarray is considered valid and **included** in computation. If a mask array element is `1`, the corresponding element in the input ndarray is considered invalid/missing and **excluded** from computation.
-   If provided an empty ndarray or a mask with all elements set to `1`, the function returns `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var fillBy = require( '@stdlib/ndarray/fill-by' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dnanmskmaxabs = require( '@stdlib/stats/base/ndarray/dnanmskmaxabs' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

function mrand() {
    return bernoulli( 0.2 );
}

var opts = {
    'dtype': 'float64'
};
var mopts = {
    'dtype': 'uint8'
};
var x = fillBy( zeros( [ 10 ], opts ), rand );
console.log( ndarray2array( x ) );

var mask = fillBy( zeros( [ 10 ], mopts ), mrand );
console.log( ndarray2array( mask ) );

var v = dnanmskmaxabs( [ x, mask ] );
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

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

# dcusome

> Cumulatively test whether at least `k` elements in a one-dimensional double-precision floating-point ndarray are truthy.

<section class="usage">

## Usage

```javascript
var dcusome = require( '@stdlib/blas/ext/base/ndarray/dcusome' );
```

#### dcusome( arrays )

Cumulatively tests whether at least `k` elements in a one-dimensional double-precision floating-point ndarray are truthy.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
var out = new BooleanVector( 5 );

var k = scalar2ndarray( 2, {
    'dtype': 'generic'
});

var z = dcusome( [ x, out, k ] );
// returns <ndarray>[ false, false, false, true, true ]

var bool = ( z === out );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray specifying the minimum number of truthy elements.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional input ndarray, the function returns the output ndarray unchanged.
-   The function explicitly treats `NaN` values as falsy.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var numel = require( '@stdlib/ndarray/numel' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dcusome = require( '@stdlib/blas/ext/base/ndarray/dcusome' );

var x = discreteUniform( [ 10 ], 0, 1, {
    'dtype': 'float64'
});
console.log( ndarray2array( x ) );

var out = new BooleanVector( numel( x ) );
console.log( ndarray2array( out ) );

var k = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var z = dcusome( [ x, out, k ] );
console.log( ndarray2array( z ) );
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

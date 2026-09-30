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

# scunone

> Cumulatively test whether every element in a one-dimensional single-precision floating-point ndarray is falsy.

<section class="usage">

## Usage

```javascript
var scunone = require( '@stdlib/blas/ext/base/ndarray/scunone' );
```

#### scunone( arrays )

Cumulatively tests whether every element in a one-dimensional single-precision floating-point ndarray is falsy.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );

var x = new Float32Vector( [ 0.0, 0.0, 1.0, 1.0 ] );
var out = new BooleanVector( 4 );

var z = scunone( [ x, out ] );
// returns <ndarray>[ true, true, false, false ]

var bool = ( z === out );
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
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var numel = require( '@stdlib/ndarray/numel' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scunone = require( '@stdlib/blas/ext/base/ndarray/scunone' );

var x = discreteUniform( [ 10 ], 0, 1, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

var out = new BooleanVector( numel( x ) );
console.log( ndarray2array( out ) );

var z = scunone( [ x, out ] );
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

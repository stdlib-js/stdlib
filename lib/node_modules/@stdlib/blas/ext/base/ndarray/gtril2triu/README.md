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

# gtril2triu

> Reflect the lower triangular part of a matrix `A` into the upper triangular part of another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gtril2triu = require( '@stdlib/blas/ext/base/ndarray/gtril2triu' );
```

#### gtril2triu( arrays )

Reflects the lower triangular part of a matrix `A` into the upper triangular part of another matrix `B`.

```javascript
var matrix = require( '@stdlib/ndarray/matrix/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var A = matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], 'generic' );
var B = matrix( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ], 'generic' );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = gtril2triu( [ A, B, k ] );
// returns <ndarray>[ [ 1.0, 3.0 ], [ 0.0, 4.0 ] ]

var bool = ( out === B );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a two-dimensional output ndarray corresponding to `B`.
    -   a zero-dimensional ndarray specifying the diagonal above which to ignore. A value equal to zero refers to the main diagonal, greater than zero refers to a diagonal above the main diagonal, and less than zero refers to a diagonal below the main diagonal.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the reflected region are left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gtril2triu = require( '@stdlib/blas/ext/base/ndarray/gtril2triu' );

var shape = [ 5, 8 ];

var A = discreteUniform( shape, -10, 10, {
    'dtype': 'generic'
});
console.log( ndarray2array( A ) );

var shapeB = [ shape[ 1 ], shape[ 0 ] ];
var B = discreteUniform( shapeB, -10, 10, {
    'dtype': 'generic'
});
console.log( ndarray2array( B ) );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = gtril2triu( [ A, B, k ] );
console.log( ndarray2array( out ) );
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

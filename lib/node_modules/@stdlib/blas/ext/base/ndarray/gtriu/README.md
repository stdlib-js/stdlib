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

# gtriu

> Copy the upper triangular part of a matrix `A` to another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gtriu = require( '@stdlib/blas/ext/base/ndarray/gtriu' );
```

#### gtriu( arrays )

Copies the upper triangular part of a matrix `A` to another matrix `B`.

```javascript
var matrix = require( '@stdlib/ndarray/matrix/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var A = matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], 'generic' );
var B = matrix( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ], 'generic' );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = gtriu( [ A, B, k ] );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 0.0, 4.0 ] ]

var bool = ( out === B );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a two-dimensional output ndarray corresponding to `B`.
    -   a zero-dimensional ndarray specifying the diagonal below which to ignore. A value equal to zero refers to the main diagonal, greater than zero refers to a diagonal above the main diagonal, and less than zero refers to a diagonal below the main diagonal.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the copied region are left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gtriu = require( '@stdlib/blas/ext/base/ndarray/gtriu' );

var opts = {
    'dtype': 'generic'
};

var A = discreteUniform( [ 5, 5 ], -50, 50, opts );
console.log( ndarray2array( A ) );

var B = discreteUniform( [ 5, 5 ], -50, 50, opts );
console.log( ndarray2array( B ) );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = gtriu( [ A, B, k ] );
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

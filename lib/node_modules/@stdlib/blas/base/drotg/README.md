<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# drotg

> Construct a Givens plane rotation.

<section class="usage">

## Usage

```javascript
var drotg = require( '@stdlib/blas/base/drotg' );
```

#### drotg( a, b )

Constructs a Givens plane rotation provided two double-precision floating-point values `a` and `b`.

```javascript
var out = drotg( 0.0, 2.0 );
// returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
```

The function has the following parameters:

-   **a**: rotational elimination parameter.
-   **b**: rotational elimination parameter.

#### drotg.assign( a, b, out, stride, offset )

Constructs a Givens plane rotation provided two double-precision floating-point values `a` and `b` and assigns results to an output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 4 );

var y = drotg.assign( 0.0, 2.0, out, 1, 0 );
// returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `drotg()` corresponds to the [BLAS][blas] level 1 function [`drotg`][blas-drotg].

</section>

<!-- /.notes -->

<section class="examples">

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var drotg = require( '@stdlib/blas/base/drotg' );

var out;
var i;

for ( i = 0; i < 100; i++ ) {
    out = drotg( discreteUniform( -5, 5 ), discreteUniform( -5, 5 ) );
    console.log( out );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[blas-drotg]: https://www.netlib.org/lapack/explore-html/d7/dc5/group__rotg_gaafa91c51f75df6c3f2182032a221c2db.html#gaafa91c51f75df6c3f2182032a221c2db

</section>

<!-- /.links -->

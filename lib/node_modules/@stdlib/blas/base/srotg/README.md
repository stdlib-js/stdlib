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

# srotg

> Construct a Givens plane rotation.

<section class="usage">

## Usage

```javascript
var srotg = require( '@stdlib/blas/base/srotg' );
```

#### srotg( a, b )

Constructs a Givens plane rotation provided two single-precision floating-point values `a` and `b`.

```javascript
var out = srotg( 0.0, 2.0 );
// returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
```

The function has the following parameters:

-   **a**: rotational elimination parameter.
-   **b**: rotational elimination parameter.

#### srotg.assign( a, b, out, stride, offset )

Constructs a Givens plane rotation provided two single-precision floating-point values `a` and `b` and assigns results to an output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 4 );

var y = srotg.assign( 0.0, 2.0, out, 1, 0 );
// returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `srotg()` corresponds to the [BLAS][blas] level 1 function [`srotg`][srotg].

</section>

<!-- /.notes -->

<section class="examples">

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var srotg = require( '@stdlib/blas/base/srotg' );

var out;
var i;
for ( i = 0; i < 100; i++ ) {
    out = srotg( discreteUniform( -5, 5 ), discreteUniform( -5, 5 ) );
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

[srotg]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

</section>

<!-- /.links -->

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

# gsumkbn

> Compute the sum of all elements in a one-dimensional ndarray using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gsumkbn = require( '@stdlib/blas/ext/base/ndarray/gsumkbn' );
```

#### gsumkbn( arrays )

Computes the sum of all elements in a one-dimensional ndarray using an improved Kahan–Babuška algorithm.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = gsumkbn( [ x ] );
// returns 10.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty real-valued one-dimensional ndarray, the function returns `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gsumkbn = require( '@stdlib/blas/ext/base/ndarray/gsumkbn' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = gsumkbn( [ x ] );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

</section>

<!-- /.links -->

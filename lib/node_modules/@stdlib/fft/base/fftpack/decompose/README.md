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

# decompose

> Factorize a sequence length into a product of integers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var decompose = require( '@stdlib/fft/base/fftpack/decompose' );
```

#### decompose( N, M, initial, si, oi, out, so, oo )

Factorizes a sequence length into a product of integers.

```javascript
var initial = [ 3, 4, 2, 5 ]; // as found in FFTPACK
var N = 630;
var factors = [ 0, 0, 0, 0, 0, 0, 0 ];

var numFactors = decompose( N, 4, initial, 1, 0, factors, 1, 0 );
// returns 5

console.log( factors );
// => [ 630, 5, 2, 3, 3, 5, 7 ]
```

The function accepts the following arguments:

-   **N**: length of the sequence.
-   **M**: number of trial divisors.
-   **initial**: array of initial trial divisors.
-   **si**: stride length for `initial`.
-   **oi**: starting index for `initial`.
-   **out**: output array for storing factorization results.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

The function returns the number of factors into which `N` was decomposed.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Factorization results are stored in the output array as follows:

    ```text
    [ sequence_length | number_of_factors | integer_factors | unused_storage ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var decompose = require( '@stdlib/fft/base/fftpack/decompose' );

var initial = [ 3, 4, 2, 5 ]; // as found in FFTPACK
var factors = [ 0, 0, 0, 0 ];

var nf = decompose( 12, 4, initial, 1, 0, factors, 1, 0 );

console.log( 'Sequence length: %d', 12 );
console.log( 'Number of factors: %d', nf );

console.log( 'Factors:' );
var j;
for ( j = 0; j < nf; j++ ) {
    console.log( '  %d', factors[ j+2 ] );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

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

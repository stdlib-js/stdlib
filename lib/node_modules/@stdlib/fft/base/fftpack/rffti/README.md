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

# rffti

> Initialize a workspace array for performing a real-valued Fourier transform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var rffti = require( '@stdlib/fft/base/fftpack/rffti' );
```

#### rffti( N, workspace, strideW, offsetW )

Initializes a workspace array for performing a real-valued Fourier transform.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var N = 8;
var workspace = new Float64Array( ( 2*N ) + 34 );

var out = rffti( N, workspace, 1, 0 );
// returns <Float64Array>

var bool = ( out === workspace );
// returns true

var twiddleFactors = workspace.slice( N, 2*N );
// returns <Float64Array>[ 0, ~0.707, ~0.707, 0, 0, 0, 0, 0 ]

var factors = workspace.slice( 2*N, ( 2*N ) + 4 );
// returns <Float64Array>[ 8, 2, 2, 4 ]
```

The function accepts the following arguments:

-   **N**: length of the sequence to transform.
-   **workspace**: workspace array.
-   **strideW**: stride length for `workspace`.
-   **offsetW**: starting index for `workspace`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The workspace array is divided into three sections:

    ```text
              size = N                 N            2+ceil(log2(N)/2)
                   ↓                   ↓                  ↓
        | scratch / workspace | twiddle factors | radix factor table |
                   ↑                   ↑                  ↑
    i = 0         ...         N       ...       2N       ...
    ```

    -   **scratch/workspace**: used as a scratch space when performing transforms. This section is not updated during initialization.
    -   **twiddle factors**: a table of reusable complex-exponential constants stored as cosine/sine pairs.
    -   **radix factor table**: a table containing the sequence length `N`, the number of factors into which `N` was decomposed, and the individual integer radix factors.

-   In general, a workspace array should have `2N + 34` indexed elements (as `log2(N)/2 ≤ 32` for all `2^64`). During initialization, only the sections for storing twiddle factors and the factorization of `N` are updated.

-   The radix factor table is comprised as follows:

    ```text
    | sequence_length | number_of_factors | integer_factors |
    ```

-   If `N` equals `1`, the function returns early without modifying the workspace, as a single data point is its own Fourier transform.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var zeroTo = require( '@stdlib/array/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var rffti = require( '@stdlib/fft/base/fftpack/rffti' );

var N = 8;
var workspace = new Float64Array( ( 2*N ) + 34 );

rffti( N, workspace, 1, 0 );
console.log( 'Sequence length: %d', N );

console.log( 'Twiddle factors:' );
var idx = zeroTo( N, 'generic' );
logEach( '  workspace[ %d ] = %d', idx, workspace.slice( N, 2*N ) );

console.log( 'Factorization:' );
var nf = workspace[ (2*N)+1 ];

console.log( '  number of factors: %d', nf );
idx = zeroTo( nf, 'generic' );
logEach( '  factor[ %d ]: %d', idx, workspace.slice( (2*N)+2, (2*N)+2+nf ) );
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

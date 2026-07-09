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

# cosqi

> Initialize a workspace array for performing a quarter-wave cosine transform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var cosqi = require( '@stdlib/fft/base/fftpack/cosqi' );
```

#### cosqi( N, workspace, strideW, offsetW )

Initializes a workspace array for performing a quarter-wave cosine transform.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var N = 8;
var workspace = new Float64Array( ( 3*N ) + 34 );

var out = cosqi( N, workspace, 1, 0 );
// returns <Float64Array>

var bool = ( out === workspace );
// returns true

var cosineTable = workspace.slice( 0, N );
// returns <Float64Array>[ ~0.98, ~0.92, ~0.83, ~0.7, ~0.56, ~0.38, ~0.2, ~0.0 ]

var twiddleFactors = workspace.slice( 2*N, 3*N );
// returns <Float64Array>[ 0, ~0.707, ~0.707, 0, 0, 0, 0, 0 ]

var factors = workspace.slice( 3*N, ( 3*N ) + 4 );
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

-   The workspace array is divided into four sections:

    ```text
            size = N              N                   N          2+ceil(log2(N)/2)
                ↓                 ↓                   ↓                  ↓
        | cosine table | scratch / workspace | twiddle factors | radix factor table |
                ↑                 ↑                   ↑                  ↑
    i = 0      ...     N         ...        2N       ...      3N        ...
    ```

    -   **cosine table**: a table of precomputed cosine coefficients used by quarter-wave cosine transforms.
    -   **scratch/workspace**: used as a scratch space when performing transforms. This section is not updated during initialization.
    -   **twiddle factors**: a table of reusable complex-exponential constants stored as cosine/sine pairs.
    -   **radix factor table**: a table containing the sequence length `N`, the number of factors into which `N` was decomposed, and the individual integer radix factors.

-   In general, a workspace array should have `3N + 34` indexed elements (as `log2(N)/2 ≤ 32` for all `2^64`). During initialization, only the sections for storing the cosine coefficients, twiddle factors, and the factorization of `N` are updated.

-   The radix factor table is comprised as follows:

    ```text
    | sequence_length | number_of_factors | integer_factors |
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var zeroTo = require( '@stdlib/array/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var cosqi = require( '@stdlib/fft/base/fftpack/cosqi' );

var N = 8;
var workspace = new Float64Array( ( 3*N ) + 34 );

cosqi( N, workspace, 1, 0 );
console.log( 'Sequence length: %d', N );

console.log( 'Cosine table:' );
var idx = zeroTo( N, 'generic' );
logEach( '  workspace[ %d ] = %0.4f', idx, workspace.slice( 0, N ) );

console.log( 'Twiddle factors:' );
idx = zeroTo( N, 'generic' );
logEach( '  workspace[ %d ] = %0.4f', idx, workspace.slice( 2*N, 3*N ) );

console.log( 'Factorization:' );
var nf = workspace[ (3*N)+1 ];

console.log( '  number of factors: %d', nf );
idx = zeroTo( nf, 'generic' );
logEach( '  factor[ %d ]: %d', idx, workspace.slice( (3*N)+2, (3*N)+2+nf ) );
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

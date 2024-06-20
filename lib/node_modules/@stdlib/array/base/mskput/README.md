<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# mskput

> Replace elements of an array with provided values according to a provided mask array.

<section class="usage">

## Usage

```javascript
var mskput = require( '@stdlib/array/base/mskput' );
```

#### mskput( x, mask, values, mode )

Replaces elements of an array with provided values according to a provided mask array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 1, 0, 1, 0 ], [ 20, 40 ], 'throw' );
// returns [ 1, 20, 3, 40 ]

var bool = ( out === x );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **values**: values to set.
-   **mode**: string specifying whether to raise an exception when the number of `values` is less than the number of falsy `mask` values.

The function supports the following modes:

-   `'throw'`: specifies that the function must raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
-   `'broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
-   `'repeat'`: specifies that the function must reuse provided `values` when replacing elements in `x` in order to satisfy the `mask` array.

When `mode` is equal to `'broadcast`', the function supports broadcasting a `values` array containing a single element against the number of falsy values in the `mask` array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 1, 0, 1, 0 ], [ 20 ], 'broadcast' );
// returns [ 1, 20, 3, 20 ]

var bool = ( out === x );
// returns true
```

When `mode` is equal to `repeat`, the function supports recycling elements in a `values` array to satisfy the number of falsy values in the `mask` array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 0, 0, 1, 0 ], [ 20, 40 ], 'repeat' );
// returns [ 20, 40, 3, 20 ]

var bool = ( out === x );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function mutates the input array `x`.
-   If a `mask` array element is falsy, the corresponding element in `x` is **replaced**; otherwise, the corresponding element in `x` is "masked" and thus left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var linspace = require( '@stdlib/array/base/linspace' );
var mskput = require( '@stdlib/array/base/mskput' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate a random mask array:
var N = discreteUniform( 5, 15 );
var mask = filledBy( N, bernoulli.factory( 0.3 ) );
console.log( mask );

// Generate an array of random values:
var values = filledBy( N, discreteUniform.factory( 1000, 2000 ) );
console.log( values );

// Update a random sample of elements in `x`:
var out = mskput( x, mask, values, 'throw' );
console.log( out );
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

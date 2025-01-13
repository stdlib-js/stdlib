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

# normalizeIndices

> Normalize a list of indices to the interval `[0,max]`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var normalizeIndices = require( '@stdlib/ndarray/base/normalize-indices' );
```

#### normalizeIndices( indices, max )

Normalizes a list of indices to the interval `[0,max]`.

```javascript
var idx = normalizeIndices( [ 2, -5 ], 10 );
// returns [ 2, 6 ]
```

If provided an out-of-bounds index, the function returns `null`.

```javascript
var idx = normalizeIndices( [ 15, -15 ], 10 );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function mutates the input array, even when provided an out-of-bounds index. If mutation is undesired, copy the input array before calling this function.
-   During normalization, a negative index is converted to a nonnegative index according to `max + idx + 1`. If, after normalization, the resolved index is still negative, the value is considered out-of-bounds.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var normalizeIndices = require( '@stdlib/ndarray/base/normalize-indices' );

// Generate a list of random indices:
var idx1 = discreteUniform( 100, -20, 20, {
    'dtype': 'generic'
});

// Normalize each index to the interval `[0, 15]`:
var idx2 = idx1.slice();
var out = normalizeIndices( idx2, 15 );

// Check whether one or more indices was invalid:
if ( out === null ) {
    console.log( 'One or more indices was invalid.' );
}

// Print the results...
var i;
for ( i = 0; i < idx1.length; i++ ) {
    console.log( '%d => [%d, %d] => %d', idx1[ i ], 0, 15, idx2[ i ] );
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

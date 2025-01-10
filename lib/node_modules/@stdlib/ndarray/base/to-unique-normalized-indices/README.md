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

# toUniqueNormalizedIndices

> Return a list of unique indices after normalizing to the interval `[0,max]`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toUniqueNormalizedIndices = require( '@stdlib/ndarray/base/to-unique-normalized-indices' );
```

#### toUniqueNormalizedIndices( indices, max )

Returns a list of unique indices after normalizing to the interval `[0,max]`.

```javascript
var idx = toUniqueNormalizedIndices( [ 2, -5 ], 10 );
// returns [ 2, 6 ]
```

If provided an out-of-bounds index, the function returns `null`.

```javascript
var idx = toUniqueNormalizedIndices( [ 15, -15 ], 10 );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function preserves provided index order.
-   When provided valid indices, the function always returns a "generic" array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var toUniqueNormalizedIndices = require( '@stdlib/ndarray/base/to-unique-normalized-indices' );

// Generate a list of random indices:
var idx = discreteUniform( 100, -15, 15, {
    'dtype': 'generic'
});
console.log( idx );

// Generate a list of unique indices normalized to the interval `[0, 15]`:
var out = toUniqueNormalizedIndices( idx, 15 );
console.log( out );
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

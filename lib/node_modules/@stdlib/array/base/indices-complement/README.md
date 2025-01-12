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

# indicesComplement

> Return the complement of a list of array indices.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
```

#### indicesComplement( N, indices )

Returns the complement of a list of array indices.

```javascript
var idx = indicesComplement( 5, [ 1, 2 ] );
// returns [ 0, 3, 4 ]
```

The function accepts the following arguments:

-   **N**: array length.
-   **indices**: list of indices from which to derive the complement.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **always** returns a new "generic" array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var indicesComplement = require( '@stdlib/array/base/indices-complement' );

var out = indicesComplement( 5, [ 1, 3, 4 ] );
// returns [ 0, 2 ]

out = indicesComplement( 5, [ 0, 1 ] );
// returns [ 2, 3, 4 ]

out = indicesComplement( 5, [ 0 ] );
// returns [ 1, 2, 3, 4 ]

out = indicesComplement( 5, [] );
// returns [ 0, 1, 2, 3, 4 ]

out = indicesComplement( 5, [ 0, 1, 2, 3, 4 ] );
// returns []
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

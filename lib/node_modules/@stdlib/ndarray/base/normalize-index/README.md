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

# normalizeIndex

> Normalize an index to the interval `[0,max]`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
```

#### normalizeIndex( idx, max )

Normalizes an index to the interval `[0,max]`.

```javascript
var idx = normalizeIndex( 2, 10 );
// returns 2

idx = normalizeIndex( -5, 10 );
// returns 6
```

If provided an out-of-bounds index, the function returns `-1`.

```javascript
var idx = normalizeIndex( 15, 10 );
// returns -1

idx = normalizeIndex( -15, 10 );
// returns -1
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   During normalization, a negative index is converted to a nonnegative index according to `max + idx + 1`. If, after normalization, the resolved index is still negative, the value is considered out-of-bounds.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );

var idx;
var out;
var i;

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( -20, 20 );
    out = normalizeIndex( idx, 15 );
    console.log( '%d => [%d,%d] => %d', idx, 0, 15, out );
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

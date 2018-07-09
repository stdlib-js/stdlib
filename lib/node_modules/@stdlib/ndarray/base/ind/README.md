<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# ind

> Return an index given an index mode.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ind = require( '@stdlib/ndarray/base/ind' );
```

#### ind( idx, max, mode )

Returns an index given an index `mode`.

<!-- run throws: true -->

```javascript
var idx = ind( 2, 9, 'throw' );
// returns 2

idx = ind( -1, 9, 'throw' );
// throws <RangeError>

idx = ind( 10, 9, 'throw' );
// throws <RangeError>
```

The function supports the following `modes`:

-   `throw`: specifies that the function should throw an error when an index is outside the interval `[0,max]`.
-   `wrap`: specifies that the function should wrap around an index using modulo arithmetic.
-   `clamp`: specifies that the function should set an index less than `0` to `0` (minimum index) and set an index greater than `max` to `max`.

```javascript
var idx = ind( 2, 9, 'wrap' );
// returns 2

idx = ind( 10, 9, 'wrap' );
// returns 0

idx = ind( -1, 9, 'wrap' );
// returns 9

idx = ind( 2, 9, 'clamp' );
// returns 2

idx = ind( 10, 9, 'clamp' );
// returns 9

idx = ind( -1, 9, 'clamp' );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var ind = require( '@stdlib/ndarray/base/ind' );

var modes;
var mode;
var idx;
var out;
var i;

modes = [ 'clamp', 'wrap' ];

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( -20, 20 );
    mode = modes[ discreteUniform( 0, modes.length-1 ) ];
    out = ind( idx, 9, mode );
    console.log( '%d => %s(%d,%d) => %d', idx, mode, 0, 9, out );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

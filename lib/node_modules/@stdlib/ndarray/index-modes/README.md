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

# Index Modes

> List of ndarray index modes.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var modes = require( '@stdlib/ndarray/index-modes' );
```

#### modes()

Returns a list of ndarray index modes.

```javascript
var out = modes();
// returns [ 'throw', 'clamp', 'wrap' ]
```

The output `array` contains the following modes:

-   `throw`: specifies that a function should throw an error when an index is outside a restricted interval.
-   `wrap`: specifies that a function should wrap around an index using modulo arithmetic.
-   `clamp`: specifies that a function should set an index less than `0` to `0` (minimum index) and set an index greater than a maximum index value to the maximum possible index.

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
var indexOf = require( '@stdlib/utils/index-of' );
var modes = require( '@stdlib/ndarray/index-modes' );

var MODES = modes();
var bool;

function isMode( str ) {
    if ( indexOf( MODES, str ) === -1 ) {
        return false;
    }
    return true;
}

bool = isMode( 'throw' );
// returns true

bool = isMode( 'clamp' );
// returns true

bool = isMode( 'wrap' );
// returns true

bool = isMode( 'beep' );
// returns false
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

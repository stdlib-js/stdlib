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

# imul

> Perform C-like multiplication of two signed 32-bit integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var imul = require( '@stdlib/math/base/special/imul' );
```

#### imul( a, b )

Performs C-like multiplication of two signed 32-bit integers.

```javascript
var v = imul( -10|0, 4|0 );
// returns -40

v = imul( 1073741824|0, -5|0 ); // 2^30 * -5 = -5368709120 => 32-bit integer overflow
// returns -1073741824
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function emulates C-like multiplication of two signed 32-bit integers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var INT32_MIN = require( '@stdlib/constants/int32/min' );
var INT32_MAX = require( '@stdlib/constants/int32/max' );
var imul = require( '@stdlib/math/base/special/imul' );

var randi;
var a;
var b;
var y;
var i;

randi = discreteUniform( INT32_MIN, INT32_MAX );

for ( i = 0; i < 100; i++ ) {
    a = randi()|0;
    b = randi()|0;
    y = imul( a, b );
    console.log( '%d x %d = %d', a, b, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

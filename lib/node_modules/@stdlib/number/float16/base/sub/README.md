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

# sub

> Subtract two half-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sub = require( '@stdlib/number/float16/base/sub' );
```

#### sub( x, y )

Subtracts two half-precision floating-point numbers.

```javascript
var v = sub( -1.0, 5.0 );
// returns -6.0

v = sub( 2.0, 5.0 );
// returns -3.0

v = sub( 0.0, 5.0 );
// returns -5.0

v = sub( -0.0, 0.0 );
// returns -0.0

v = sub( NaN, NaN );
// returns NaN
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
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var uniform = require( '@stdlib/random/array/uniform' );
var map = require( '@stdlib/array/base/map' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sub = require( '@stdlib/number/float16/base/sub' );

var x = map( uniform( 100, -50.0, 50.0 ), toFloat16 );
var y = map( uniform( 100, -50.0, 50.0 ), toFloat16 );

logEachMap( 'x: %f, y: %f => %f', x, y, sub );
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

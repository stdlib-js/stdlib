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

# tand

> Computes the [tangent][trigonometric-functions] of an angle measured in degrees.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var tand = require( '@stdlib/math/base/special/tand' );
```

#### tand( x )

Evaluates the [tangent][trigonometric-functions] of `x` (in degrees).

```javascript
var v = tand( 0.0 );
// returns 0

v = tand( 60.0 );
// returns ~1.73

v = tand( 90.0 );
// returns Infinity

v = tand( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var tand = require( '@stdlib/math/base/special/tand' );

var x = linspace( -180, 180, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( tand( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

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

# cosd

> Computes the [cosine][trigonometric-functions] of an angle measured in degrees.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var cosd = require( '@stdlib/math/base/special/cosd' );
```

#### cosd( x )

Computes the [cosine][trigonometric-functions] of `x` (in degrees).

```javascript
var v = cosd( 0.0 );
// returns 1.0

v = cosd( 60.0 );
// returns ~0.5

v = cosd( 90.0 );
// returns 0.0

v = cosd( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var cosd = require( '@stdlib/math/base/special/cosd' );

var x = linspace( -180, 180, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( cosd( x[ i ] ) );
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

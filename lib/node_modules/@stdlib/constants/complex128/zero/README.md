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

# ZERO

> Double-precision complex floating-point zero.

<section class="usage">

## Usage

```javascript
var COMPLEX128_ZERO = require( '@stdlib/constants/complex128/zero' );
```

#### COMPLEX128_ZERO

Double-precision complex floating-point zero.

```javascript
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );

var re = real( COMPLEX128_ZERO );
// returns 0.0

var im = imag( COMPLEX128_ZERO );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var Complex128Array = require( '@stdlib/array/complex128' );
var COMPLEX128_ZERO = require( '@stdlib/constants/complex128/zero' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
// returns <Complex128Array>

var v = x.get( 0 );
// returns <Complex128>

var re = real( v );
// returns 1.0

var im = imag( v );
// returns 2.0

x.fill( COMPLEX128_ZERO );

v = x.get( 0 );
// returns <Complex128>

re = real( v );
// returns 0.0

im = imag( v );
// returns 0.0
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

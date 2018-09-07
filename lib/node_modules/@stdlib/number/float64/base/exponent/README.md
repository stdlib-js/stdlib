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

# Exponent

> Return an integer corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var exponent = require( '@stdlib/number/float64/base/exponent' );
```

#### exponent( x )

Returns an `integer` corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].

```javascript
var exp = exponent( 3.14e307 ); // => 2**1021 ~ 1e307
// returns 1021

exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
// returns -1019

exp = exponent( -3.14 );
// returns 1

exp = exponent( 0.0 );
// returns -1023

exp = exponent( NaN );
// returns 1024
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var exponent = require( '@stdlib/number/float64/base/exponent' );

var frac;
var exp;
var x;
var e;
var i;

// Generate random numbers and extract their exponents...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = round( randu()*646.0 ) - 323;
    x = frac * pow( 10.0, exp );
    e = exponent( x );
    console.log( 'x: %d. unbiased exponent: %d.', x, e );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

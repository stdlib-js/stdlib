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

# phase

> Compute the [argument][complex-number-argument] of a complex number in radians.

<section class="intro">

The [argument][complex-number-argument] of a complex number, also known as the **phase**, is the angle of the radius extending from the origin to the complex number plotted in the complex plane and the positive real axis.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cphase = require( '@stdlib/math/base/special/cphase' );
```

#### cphase( re, im )

Computes the [argument][complex-number-argument] of a `complex` number comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var phi = cphase( 5.0, 3.0 );
// returns ~0.5404
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cphase = require( '@stdlib/math/base/special/cphase' );

var re;
var im;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    console.log( 'arg(%s) = %d', z.toString(), cphase( real(z), imag(z) ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[complex-number-argument]: https://en.wikipedia.org/wiki/Argument_%28complex_analysis%29

</section>

<!-- /.links -->

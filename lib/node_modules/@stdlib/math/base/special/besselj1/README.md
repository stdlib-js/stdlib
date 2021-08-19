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

# j1

> Compute the [Bessel function of the first kind][bessel-first-kind] of order one.

<section class="intro">

The [Bessel function of the first kind][bessel-first-kind] of order one is defined as

<!-- <equation class="equation" label="eq:bessel_first_kind_order_one" align="center" raw="J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau" alt="Bessel function of the first kind of order one"> -->

<div class="equation" align="center" data-raw-text="J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau" data-equation="eq:bessel_first_kind_order_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/besselj1/docs/img/equation_bessel_first_kind_order_one.svg" alt="Bessel function of the first kind of order one">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var j1 = require( '@stdlib/math/base/special/besselj1' );
```

#### j1( x )

Computes the [Bessel function of the first kind][bessel-first-kind] of order one at `x`.

```javascript
var v = j1( 0.0 );
// returns 0.0

v = j1( 1.0 );
// returns ~0.440

v = j1( Infinity );
// returns 0.0

v = j1( -Infinity );
// returns 0.0

v = j1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var j1 = require( '@stdlib/math/base/special/besselj1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    console.log( 'j1(%d) = %d', x, j1( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[bessel-first-kind]: https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_first_kind:_J.CE.B1

</section>

<!-- /.links -->

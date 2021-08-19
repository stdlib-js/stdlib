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

# y1

> Compute the [Bessel function of the second kind][bessel-second-kind] of order one.

<section class="intro">

The [Bessel function of the second kind][bessel-second-kind] of order one is defined as

<!-- <equation class="equation" label="eq:bessel_second_kind_order_one" align="center" raw="Y_1(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta - \theta) \, d\theta -\frac{1}{\pi} \int_0^\infty  \left[ e^t - e^{-t} \right]  e^{-x \sinh t} \, dt" alt="Bessel function of the second kind of order one"> -->

<div class="equation" align="center" data-raw-text="Y_1(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta - \theta) \, d\theta -\frac{1}{\pi} \int_0^\infty  \left[ e^t - e^{-t} \right]  e^{-x \sinh t} \, dt" data-equation="eq:bessel_second_kind_order_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/bessely1/docs/img/equation_bessel_second_kind_order_one.svg" alt="Bessel function of the second kind of order one">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- ./intro -->

<section class="usage">

## Usage

```javascript
var y1 = require( '@stdlib/math/base/special/bessely1' );
```

#### y1( x )

Computes the [Bessel function of the second kind][bessel-second-kind] of order one at `x`.

```javascript
var v = y1( 0.0 );
// returns -Infinity

v = y1( 1.0 );
// returns ~-0.781

v = y1( Infinity );
// returns 0.0
```

If `x < 0` or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = y1( -1.0 );
// returns NaN

v = y1( -Infinity );
// returns NaN

v = y1( NaN );
// returns NaN

```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var y1 = require( '@stdlib/math/base/special/bessely1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    console.log( 'y1(%d) = %d', x, y1( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[bessel-second-kind]: https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_second_kind:_Y.CE.B1

</section>

<!-- /.links -->

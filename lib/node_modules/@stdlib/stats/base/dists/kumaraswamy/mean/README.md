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

# Mean

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [expected value][mean].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mean][mean] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:kumaraswamy_mean" align="center" raw="\mathbb{E} \left[ X \right] = {b\Gamma(1+{\tfrac {1}{a}})\Gamma(b)}{\Gamma(1+{\tfrac{1}{a}}+b)}" alt="Mean for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="\mathbb{E} \left[ X \right] = {b\Gamma(1+{\tfrac {1}{a}})\Gamma(b)}{\Gamma(1+{\tfrac{1}{a}}+b)}" data-equation="eq:kumaraswamy_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/mean/docs/img/equation_kumaraswamy_mean.svg" alt="Mean for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the first shape parameter, `b` the second shape parameter, and `Γ` denotes the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/kumaraswamy/mean' );
```

#### mean( a, b )

Returns the [expected value][mean] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```javascript
var v = mean( 1.5, 1.5 );
// returns ~0.512

v = mean( 4.0, 12.0 );
// returns ~0.481

v = mean( 2.0, 8.0 );
// returns ~0.3
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mean( NaN, 2.0 );
// returns NaN

v = mean( 2.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = mean( -1.0, 2.0 );
// returns NaN

y = mean( 0.0, 2.0 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = mean( 2.0, -1.0 );
// returns NaN

y = mean( 2.0, 0.0 );
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
var randu = require( '@stdlib/random/base/randu' );
var mean = require( '@stdlib/stats/base/dists/kumaraswamy/mean' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = randu() * 10.0;
    b = randu() * 10.0;
    v = mean( a, b );
    console.log( 'a: %d, b: %d, E(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[mean]: https://en.wikipedia.org/wiki/Mean

</section>

<!-- /.links -->

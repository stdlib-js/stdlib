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

# Probability Density Function

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [probability density function][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:kumaraswamy_pdf" align="center" raw="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} &amp; \text{ for } x \in (0,1) \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:kumaraswamy_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/pdf/docs/img/equation_kumaraswamy_pdf.svg" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/kumaraswamy/pdf' );
```

#### pdf( x, a, b )

Evaluates the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = pdf( 0.5, 1.0, 1.0 );
// returns 1.0

y = pdf( 0.5, 2.0, 4.0 );
// returns ~1.688

y = pdf( 0.2, 2.0, 2.0 );
// returns ~0.768

y = pdf( 0.8, 4.0, 4.0 );
// returns ~1.686

y = pdf( -0.5, 4.0, 2.0 );
// returns 0.0

y = pdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = pdf( 1.5, 4.0, 2.0 );
// returns 0.0

y = pdf( +Infinity, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0, 0.5 );
// returns NaN

y = pdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.5, -1.0 );
// returns NaN

y = pdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### pdf.factory( a, b )

Returns a function for evaluating the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var mypdf = pdf.factory( 0.5, 0.5 );

var y = mypdf( 0.8 );
// returns ~0.86

y = mypdf( 0.3 );
// returns ~0.679
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pdf = require( '@stdlib/stats/base/dists/kumaraswamy/pdf' );

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    a = ( randu()*5.0 ) + EPS;
    b = ( randu()*5.0 ) + EPS;
    y = pdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, f(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->

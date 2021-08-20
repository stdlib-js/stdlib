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

> [Exponential][exponential-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_pdf" align="center" raw="f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}" alt="Probability density function (PDF) for a Exponential distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} &amp; x \ge 0 \\ 0 &amp; x &lt; 0 \end{cases}" data-equation="eq:exponential_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/pdf/docs/img/equation_exponential_pdf.svg" alt="Probability density function (PDF) for a Exponential distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/exponential/pdf' );
```

#### pdf( x, lambda )

Evaluates the [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = pdf( 2.0, 0.3 );
// returns ~0.165

y = pdf( 2.0, 1.0 );
// returns ~0.135
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0 );
// returns NaN
```

#### pdf.factory( lambda )

Partially apply `lambda` to create a reusable `function` for evaluating the [PDF][pdf].

```javascript
var mypdf = pdf.factory( 0.1 );

var y = mypdf( 8.0 );
// returns ~0.045

y = mypdf( 5.0 );
// returns ~0.06
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/exponential/pdf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = pdf( x, lambda );
    console.log( 'x: %d, λ: %d, f(x;λ): %d', x, lambda, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->

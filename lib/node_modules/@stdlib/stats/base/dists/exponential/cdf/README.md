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

# Cumulative Distribution Function

> [Exponential][exponential-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_cdf" align="center" raw="F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}" alt="Cumulative distribution function for an exponential distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} &amp; x \ge 0 \\ 0 &amp; x &lt; 0 \end{cases}" data-equation="eq:exponential_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/cdf/docs/img/equation_exponential_cdf.svg" alt="Cumulative distribution function for an exponential distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/exponential/cdf' );
```

#### cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = cdf( 2.0, 0.3 );
// returns ~0.451

y = cdf( 10.0, 0.3 );
// returns ~0.95
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

#### cdf.factory( lambda )

Returns a function for evaluating the [cumulative distribution function (CDF)][cdf] for an exponential distribution with rate parameter `lambda`.

```javascript
var mycdf = cdf.factory( 0.1 );

var y = mycdf( 8.0 );
// returns ~0.551

y = mycdf( 2.0 );
// returns ~0.181

y = mycdf( 0.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/exponential/cdf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = cdf( x, lambda );
    console.log( 'x: %d, λ: %d, F(x;λ): %d', x, lambda, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->

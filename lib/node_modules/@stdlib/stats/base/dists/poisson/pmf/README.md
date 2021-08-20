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

# Probability Mass Function

> [Poisson][poisson-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_pmf" align="center" raw="f(x;\lambda)=P(X=x;\lambda)=\begin{cases} \tfrac{\lambda^x}{x!}e^{-\lambda} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a Poisson distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\lambda)=P(X=x;\lambda)=\begin{cases} \tfrac{\lambda^x}{x!}e^{-\lambda} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:poisson_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/pmf/docs/img/equation_poisson_pmf.svg" alt="Probability mass function (PMF) for a Poisson distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the mean parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/poisson/pmf' );
```

#### pmf( x, lambda )

Evaluates the [probability mass function][pmf] (PMF) of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var y = pmf( 4.0, 3.0 );
// returns ~0.168

y = pmf( 1.0, 3.0 );
// returns ~0.149

y = pmf( -1.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 2.0 );
// returns NaN

y = pmf( 0.0, NaN );
// returns NaN
```

If provided a negative mean parameter `lambda`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, -1.0 );
// returns NaN

y = pmf( 4.0, -2.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `0.0`.

```javascript
var y = pmf( 2.0, 0.0 );
// returns 0.0

y = pmf( 0.0, 0.0 );
// returns 1.0
```

#### pmf.factory( lambda )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var mypmf = pmf.factory( 1.0 );
var y = mypmf( 3.0 );
// returns ~0.061

y = mypmf( 1.0 );
// returns ~0.368
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pmf = require( '@stdlib/stats/base/dists/poisson/pmf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 10.0 );
    lambda = randu() * 10.0;
    y = pmf( x, lambda );
    console.log( 'x: %d, λ: %d, P(X=x;λ): %d', x, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->

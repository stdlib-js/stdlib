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

> [Poisson][poisson-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_cdf" align="center" raw="F(x;\lambda) = \begin{cases} 0 & \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} & \text{ for } x > 0 \end{cases}" alt="Cumulative distribution function for a Poisson distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\lambda) = \begin{cases} 0 &amp; \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} &amp; \text{ for } x &gt; 0 \end{cases}" data-equation="eq:poisson_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/cdf/docs/img/equation_poisson_cdf.svg" alt="Cumulative distribution function for a Poisson distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda` is the mean parameter. Internally, the module evaluates the CDF by evaluating the upper regularized gamma function at input values `lambda` and `floor( x ) + 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/poisson/cdf' );
```

#### cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns ~0.986

y = cdf( 2.0, 10.0 );
// returns ~0.003

y = cdf( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( -2.0, 0.0 );
// returns 0.0

y = cdf( 0.0, 0.0 );
// returns 1.0

y = cdf( 10.0, 0.0 );
// returns 1.0
```

#### cdf.factory( lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var mycdf = cdf.factory( 5.0 );
var y = mycdf( 3.0 );
// returns ~0.265

y = mycdf( 8.0 );
// returns ~0.932
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/poisson/cdf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = cdf( x, lambda );
    console.log( 'x: %d, λ: %d, F(x;λ): %d', x.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

</section>

<!-- /.links -->

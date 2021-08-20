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

> [Degenerate distribution][degenerate-distribution] [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [degenerate][degenerate-distribution] random variable is

<!-- <equation class="equation" label="eq:degenerate_cdf" align="center" raw="F(x;\mu)={\begin{cases}1, & x \geq \mu,\\0,& x < \mu.\end{cases}}" alt="Cumulative distribution function for a degenerate distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\mu)={\begin{cases}1, &amp; x \geq \mu,\\0,&amp; x &lt; \mu.\end{cases}}" data-equation="eq:degenerate_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/cdf/docs/img/equation_degenerate_cdf.svg" alt="Cumulative distribution function for a degenerate distribution.">
    <br>
</div>

<!-- </equation> -->

where `µ` is the constant value of the distribution.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/degenerate/cdf' );
```

#### cdf( x, mu )

Evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = cdf( 2.0, 8.0 );
// returns 0.0

y = cdf( 8.0, 8.0 );
// returns 1.0

y = cdf( 10.0, 8.0 );
// returns 1.0
```

#### cdf.factory( mu )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var mycdf = cdf.factory( 10.0 );

var y = mycdf( 10.0 );
// returns 1.0

y = mycdf( 8.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var cdf = require( '@stdlib/stats/base/dists/degenerate/cdf' );

var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*10.0 );
    mu = round( randu()*10.0 );
    y = cdf( x, mu );
    console.log( 'x: %d, µ: %d, F(x;µ): %d', x, mu, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->

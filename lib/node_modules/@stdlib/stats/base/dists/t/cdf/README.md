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

> [Student's t][t-distribution] distribution [cumulative distribution function][cdf] (CDF).

<section class="intro">

The [cumulative distribution function][cdf] (CDF) for a [t distribution][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_cdf" align="center" raw="F(x;\nu) = 1 - \frac{1}{2} \frac{\operatorname{Beta}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\operatorname{Beta}(\tfrac{\nu}{2}, \tfrac{1}{2})}" alt="Cumulative distribution function (CDF) for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\nu) = 1 - \frac{1}{2} \frac{\operatorname{Beta}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\operatorname{Beta}(\tfrac{\nu}{2}, \tfrac{1}{2})}" data-equation="eq:t_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/cdf/docs/img/equation_t_cdf.svg" alt="Cumulative distribution function (CDF) for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

where `v > 0` is the degrees of freedom. In the definition, `Beta( x; a, b )` denotes the lower incomplete beta function and `Beta( a, b )` the [beta function][beta-function].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/t/cdf' );
```

#### cdf( x, v )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = cdf( 2.0, 0.1 );
// returns ~0.611

y = cdf( 1.0, 2.0 );
// returns ~0.789

y = cdf( -1.0, 4.0 );
// returns ~0.187
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0 );
// returns NaN
```

#### cdf.factory( v )

Returns a `function` for evaluating the [cdf][cdf] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var mycdf = cdf.factory( 0.5 );
var y = mycdf( 3.0 );
// returns ~0.816

y = mycdf( 1.0 );
// returns ~0.699
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/t/cdf' );

var v;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu() * 6.0) - 3.0;
    v = randu() * 10.0;
    y = cdf( x, v );
    console.log( 'x: %d, v: %d, F(x;v): %d', x.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->

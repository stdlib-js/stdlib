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

> [Erlang][erlang-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_pdf" align="center" raw="f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)" alt="Probability density function (PDF) for an Erlang distribution."> -->

<div class="equation" align="center" data-raw-text="f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)" data-equation="eq:erlang_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/pdf/docs/img/equation_erlang_pdf.svg" alt="Probability density function (PDF) for an Erlang distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the shape parameter and `lambda` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/erlang/pdf' );
```

#### pdf( x, k, lambda )

Evaluates the [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution]  distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = pdf( 0.1, 1, 1.0 );
// returns ~0.905

y = pdf( 0.5, 2, 2.5 );
// returns ~0.895

y = pdf( -1.0, 4, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -2, 0.5 );
// returns NaN

y = pdf( 2.0, 0.5, 0.5 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = pdf( 2.0, 0.0, 2.0 );
// returns 0.0

y = pdf( 0.0, 0.0, 2.0 );
// returns Infinity
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1, 0.0 );
// returns NaN

y = pdf( 2.0, 1, -1.0 );
// returns NaN
```

#### pdf.factory( k, lambda )

Returns a `function` for evaluating the [PDF][pdf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var mypdf = pdf.factory( 3, 1.5 );

var y = mypdf( 1.0 );
// returns ~0.377

y = mypdf( 4.0 );
// returns ~0.067
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pdf = require( '@stdlib/stats/base/dists/erlang/pdf' );

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = round( randu() * 10.0 );
    lambda = randu() * 5.0;
    y = pdf( x, k, lambda );
    console.log( 'x: %d, k: %d, λ: %d, f(x;k,λ): %d', x.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->

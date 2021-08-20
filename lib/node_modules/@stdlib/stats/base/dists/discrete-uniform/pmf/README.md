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

> [Discrete uniform][discrete-uniform-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_pmf" align="center" raw="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} & \text{for } x \in \{ a, \ldots, b \} \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} &amp; \text{for } x \in \{ a, \ldots, b \} \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:discrete_uniform_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/pmf/docs/img/equation_discrete_uniform_pmf.svg" alt="Probability mass function (PMF) for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/discrete-uniform/pmf' );
```

#### pmf( x, a, b )

Evaluates the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = pmf( 2.0, 0, 4 );
// returns ~0.2

y = pmf( 5.0, 0, 4 );
// returns 0.0

y = pmf( 3, -4, 4 );
// returns ~0.111
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, -2, 2 );
// returns NaN

y = pmf( 1.0, NaN, 4 );
// returns NaN

y = pmf( 2.0, 0, NaN );
// returns NaN
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 3, 2 );
// returns NaN
```

#### pmf.factory( a, b )

Returns a `function` for evaluating the [PMF][pmf] for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myPDF = pmf.factory( 6, 7 );
var y = myPDF( 7.0 );
// returns 0.5

y = myPDF( 5.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random/base/discrete-uniform' );
var pmf = require( '@stdlib/stats/base/dists/discrete-uniform/pmf' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    a = randa();
    x = randb( a, a+randa() );
    b = randb( a, a+randa() );
    y = pmf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, P(X=x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->

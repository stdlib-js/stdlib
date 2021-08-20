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

> [Student's t][t-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [t distribution][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_pdf" align="center" raw="\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}" alt="Probability density function (PDF) for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}" data-equation="eq:t_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/pdf/docs/img/equation_t_pdf.svg" alt="Probability density function (PDF) for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

where `v > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/t/pdf' );
```

#### pdf( x, v )

Evaluates the [probability density function][pdf] (PDF) for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = pdf( 0.3, 4.0 );
// returns ~0.355

y = pdf( 2.0, 0.7 );
// returns ~0.058

y = pdf( -1.0, 0.5 );
// returns ~0.118
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0 );
// returns NaN

y = pdf( 2.0, 0.0 );
// returns NaN
```

#### pdf.factory( v )

Returns a `function` for evaluating the [PDF][pdf] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var mypdf = pdf.factory( 1.0 );
var y = mypdf( 3.0 );
// returns ~0.032

y = mypdf( 1.0 );
// returns ~0.159
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/t/pdf' );

var v;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu() * 6.0) - 3.0;
    v = randu() * 10.0;
    y = pdf( x, v );
    console.log( 'x: %d, v: %d, f(x;v): %d', x, v, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->

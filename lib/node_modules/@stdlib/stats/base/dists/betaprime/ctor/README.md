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

# Beta Prime

> Beta prime distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var BetaPrime = require( '@stdlib/stats/base/dists/betaprime/ctor' );
```

#### BetaPrime( \[alpha, beta] )

Returns a [beta prime][betaprime-distribution] distribution object.

```javascript
var betaprime = new BetaPrime();

var mode = betaprime.mode;
// returns 0.0
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (first shape parameter) and `beta` (second shape parameter), provide the corresponding arguments.

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var mu = betaprime.mean;
// returns ~0.667
```

* * *

## betaprime

A [beta prime][betaprime-distribution] distribution object has the following properties and methods...

### Writable Properties

#### betaprime.alpha

First shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var betaprime = new BetaPrime();

var alpha = betaprime.alpha;
// returns 1.0

betaprime.alpha = 3.0;

alpha = betaprime.alpha;
// returns 3.0
```

#### betaprime.beta

Second shape parameter of the distribution. `beta` **must** be a positive number.

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var b = betaprime.beta;
// returns 4.0

betaprime.beta = 3.0;

b = betaprime.beta;
// returns 3.0
```

* * *

### Computed Properties

#### BetaPrime.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var betaprime = new BetaPrime( 4.0, 12.0 );

var kurtosis = betaprime.kurtosis;
// returns ~5.764
```

#### BetaPrime.prototype.mean

Returns the [expected value][expected-value].

```javascript
var betaprime = new BetaPrime( 4.0, 12.0 );

var mu = betaprime.mean;
// returns ~0.364
```

#### BetaPrime.prototype.mode

Returns the [mode][mode].

```javascript
var betaprime = new BetaPrime( 4.0, 12.0 );

var mode = betaprime.mode;
// returns ~0.231
```

#### BetaPrime.prototype.skewness

Returns the [skewness][skewness].

```javascript
var betaprime = new BetaPrime( 4.0, 12.0 );

var skewness = betaprime.skewness;
// returns ~1.724
```

#### BetaPrime.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var betaprime = new BetaPrime( 4.0, 12.0 );

var s = betaprime.stdev;
// returns ~0.223
```

#### BetaPrime.prototype.variance

Returns the [variance][variance].

```javascript
var betaprime = new BetaPrime( 4.0, 12.0 );

var s2 = betaprime.variance;
// returns ~0.05
```

* * *

### Methods

#### BetaPrime.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var y = betaprime.cdf( 0.5 );
// returns ~0.539
```

#### BetaPrime.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var y = betaprime.logcdf( 0.5 );
// returns ~-0.618
```

#### BetaPrime.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var y = betaprime.logpdf( 0.8 );
// returns ~-0.754
```

#### BetaPrime.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var y = betaprime.pdf( 0.8 );
// returns ~0.47
```

#### BetaPrime.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var betaprime = new BetaPrime( 2.0, 4.0 );

var y = betaprime.quantile( 0.5 );
// returns ~0.457

y = betaprime.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var BetaPrime = require( '@stdlib/stats/base/dists/betaprime/ctor' );

var betaprime = new BetaPrime( 2.0, 4.0 );

var mu = betaprime.mean;
// returns ~0.667

var mode = betaprime.mode;
// returns 0.2

var s2 = betaprime.variance;
// returns ~0.556

var y = betaprime.cdf( 0.8 );
// returns ~0.735
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

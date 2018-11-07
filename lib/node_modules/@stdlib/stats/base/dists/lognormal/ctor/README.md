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

# Lognormal

> Lognormal distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var LogNormal = require( '@stdlib/stats/base/dists/lognormal/ctor' );
```

#### LogNormal( \[mu, sigma] )

Returns a [lognormal][lognormal-distribution] distribution object.

```javascript
var lognormal = new LogNormal();

var mean = lognormal.mean;
// returns ~1.649
```

By default, `mu = 0.0` and `sigma = 1.0`. To create a distribution having a different `mu` (location parameter) and `sigma` (scale parameter), provide the corresponding arguments.

```javascript
var lognormal = new LogNormal( 2.0, 4.0 );

var mu = lognormal.mean;
// returns ~22026.466
```

* * *

## lognormal

A [lognormal][lognormal-distribution] distribution object has the following properties and methods...

### Writable Properties

#### lognormal.mu

Location parameter of the distribution.

```javascript
var lognormal = new LogNormal();

var mu = lognormal.mu;
// returns 0.0

lognormal.mu = 3.0;

mu = lognormal.mu;
// returns 3.0
```

#### lognormal.sigma

Scale parameter of the distribution. `sigma` **must** be a positive number.

```javascript
var lognormal = new LogNormal( 2.0, 4.0 );

var sigma = lognormal.sigma;
// returns 4.0

lognormal.sigma = 3.0;

sigma = lognormal.sigma;
// returns 3.0
```

* * *

### Computed Properties

#### LogNormal.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var entropy = lognormal.entropy;
// returns ~7.904
```

#### LogNormal.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var kurtosis = lognormal.kurtosis;
// returns 1.4243659274306933e+250
```

#### LogNormal.prototype.mean

Returns the [expected value][expected-value].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var mu = lognormal.mean;
// returns 1.0148003881138887e+33
```

#### LogNormal.prototype.median

Returns the [median][median].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var median = lognormal.median;
// returns ~54.598
```

#### LogNormal.prototype.mode

Returns the [mode][mode].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var mode = lognormal.mode;
// returns 1.580420060273613e-61
```

#### LogNormal.prototype.skewness

Returns the [skewness][skewness].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var skewness = lognormal.skewness;
// returns 6.421080152185613e+93
```

#### LogNormal.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var s = lognormal.stdev;
// returns 1.886180808490652e+64
```

#### LogNormal.prototype.variance

Returns the [variance][variance].

```javascript
var lognormal = new LogNormal( 4.0, 12.0 );

var s2 = lognormal.variance;
// returns 3.55767804231845e+128
```

* * *

### Methods

#### LogNormal.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var lognormal = new LogNormal( 2.0, 4.0 );

var y = lognormal.cdf( 0.5 );
// returns ~0.25
```

#### LogNormal.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var lognormal = new LogNormal( 2.0, 4.0 );

var y = lognormal.logpdf( 2.0 );
// returns ~-3.052
```

#### LogNormal.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var lognormal = new LogNormal( 2.0, 4.0 );

var y = lognormal.pdf( 2.0 );
// returns ~0.047
```

#### LogNormal.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var lognormal = new LogNormal( 2.0, 4.0 );

var y = lognormal.quantile( 0.5 );
// returns ~7.389

y = lognormal.quantile( 1.9 );
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
var LogNormal = require( '@stdlib/stats/base/dists/lognormal/ctor' );

var lognormal = new LogNormal( 2.0, 1.0 );

var mean = lognormal.mean;
// returns ~12.182

var median = lognormal.median;
// returns ~7.389

var s2 = lognormal.variance;
// returns ~255.016

var y = lognormal.cdf( 0.8 );
// returns ~0.013
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

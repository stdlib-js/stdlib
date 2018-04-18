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

# Logistic

> Logistic distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Logistic = require( '@stdlib/stats/base/dists/logistic/ctor' );
```

#### Logistic( \[mu, s] )

Returns a [logistic][logistic-distribution] distribution object.

```javascript
var logistic = new Logistic();

var mu = logistic.mean;
// returns 0.0
```

By default, `mu = 0.0` and `s = 1.0`. To create a distribution having a different `mu` (location parameter) and `s` (scale parameter), provide the corresponding arguments.

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var mu = logistic.mean;
// returns 2.0
```

* * *

## logistic

A [logistic][logistic-distribution] distribution object has the following properties and methods...

### Writable Properties

#### logistic.mu

Location parameter of the distribution.

```javascript
var logistic = new Logistic();

var mu = logistic.mu;
// returns 0.0

logistic.mu = 3.0;

mu = logistic.mu;
// returns 3.0
```

#### logistic.s

Scale parameter of the distribution. `s` **must** be a positive number.

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var s = logistic.s;
// returns 4.0

logistic.s = 3.0;

s = logistic.s;
// returns 3.0
```

* * *

### Computed Properties

#### Logistic.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var entropy = logistic.entropy;
// returns ~4.485
```

#### Logistic.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var kurtosis = logistic.kurtosis;
// returns 1.2
```

#### Logistic.prototype.mean

Returns the [expected value][expected-value].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var mu = logistic.mean;
// returns 4.0
```

#### Logistic.prototype.median

Returns the [median][median].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var median = logistic.median;
// returns 4.0
```

#### Logistic.prototype.mode

Returns the [mode][mode].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var mode = logistic.mode;
// returns 4.0
```

#### Logistic.prototype.skewness

Returns the [skewness][skewness].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var skewness = logistic.skewness;
// returns 0.0
```

#### Logistic.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var s = logistic.stdev;
// returns ~21.766
```

#### Logistic.prototype.variance

Returns the [variance][variance].

```javascript
var logistic = new Logistic( 4.0, 12.0 );

var s2 = logistic.variance;
// returns ~473.741
```

* * *

### Methods

#### Logistic.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var y = logistic.cdf( 0.5 );
// returns ~0.407
```

#### Logistic.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var y = logistic.logcdf( 2.0 );
// returns ~-0.693
```

#### Logistic.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var y = logistic.logpdf( 0.8 );
// returns ~-2.795
```

#### Logistic.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var y = logistic.mgf( 0.2 );
// returns ~6.379
```

#### Logistic.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var y = logistic.pdf( 2.0 );
// returns 0.0625
```

#### Logistic.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var logistic = new Logistic( 2.0, 4.0 );

var y = logistic.quantile( 0.5 );
// returns 2.0

y = logistic.quantile( 1.9 );
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
var Logistic = require( '@stdlib/stats/base/dists/logistic/ctor' );

var logistic = new Logistic( 2.0, 4.0 );

var mean = logistic.mean;
// returns 2.0

var median = logistic.median;
// returns 2.0

var s2 = logistic.variance;
// returns ~52.638

var y = logistic.cdf( 0.8 );
// returns ~0.426
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

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

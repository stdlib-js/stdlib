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

# Weibull

> Weibull distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Weibull = require( '@stdlib/stats/base/dists/weibull/ctor' );
```

#### Weibull( \[k, lambda] )

Returns a [Weibull][weibull-distribution] distribution object.

```javascript
var weibull = new Weibull();

var mode = weibull.mode;
// returns 0.0
```

By default, `k = 1.0` and `lambda = 1.0`. To create a distribution having a different `k` (shape parameter) and `lambda` (scale parameter), provide the corresponding arguments.

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var mode = weibull.mode;
// returns ~2.828
```

* * *

## weibull

A [Weibull][weibull-distribution] distribution object has the following properties and methods...

### Writable Properties

#### weibull.k

Shape parameter of the distribution. `k` **must** be a positive number.

```javascript
var weibull = new Weibull();

var k = weibull.k;
// returns 1.0

weibull.k = 3.0;

k = weibull.k;
// returns 3.0
```

#### weibull.lambda

Scale parameter of the distribution. `lambda` **must** be a positive number.

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var lambda = weibull.lambda;
// returns 4.0

weibull.lambda = 3.0;

lambda = weibull.lambda;
// returns 3.0
```

* * *

### Computed Properties

#### Weibull.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var entropy = weibull.entropy;
// returns ~2.532
```

#### Weibull.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var kurtosis = weibull.kurtosis;
// returns ~-0.252
```

#### Weibull.prototype.mean

Returns the [expected value][expected-value].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var mu = weibull.mean;
// returns ~10.877
```

#### Weibull.prototype.mode

Returns the [mode][mode].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var mode = weibull.mode;
// returns ~11.167
```

#### Weibull.prototype.skewness

Returns the [skewness][skewness].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var skewness = weibull.skewness;
// returns ~-0.087
```

#### Weibull.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var s = weibull.stdev;
// returns ~3.051
```

#### Weibull.prototype.variance

Returns the [variance][variance].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var s2 = weibull.variance;
// returns ~9.311
```

* * *

### Methods

#### Weibull.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.cdf( 0.5 );
// returns ~0.016
```

#### Weibull.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (logCDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.logcdf( 0.8 );
// returns ~-3.239
```

#### Weibull.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.logpdf( 0.8 );
// returns ~-2.343
```

#### Weibull.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.mgf( 0.5 );
// returns ~9.878
```

#### Weibull.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.pdf( 0.8 );
// returns ~0.096
```

#### Weibull.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.quantile( 0.5 );
// returns ~3.33

y = weibull.quantile( 1.9 );
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
var Weibull = require( '@stdlib/stats/base/dists/weibull/ctor' );

var weibull = new Weibull( 2.0, 4.0 );

var mu = weibull.mean;
// returns ~3.545

var mode = weibull.mode;
// returns ~2.828

var s2 = weibull.variance;
// returns ~3.434

var y = weibull.cdf( 0.8 );
// returns ~0.039
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

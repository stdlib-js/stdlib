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

# Normal

> Normal distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Normal = require( '@stdlib/stats/base/dists/normal/ctor' );
```

#### Normal( \[mu, sigma] )

Returns a [normal][normal-distribution] distribution object.

```javascript
var normal = new Normal();

var mu = normal.mean;
// returns 0.0
```

By default, `mu = 0.0` and `sigma = 1.0`. To create a distribution having a different `mu` (mean parameter) and `sigma` (standard deviation), provide the corresponding arguments.

```javascript
var normal = new Normal( 2.0, 4.0 );

var mu = normal.mean;
// returns 2.0
```

* * *

## normal

A [normal][normal-distribution] distribution object has the following properties and methods...

### Writable Properties

#### normal.mu

Mean parameter of the distribution.

```javascript
var normal = new Normal();

var mu = normal.mu;
// returns 0.0

normal.mu = 3.0;

mu = normal.mu;
// returns 3.0
```

#### normal.sigma

Standard deviation of the distribution. `sigma` **must** be a positive number.

```javascript
var normal = new Normal( 2.0, 4.0 );

var sigma = normal.sigma;
// returns 4.0

normal.sigma = 3.0;

sigma = normal.sigma;
// returns 3.0
```

* * *

### Computed Properties

#### Normal.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var normal = new Normal( 4.0, 12.0 );

var entropy = normal.entropy;
// returns ~3.904
```

#### Normal.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var normal = new Normal( 4.0, 12.0 );

var kurtosis = normal.kurtosis;
// returns 0.0
```

#### Normal.prototype.mean

Returns the [expected value][expected-value].

```javascript
var normal = new Normal( 4.0, 12.0 );

var mu = normal.mean;
// returns 4.0
```

#### Normal.prototype.median

Returns the [median][median].

```javascript
var normal = new Normal( 4.0, 12.0 );

var median = normal.median;
// returns 4.0
```

#### Normal.prototype.mode

Returns the [mode][mode].

```javascript
var normal = new Normal( 4.0, 12.0 );

var mode = normal.mode;
// returns 4.0
```

#### Normal.prototype.skewness

Returns the [skewness][skewness].

```javascript
var normal = new Normal( 4.0, 12.0 );

var skewness = normal.skewness;
// returns 0.0
```

#### Normal.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var normal = new Normal( 4.0, 12.0 );

var s = normal.stdev;
// returns 12.0
```

#### Normal.prototype.variance

Returns the [variance][variance].

```javascript
var normal = new Normal( 4.0, 12.0 );

var s2 = normal.variance;
// returns 144.0
```

* * *

### Methods

#### Normal.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.cdf( 0.5 );
// returns ~0.354
```

#### Normal.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.logpdf( 2.0 );
// returns ~-2.305
```

#### Normal.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.mgf( 0.2 );
// returns ~2.054
```

#### Normal.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.pdf( 2.0 );
// returns ~0.1
```

#### Normal.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.quantile( 0.5 );
// returns 2.0

y = normal.quantile( 1.9 );
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
var Normal = require( '@stdlib/stats/base/dists/normal/ctor' );

var normal = new Normal( 2.0, 4.0 );

var mean = normal.mean;
// returns 2.0

var median = normal.median;
// returns 2.0

var s2 = normal.variance;
// returns 16.0

var y = normal.cdf( 0.8 );
// returns ~0.382
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

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

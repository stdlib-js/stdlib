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

# Gamma

> Gamma distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Gamma = require( '@stdlib/stats/base/dists/gamma/ctor' );
```

#### Gamma( \[alpha, beta] )

Returns a [gamma][gamma-distribution] distribution object.

```javascript
var gamma = new Gamma();

var mode = gamma.mode;
// returns 0.0
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (shape parameter) and `beta` (rate parameter), provide the corresponding arguments.

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var mu = gamma.mean;
// returns 0.5
```

* * *

## gamma

A [gamma][gamma-distribution] distribution object has the following properties and methods...

### Writable Properties

#### gamma.alpha

Shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var gamma = new Gamma();

var alpha = gamma.alpha;
// returns 1.0

gamma.alpha = 3.0;

alpha = gamma.alpha;
// returns 3.0
```

#### gamma.beta

Rate parameter of the distribution. `beta` **must** be a positive number.

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var b = gamma.beta;
// returns 4.0

gamma.beta = 3.0;

b = gamma.beta;
// returns 3.0
```

* * *

### Computed Properties

#### Gamma.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var entropy = gamma.entropy;
// returns ~-0.462
```

#### Gamma.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var kurtosis = gamma.kurtosis;
// returns 1.5
```

#### Gamma.prototype.mean

Returns the [expected value][expected-value].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var mu = gamma.mean;
// returns ~0.333
```

#### Gamma.prototype.mode

Returns the [mode][mode].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var mode = gamma.mode;
// returns 0.25
```

#### Gamma.prototype.skewness

Returns the [skewness][skewness].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var skewness = gamma.skewness;
// returns 1.0
```

#### Gamma.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var s = gamma.stdev;
// returns ~0.167
```

#### Gamma.prototype.variance

Returns the [variance][variance].

```javascript
var gamma = new Gamma( 4.0, 12.0 );

var s2 = gamma.variance;
// returns ~0.028
```

* * *

### Methods

#### Gamma.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var y = gamma.cdf( 0.5 );
// returns ~0.594
```

#### Gamma.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var y = gamma.logcdf( 0.5 );
// returns ~-0.521
```

#### Gamma.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var y = gamma.logpdf( 0.8 );
// returns ~-0.651
```

#### Gamma.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var y = gamma.mgf( 0.5 );
// returns ~1.306
```

#### Gamma.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var y = gamma.pdf( 0.8 );
// returns ~0.522
```

#### Gamma.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var gamma = new Gamma( 2.0, 4.0 );

var y = gamma.quantile( 0.5 );
// returns ~0.42

y = gamma.quantile( 1.9 );
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
var Gamma = require( '@stdlib/stats/base/dists/gamma/ctor' );

var gamma = new Gamma( 2.0, 4.0 );

var mu = gamma.mean;
// returns 0.5

var mode = gamma.mode;
// returns 0.25

var s2 = gamma.variance;
// returns 0.125

var y = gamma.cdf( 0.8 );
// returns ~0.829
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

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

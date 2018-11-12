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

# Pareto (Type I)

> [Pareto (Type I)][pareto-distribution] distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Pareto1 = require( '@stdlib/stats/base/dists/pareto-type1/ctor' );
```

#### Pareto1( \[alpha, beta] )

Returns a [Pareto (Type I)][pareto-distribution] distribution object.

```javascript
var pareto1 = new Pareto1();

var mu = pareto1.mean;
// returns Infinity
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (shape parameter) and `beta` (scale parameter), provide the corresponding arguments.

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var mu = pareto1.mean;
// returns 8.0
```

* * *

## pareto1

A [Pareto (Type I)][pareto-distribution] distribution object has the following properties and methods...

### Writable Properties

#### pareto1.alpha

Shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var pareto1 = new Pareto1();

var alpha = pareto1.alpha;
// returns 1.0

pareto1.alpha = 3.0;

alpha = pareto1.alpha;
// returns 3.0
```

#### pareto1.beta

Scale parameter of the distribution. `beta` **must** be a positive number.

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var beta = pareto1.beta;
// returns 4.0

pareto1.beta = 3.0;

beta = pareto1.beta;
// returns 3.0
```

* * *

### Computed Properties

#### Pareto1.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var entropy = pareto1.entropy;
// returns ~2.349
```

#### Pareto1.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var pareto1 = new Pareto1( 6.0, 12.0 );

var kurtosis = pareto1.kurtosis;
// returns ~35.667
```

#### Pareto1.prototype.mean

Returns the [expected value][expected-value].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var mu = pareto1.mean;
// returns 16.0
```

#### Pareto1.prototype.median

Returns the [median][median].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var median = pareto1.median;
// returns ~14.27
```

#### Pareto1.prototype.mode

Returns the [mode][mode].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var mode = pareto1.mode;
// returns 12.0
```

#### Pareto1.prototype.skewness

Returns the [skewness][skewness].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var skewness = pareto1.skewness;
// returns ~7.071
```

#### Pareto1.prototype.variance

Returns the [variance][variance].

```javascript
var pareto1 = new Pareto1( 4.0, 12.0 );

var s2 = pareto1.variance;
// returns 32.0
```

* * *

### Methods

#### Pareto1.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.cdf( 3.5 );
// returns 0.0
```

#### Pareto1.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.logcdf( 3.5 );
// returns -Infinity
```

#### Pareto1.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.logpdf( 5.0 );
// returns ~-1.363
```

#### Pareto1.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.pdf( 5.0 );
// returns ~0.256
```

#### Pareto1.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var pareto1 = new Pareto1( 2.0, 4.0 );

var y = pareto1.quantile( 0.5 );
// returns ~5.657

y = pareto1.quantile( 1.9 );
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
var Pareto1 = require( '@stdlib/stats/base/dists/pareto-type1/ctor' );

var pareto1 = new Pareto1( 2.0, 4.0 );

var mu = pareto1.mean;
// returns 8.0

var median = pareto1.median;
// returns ~5.657

var s2 = pareto1.variance;
// returns Infinity

var y = pareto1.cdf( 2.0 );
// returns 0.0
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

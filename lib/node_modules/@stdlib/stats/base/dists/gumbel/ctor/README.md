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

# Gumbel

> Gumbel distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Gumbel = require( '@stdlib/stats/base/dists/gumbel/ctor' );
```

#### Gumbel( \[mu, beta] )

Returns a [Gumbel][gumbel-distribution] distribution object.

```javascript
var gumbel = new Gumbel();

var mean = gumbel.mean;
// returns ~0.577
```

By default, `mu = 0.0` and `beta = 1.0`. To create a distribution having a different `mu` (location parameter) and `beta` (scale parameter), provide the corresponding arguments.

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var mean = gumbel.mean;
// returns ~4.309
```

* * *

## gumbel

A [Gumbel][gumbel-distribution] distribution object has the following properties and methods...

### Writable Properties

#### gumbel.mu

Location parameter of the distribution.

```javascript
var gumbel = new Gumbel();

var mu = gumbel.mu;
// returns 0.0

gumbel.mu = 3.0;

mu = gumbel.mu;
// returns 3.0
```

#### gumbel.beta

Scale parameter of the distribution. `beta` **must** be a positive number.

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var beta = gumbel.beta;
// returns 4.0

gumbel.beta = 3.0;

beta = gumbel.beta;
// returns 3.0
```

* * *

### Computed Properties

#### Gumbel.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var entropy = gumbel.entropy;
// returns ~4.062
```

#### Gumbel.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var kurtosis = gumbel.kurtosis;
// returns 2.4
```

#### Gumbel.prototype.mean

Returns the [expected value][expected-value].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var mu = gumbel.mean;
// returns ~10.927
```

#### Gumbel.prototype.median

Returns the [median][median].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var median = gumbel.median;
// returns ~8.398
```

#### Gumbel.prototype.mode

Returns the [mode][mode].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var mode = gumbel.mode;
// returns 4.0
```

#### Gumbel.prototype.skewness

Returns the [skewness][skewness].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var skewness = gumbel.skewness;
// returns ~1.14
```

#### Gumbel.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var s = gumbel.stdev;
// returns ~15.391
```

#### Gumbel.prototype.variance

Returns the [variance][variance].

```javascript
var gumbel = new Gumbel( 4.0, 12.0 );

var s2 = gumbel.variance;
// returns ~236.871
```

* * *

### Methods

#### Gumbel.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var y = gumbel.cdf( 0.5 );
// returns ~0.233
```

#### Gumbel.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var y = gumbel.logcdf( 2.0 );
// returns -1.0
```

#### Gumbel.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var y = gumbel.logpdf( 0.8 );
// returns ~-2.436
```

#### Gumbel.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var y = gumbel.mgf( 0.1 );
// returns ~1.819
```

#### Gumbel.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var y = gumbel.pdf( 2.0 );
// returns ~0.092
```

#### Gumbel.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var gumbel = new Gumbel( 2.0, 4.0 );

var y = gumbel.quantile( 0.5 );
// returns ~3.466

y = gumbel.quantile( 1.9 );
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
var Gumbel = require( '@stdlib/stats/base/dists/gumbel/ctor' );

var gumbel = new Gumbel( 2.0, 4.0 );

var mean = gumbel.mean;
// returns ~4.309

var median = gumbel.median;
// returns ~3.466

var s2 = gumbel.variance;
// returns ~26.319

var y = gumbel.cdf( 0.8 );
// returns ~0.259
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

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

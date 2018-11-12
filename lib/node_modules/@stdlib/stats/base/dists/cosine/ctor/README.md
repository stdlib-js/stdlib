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

# Cosine

> Raised cosine distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Cosine = require( '@stdlib/stats/base/dists/cosine/ctor' );
```

#### Cosine( \[mu, s] )

Returns a [raised cosine][cosine-distribution] distribution object.

```javascript
var cosine = new Cosine();

var mu = cosine.mean;
// returns 0.0
```

By default, `mu = 0.0` and `s = 1.0`. To create a distribution having a different `mu` (location parameter) and `s` (scale parameter), provide the corresponding arguments.

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var mu = cosine.mean;
// returns 2.0
```

* * *

## cosine

A [raised cosine][cosine-distribution] distribution object has the following properties and methods...

### Writable Properties

#### cosine.mu

Location parameter of the distribution.

```javascript
var cosine = new Cosine();

var mu = cosine.mu;
// returns 0.0

cosine.mu = 3.0;

mu = cosine.mu;
// returns 3.0
```

#### cosine.s

Scale parameter of the distribution. `s` **must** be a positive number.

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var s = cosine.s;
// returns 4.0

cosine.s = 3.0;

s = cosine.s;
// returns 3.0
```

* * *

### Computed Properties

#### Cosine.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var kurtosis = cosine.kurtosis;
// returns ~-0.594
```

#### Cosine.prototype.mean

Returns the [expected value][expected-value].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var mu = cosine.mean;
// returns 4.0
```

#### Cosine.prototype.median

Returns the [median][median].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var median = cosine.median;
// returns 4.0
```

#### Cosine.prototype.mode

Returns the [mode][mode].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var mode = cosine.mode;
// returns 4.0
```

#### Cosine.prototype.skewness

Returns the [skewness][skewness].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var skewness = cosine.skewness;
// returns 0.0
```

#### Cosine.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var s = cosine.stdev;
// returns ~4.338
```

#### Cosine.prototype.variance

Returns the [variance][variance].

```javascript
var cosine = new Cosine( 4.0, 12.0 );

var s2 = cosine.variance;
// returns ~18.819
```

* * *

### Methods

#### Cosine.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.cdf( 0.5 );
// returns ~0.165
```

#### Cosine.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.logcdf( 0.5 );
// returns ~-1.799
```

#### Cosine.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.logpdf( 0.8 );
// returns ~-1.617
```

#### Cosine.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.mgf( 0.2 );
// returns ~1.555
```

#### Cosine.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.pdf( 2.0 );
// returns 0.25
```

#### Cosine.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var cosine = new Cosine( 2.0, 4.0 );

var y = cosine.quantile( 0.9 );
// returns ~3.929

y = cosine.quantile( 1.9 );
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
var Cosine = require( '@stdlib/stats/base/dists/cosine/ctor' );

var cosine = new Cosine( 2.0, 4.0 );

var mean = cosine.mean;
// returns 2.0

var median = cosine.median;
// returns 2.0

var s2 = cosine.variance;
// returns ~2.091

var y = cosine.cdf( 0.8 );
// returns ~0.221
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

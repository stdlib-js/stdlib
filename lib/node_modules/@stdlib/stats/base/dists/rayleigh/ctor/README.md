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

# Rayleigh

> Rayleigh distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Rayleigh = require( '@stdlib/stats/base/dists/rayleigh/ctor' );
```

#### Rayleigh( \[sigma] )

Returns an [Rayleigh][rayleigh-distribution] distribution object.

```javascript
var rayleigh = new Rayleigh();

var mu = rayleigh.mean;
// returns ~1.253
```

By default, `sigma = 1.0`. To create a distribution having a different scale parameter `sigma`, provide a parameter value.

```javascript
var rayleigh = new Rayleigh( 4.0 );

var mu = rayleigh.mean;
// returns ~5.013
```

* * *

## rayleigh

A [Rayleigh][rayleigh-distribution] distribution object has the following properties and methods...

### Writable Properties

#### rayleigh.sigma

Scale parameter of the distribution. `sigma` **must** be a positive number.

```javascript
var rayleigh = new Rayleigh( 2.0 );

var sigma = rayleigh.sigma;
// returns 2.0

rayleigh.sigma = 3.0;

sigma = rayleigh.sigma;
// returns 3.0
```

* * *

### Computed Properties

#### Rayleigh.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var entropy = rayleigh.entropy;
// returns ~2.328
```

#### Rayleigh.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var kurtosis = rayleigh.kurtosis;
// returns ~0.245
```

#### Rayleigh.prototype.mean

Returns the [median][expected-value].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var mu = rayleigh.mean;
// returns ~5.013
```

#### Rayleigh.prototype.median

Returns the [median][median].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var median = rayleigh.median;
// returns ~4.71
```

#### Rayleigh.prototype.mode

Returns the [mode][mode].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var mode = rayleigh.mode;
// returns 4.0
```

#### Rayleigh.prototype.skewness

Returns the [skewness][skewness].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var skewness = rayleigh.skewness;
// returns ~0.631
```

#### Rayleigh.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var s = rayleigh.stdev;
// returns ~2.62
```

#### Rayleigh.prototype.variance

Returns the [variance][variance].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var s2 = rayleigh.variance;
// returns ~6.867
```

* * *

### Methods

#### Rayleigh.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.cdf( 1.5 );
// returns ~0.245
```

#### Rayleigh.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.logcdf( 1.5 );
// returns ~-1.406
```

#### Rayleigh.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.logpdf( 0.8 );
// returns ~-1.689
```

#### Rayleigh.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.mgf( 0.5 );
// returns ~5.586
```

#### Rayleigh.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.pdf( 0.8 );
// returns ~0.185
```

#### Rayleigh.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.quantile( 0.5 );
// returns ~2.355

y = rayleigh.quantile( 1.9 );
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
var Rayleigh = require( '@stdlib/stats/base/dists/rayleigh/ctor' );

var rayleigh = new Rayleigh( 2.0, 4.0 );

var mu = rayleigh.mean;
// returns ~2.507

var mode = rayleigh.mode;
// returns 2.0

var s2 = rayleigh.variance;
// returns ~1.717

var y = rayleigh.cdf( 0.8 );
// returns ~0.077
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

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

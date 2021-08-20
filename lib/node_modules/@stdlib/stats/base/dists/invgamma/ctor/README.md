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

# Inverse Gamma

> Inverse gamma distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var InvGamma = require( '@stdlib/stats/base/dists/invgamma/ctor' );
```

#### InvGamma( \[alpha, beta] )

Returns an [inverse gamma][invgamma-distribution] distribution object.

```javascript
var invgamma = new InvGamma();

var mode = invgamma.mode;
// returns 0.5
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (shape parameter) and `beta` (rate parameter), provide the corresponding arguments.

```javascript
var invgamma = new InvGamma( 2.0, 4.0 );

var mu = invgamma.mean;
// returns 4.0
```

* * *

## invgamma

An [inverse gamma][invgamma-distribution] distribution object has the following properties and methods...

### Writable Properties

#### invgamma.alpha

Shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var invgamma = new InvGamma();

var alpha = invgamma.alpha;
// returns 1.0

invgamma.alpha = 3.0;

alpha = invgamma.alpha;
// returns 3.0
```

#### invgamma.beta

Rate parameter of the distribution. `beta` **must** be a positive number.

```javascript
var invgamma = new InvGamma( 2.0, 4.0 );

var b = invgamma.beta;
// returns 4.0

invgamma.beta = 3.0;

b = invgamma.beta;
// returns 3.0
```

* * *

### Computed Properties

#### InvGamma.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var invgamma = new InvGamma( 6.0, 12.0 );

var kurtosis = invgamma.kurtosis;
// returns 19.0
```

#### InvGamma.prototype.mean

Returns the [expected value][expected-value].

```javascript
var invgamma = new InvGamma( 4.0, 12.0 );

var mu = invgamma.mean;
// returns 4.0
```

#### InvGamma.prototype.mode

Returns the [mode][mode].

```javascript
var invgamma = new InvGamma( 4.0, 12.0 );

var mode = invgamma.mode;
// returns 2.4
```

#### InvGamma.prototype.skewness

Returns the [skewness][skewness].

```javascript
var invgamma = new InvGamma( 4.0, 12.0 );

var skewness = invgamma.skewness;
// returns ~5.657
```

#### InvGamma.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var invgamma = new InvGamma( 4.0, 12.0 );

var s = invgamma.stdev;
// returns ~2.828
```

#### InvGamma.prototype.variance

Returns the [variance][variance].

```javascript
var invgamma = new InvGamma( 4.0, 12.0 );

var s2 = invgamma.variance;
// returns 8.0
```

* * *

### Methods

#### InvGamma.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var invgamma = new InvGamma( 2.0, 4.0 );

var y = invgamma.cdf( 0.5 );
// returns ~0.003
```

#### InvGamma.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var invgamma = new InvGamma( 2.0, 4.0 );

var y = invgamma.logpdf( 0.8 );
// returns ~-1.558
```

#### InvGamma.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var invgamma = new InvGamma( 2.0, 4.0 );

var y = invgamma.pdf( 0.8 );
// returns ~0.211
```

#### InvGamma.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var invgamma = new InvGamma( 2.0, 4.0 );

var y = invgamma.quantile( 0.5 );
// returns ~2.383

y = invgamma.quantile( 1.9 );
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
var InvGamma = require( '@stdlib/stats/base/dists/invgamma/ctor' );

var invgamma = new InvGamma( 3.0, 4.0 );

var mu = invgamma.mean;
// returns 2.0

var mode = invgamma.mode;
// returns 1.0

var s2 = invgamma.variance;
// returns 4.0

var y = invgamma.cdf( 0.8 );
// returns ~0.125
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[invgamma-distribution]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

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

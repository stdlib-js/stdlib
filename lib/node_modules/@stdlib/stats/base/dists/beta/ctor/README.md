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

# Beta

> Beta distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Beta = require( '@stdlib/stats/base/dists/beta/ctor' );
```

#### Beta( \[alpha, beta] )

Returns a [beta][beta-distribution] distribution object.

```javascript
var beta = new Beta();

var mu = beta.mean;
// returns 0.5
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (first shape parameter) and `beta` (second shape parameter), provide the corresponding arguments.

```javascript
var beta = new Beta( 2.0, 4.0 );

var mu = beta.mean;
// returns ~0.333
```

* * *

## beta

A [beta][beta-distribution] distribution object has the following properties and methods...

### Writable Properties

#### beta.alpha

First shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var beta = new Beta();

var alpha = beta.alpha;
// returns 1.0

beta.alpha = 3.0;

alpha = beta.alpha;
// returns 3.0
```

#### beta.beta

Second shape parameter of the distribution. `beta` **must** be a positive number.

```javascript
var beta = new Beta( 2.0, 4.0 );

var b = beta.beta;
// returns 4.0

beta.beta = 3.0;

b = beta.beta;
// returns 3.0
```

* * *

### Computed Properties

#### Beta.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var beta = new Beta( 4.0, 12.0 );

var entropy = beta.entropy;
// returns ~-0.869
```

#### Beta.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var beta = new Beta( 4.0, 12.0 );

var kurtosis = beta.kurtosis;
// returns ~0.082
```

#### Beta.prototype.mean

Returns the [expected value][expected-value].

```javascript
var beta = new Beta( 4.0, 12.0 );

var mu = beta.mean;
// returns 0.25
```

#### Beta.prototype.median

Returns the [median][median].

```javascript
var beta = new Beta( 4.0, 12.0 );

var median = beta.median;
// returns ~0.239
```

#### Beta.prototype.mode

Returns the [mode][mode].

```javascript
var beta = new Beta( 4.0, 12.0 );

var mode = beta.mode;
// returns ~0.214
```

#### Beta.prototype.skewness

Returns the [skewness][skewness].

```javascript
var beta = new Beta( 4.0, 12.0 );

var skewness = beta.skewness;
// returns ~0.529
```

#### Beta.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var beta = new Beta( 4.0, 12.0 );

var s = beta.stdev;
// returns ~0.105
```

#### Beta.prototype.variance

Returns the [variance][variance].

```javascript
var beta = new Beta( 4.0, 12.0 );

var s2 = beta.variance;
// returns ~0.011
```

* * *

### Methods

#### Beta.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.cdf( 0.5 );
// returns ~0.813
```

#### Beta.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.logcdf( 0.5 );
// returns ~-0.208
```

#### Beta.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.logpdf( 0.8 );
// returns ~-2.0557
```

#### Beta.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.mgf( 0.5 );
// returns ~1.186
```

#### Beta.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.pdf( 0.8 );
// returns ~0.128
```

#### Beta.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.quantile( 0.5 );
// returns ~0.314

y = beta.quantile( 1.9 );
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
var Beta = require( '@stdlib/stats/base/dists/beta/ctor' );

var beta = new Beta( 2.0, 4.0 );

var mu = beta.mean;
// returns ~0.333

var median = beta.median;
// returns ~0.314

var s2 = beta.variance;
// returns ~0.032

var y = beta.cdf( 0.8 );
// returns ~0.993
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

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

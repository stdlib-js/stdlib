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

# ChiSquare

> Chi-squared distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ChiSquare = require( '@stdlib/stats/base/dists/chisquare/ctor' );
```

#### ChiSquare( \[k] )

Returns an [chi-squared][chisquare-distribution] distribution object.

```javascript
var chisquare = new ChiSquare();

var mu = chisquare.mean;
// returns 1.0
```

By default, `k = 1.0`. To create a distribution having a different degrees of freedom `k`, provide a parameter value.

```javascript
var chisquare = new ChiSquare( 4.0 );

var mu = chisquare.mean;
// returns 4.0
```

* * *

## chisquare

A [chi-squared][chisquare-distribution] distribution object has the following properties and methods...

### Writable Properties

#### chisquare.k

Rate parameter of the distribution. `k` **must** be a positive number.

```javascript
var chisquare = new ChiSquare( 2.0 );

var k = chisquare.k;
// returns 2.0

chisquare.k = 3.0;

k = chisquare.k;
// returns 3.0
```

* * *

### Computed Properties

#### ChiSquare.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var chisquare = new ChiSquare( 4.0 );

var entropy = chisquare.entropy;
// returns ~2.27
```

#### ChiSquare.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var chisquare = new ChiSquare( 4.0 );

var kurtosis = chisquare.kurtosis;
// returns 3.0
```

#### ChiSquare.prototype.mean

Returns the [expected value][expected-value].

```javascript
var chisquare = new ChiSquare( 4.0 );

var mu = chisquare.mean;
// returns 4.0
```

#### ChiSquare.prototype.median

Returns the [median][median].

```javascript
var chisquare = new ChiSquare( 4.0 );

var median = chisquare.median;
// returns ~3.357
```

#### ChiSquare.prototype.mode

Returns the [mode][mode].

```javascript
var chisquare = new ChiSquare( 4.0 );

var mode = chisquare.mode;
// returns 2.0
```

#### ChiSquare.prototype.skewness

Returns the [skewness][skewness].

```javascript
var chisquare = new ChiSquare( 4.0 );

var skewness = chisquare.skewness;
// returns ~1.414
```

#### ChiSquare.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var chisquare = new ChiSquare( 4.0 );

var s = chisquare.stdev;
// returns ~2.828
```

#### ChiSquare.prototype.variance

Returns the [variance][variance].

```javascript
var chisquare = new ChiSquare( 4.0 );

var s2 = chisquare.variance;
// returns 8.0
```

* * *

### Methods

#### ChiSquare.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var chisquare = new ChiSquare( 2.0 );

var y = chisquare.cdf( 0.5 );
// returns ~0.221
```

#### ChiSquare.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var chisquare = new ChiSquare( 2.0 );

var y = chisquare.mgf( 0.2 );
// returns ~1.667
```

#### ChiSquare.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var chisquare = new ChiSquare( 2.0 );

var y = chisquare.pdf( 0.8 );
// returns ~0.335
```

#### ChiSquare.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var chisquare = new ChiSquare( 2.0 );

var y = chisquare.quantile( 0.5 );
// returns ~1.386

y = chisquare.quantile( 1.9 );
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
var ChiSquare = require( '@stdlib/stats/base/dists/chisquare/ctor' );

var chisquare = new ChiSquare( 2.0 );

var mu = chisquare.mean;
// returns 2.0

var mode = chisquare.mode;
// returns 0.0

var s2 = chisquare.variance;
// returns 4.0

var y = chisquare.cdf( 0.8 );
// returns ~0.33
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

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

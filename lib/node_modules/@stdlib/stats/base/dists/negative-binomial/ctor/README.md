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

# Negative Binomial

> Negative binomial distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var NegativeBinomial = require( '@stdlib/stats/base/dists/negative-binomial/ctor' );
```

#### NegativeBinomial( \[r, p] )

Returns a [negative binomial][negative-binomial-distribution] distribution object.

```javascript
var nbinomial = new NegativeBinomial();

var mu = nbinomial.mean;
// returns 1.0
```

By default, `r = 1.0` and `p = 0.5`. To create a distribution having a different `r` (number of trials until experiment is stopped) and `p` (success probability), provide the corresponding arguments.

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var mu = nbinomial.mean;
// returns 16.0
```

* * *

## nbinomial

A [negative binomial][negative-binomial-distribution] distribution object has the following properties and methods...

### Writable Properties

#### nbinomial.r

Number of trials of the distribution. `r` **must** be a positive number.

```javascript
var nbinomial = new NegativeBinomial();

var r = nbinomial.r;
// returns 1.0

nbinomial.r = 4.5;

r = nbinomial.r;
// returns 4.5
```

#### nbinomial.p

Success probability of the distribution. `p` **must** be a number between 0 and 1.

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var p = nbinomial.p;
// returns 0.2

nbinomial.p = 0.7;

p = nbinomial.p;
// returns 0.7
```

* * *

### Computed Properties

#### NegativeBinomial.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var nbinomial = new NegativeBinomial( 12.0, 0.4 );

var kurtosis = nbinomial.kurtosis;
// returns ~0.522
```

#### NegativeBinomial.prototype.mean

Returns the [expected value][expected-value].

```javascript
var nbinomial = new NegativeBinomial( 12.0, 0.4 );

var mu = nbinomial.mean;
// returns ~18.0
```

#### NegativeBinomial.prototype.mode

Returns the [mode][mode].

```javascript
var nbinomial = new NegativeBinomial( 12.0, 0.4 );

var mode = nbinomial.mode;
// returns 16.0
```

#### NegativeBinomial.prototype.skewness

Returns the [skewness][skewness].

```javascript
var nbinomial = new NegativeBinomial( 12.0, 0.4 );

var skewness = nbinomial.skewness;
// returns ~0.596
```

#### NegativeBinomial.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var nbinomial = new NegativeBinomial( 12.0, 0.4 );

var s = nbinomial.stdev;
// returns ~6.708
```

#### NegativeBinomial.prototype.variance

Returns the [variance][variance].

```javascript
var nbinomial = new NegativeBinomial( 12.0, 0.4 );

var s2 = nbinomial.variance;
// returns ~45.0
```

* * *

### Methods

#### NegativeBinomial.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var y = nbinomial.cdf( 3.5 );
// returns ~0.033
```

#### NegativeBinomial.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var y = nbinomial.logpmf( 4.0 );
// returns ~-3.775
```

#### NegativeBinomial.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var y = nbinomial.mgf( 0.1 );
// returns ~1.66
```

#### NegativeBinomial.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var y = nbinomial.pmf( 4.0 );
// returns ~0.023
```

#### NegativeBinomial.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var nbinomial = new NegativeBinomial( 4.0, 0.2 );

var y = nbinomial.quantile( 0.5 );
// returns 15.0

y = nbinomial.quantile( 1.9 );
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
var NegativeBinomial = require( '@stdlib/stats/base/dists/negative-binomial/ctor' );

var nbinomial = new NegativeBinomial( 10.0, 0.4 );

var mu = nbinomial.mean;
// returns 15.0

var mode = nbinomial.mode;
// returns 13.0

var s2 = nbinomial.variance;
// returns ~37.5

var y = nbinomial.cdf( 8.0 );
// returns ~0.135
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

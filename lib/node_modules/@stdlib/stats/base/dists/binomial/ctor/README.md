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

# Binomial

> Binomial distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Binomial = require( '@stdlib/stats/base/dists/binomial/ctor' );
```

#### Binomial( \[n, p] )

Returns a [binomial][binomial-distribution] distribution object.

```javascript
var binomial = new Binomial();

var mu = binomial.mean;
// returns 0.5
```

By default, `n = 1` and `p = 0.5`, which corresponds to a [Bernoulli][bernoulli-distribution] distribution. To create a distribution having a different `n` (number of trials) and `p` (success probability), provide the corresponding arguments.

```javascript
var binomial = new Binomial( 4, 0.2 );

var mu = binomial.mean;
// returns 0.8
```

* * *

## binomial

A [binomial][binomial-distribution] distribution object has the following properties and methods...

### Writable Properties

#### binomial.n

Number of trials of the distribution. `n` **must** be a positive integer.

```javascript
var binomial = new Binomial();

var n = binomial.n;
// returns 1.0

binomial.n = 4;

n = binomial.n;
// returns 4.0
```

#### binomial.p

Success probability of the distribution. `p` **must** be a number between 0 and 1.

```javascript
var binomial = new Binomial( 4, 0.2 );

var p = binomial.p;
// returns 0.2

binomial.p = 0.7;

p = binomial.p;
// returns 0.7
```

* * *

### Computed Properties

#### Binomial.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var binomial = new Binomial( 12, 0.4 );

var kurtosis = binomial.kurtosis;
// returns ~-0.153
```

#### Binomial.prototype.mean

Returns the [expected value][expected-value].

```javascript
var binomial = new Binomial( 12, 0.4 );

var mu = binomial.mean;
// returns ~4.8
```

#### Binomial.prototype.median

Returns the [median][median].

```javascript
var binomial = new Binomial( 12, 0.4 );

var median = binomial.median;
// returns 5.0
```

#### Binomial.prototype.mode

Returns the [mode][mode].

```javascript
var binomial = new Binomial( 12, 0.4 );

var mode = binomial.mode;
// returns 5.0
```

#### Binomial.prototype.skewness

Returns the [skewness][skewness].

```javascript
var binomial = new Binomial( 12, 0.4 );

var skewness = binomial.skewness;
// returns ~0.118
```

#### Binomial.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var binomial = new Binomial( 12, 0.4 );

var s = binomial.stdev;
// returns ~1.697
```

#### Binomial.prototype.variance

Returns the [variance][variance].

```javascript
var binomial = new Binomial( 12, 0.4 );

var s2 = binomial.variance;
// returns ~2.88
```

* * *

### Methods

#### Binomial.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.cdf( 0.5 );
// returns ~0.41
```

#### Binomial.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.logpmf( 2.0 );
// returns ~-1.873
```

#### Binomial.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.mgf( 0.5 );
// returns ~1.629
```

#### Binomial.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.pmf( 2.0 );
// returns ~0.154
```

#### Binomial.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.quantile( 0.5 );
// returns 1.0

y = binomial.quantile( 1.9 );
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
var Binomial = require( '@stdlib/stats/base/dists/binomial/ctor' );

var binomial = new Binomial( 10, 0.4 );

var mu = binomial.mean;
// returns 4.0

var mode = binomial.mode;
// returns 4.0

var s2 = binomial.variance;
// returns 2.4

var y = binomial.cdf( 0.8 );
// returns ~0.006
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

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

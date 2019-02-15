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

# Hypergeometric

> Hypergeometric distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Hypergeometric = require( '@stdlib/stats/base/dists/hypergeometric/ctor' );
```

#### Hypergeometric( N, K, n )

Returns a [hypergeometric][hypergeometric-distribution] distribution object with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var mu = hypergeometric.mean;
// returns 3.75
```

* * *

## hypergeometric

A [hypergeometric][hypergeometric-distribution] distribution object has the following properties and methods...

### Writable Properties

#### hypergeometric.N

Population size of the distribution. `N` **must** be a nonnegative integer that is both larger than or equal to `K` and `n`.

```javascript
var hypergeometric = new Hypergeometric( 100, 50, 20 );

var N = hypergeometric.N;
// returns 100.0

hypergeometric.N = 60;

N = hypergeometric.N;
// returns 60.0
```

#### hypergeometric.K

Subpopulation size of the distribution. `K` **must** be a nonnegative integer that is smaller than or equal to `N`.

```javascript
var hypergeometric = new Hypergeometric( 100, 50, 20 );

var K = hypergeometric.K;
// returns 50.0

hypergeometric.K = 30;

K = hypergeometric.K;
// returns 30.0
```

<!--lint disable no-duplicate-headings-in-section -->

#### hypergeometric.n

Number of draws of the distribution. `n` **must** be a nonnegative integer that is smaller than or equal to `N`.

```javascript
var hypergeometric = new Hypergeometric( 100, 50, 20 );

var n = hypergeometric.n;
// returns 20.0

hypergeometric.n = 80;

n = hypergeometric.n;
// returns 80.0
```

* * *

### Computed Properties

#### Hypergeometric.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var kurtosis = hypergeometric.kurtosis;
// returns ~-0.276
```

#### Hypergeometric.prototype.mean

Returns the [expected value][expected-value].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var mu = hypergeometric.mean;
// returns ~3.75
```

#### Hypergeometric.prototype.mode

Returns the [mode][mode].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var mode = hypergeometric.mode;
// returns 4.0
```

#### Hypergeometric.prototype.skewness

Returns the [skewness][skewness].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var skewness = hypergeometric.skewness;
// returns ~-0.323
```

#### Hypergeometric.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var s = hypergeometric.stdev;
// returns ~0.86
```

#### Hypergeometric.prototype.variance

Returns the [variance][variance].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var s2 = hypergeometric.variance;
// returns ~0.74
```

* * *

### Methods

#### Hypergeometric.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.cdf( 0.5 );
// returns ~0.214
```

#### Hypergeometric.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.logpmf( 2.0 );
// returns ~-1.54
```

#### Hypergeometric.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.pmf( 2.0 );
// returns ~0.214
```

#### Hypergeometric.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.quantile( 0.8 );
// returns 2.0

y = hypergeometric.quantile( 1.9 );
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
var Hypergeometric = require( '@stdlib/stats/base/dists/hypergeometric/ctor' );

var hypergeometric = new Hypergeometric( 100, 50, 20 );

var mu = hypergeometric.mean;
// returns 10.0

var mode = hypergeometric.mode;
// returns 10.0

var s2 = hypergeometric.variance;
// returns ~4.04

var y = hypergeometric.cdf( 10.5 );
// returns ~0.598
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

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

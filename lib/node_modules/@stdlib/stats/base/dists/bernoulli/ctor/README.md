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

# Bernoulli

> Bernoulli distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Bernoulli = require( '@stdlib/stats/base/dists/bernoulli/ctor' );
```

#### Bernoulli( \[p] )

Returns a [Bernoulli][bernoulli-distribution] distribution object.

```javascript
var bernoulli = new Bernoulli();

var mean = bernoulli.mean;
// returns 0.5
```

By default, `p = 0.5`. To create a distribution having a different success probability `p`, provide a parameter value.

```javascript
var bernoulli = new Bernoulli( 0.2 );

var mean = bernoulli.mean;
// returns 0.2
```

* * *

## bernoulli

A [Bernoulli][bernoulli-distribution] distribution object has the following properties and methods...

### Writable Properties

#### bernoulli.p

Success probability of the distribution. `p` **must** be a probability.

```javascript
var bernoulli = new Bernoulli( 0.2 );

var p = bernoulli.p;
// returns 0.2

bernoulli.p = 0.3;

p = bernoulli.p;
// returns 0.3
```

* * *

### Computed Properties

#### Bernoulli.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var entropy = bernoulli.entropy;
// returns ~0.673
```

#### Bernoulli.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var kurtosis = bernoulli.kurtosis;
// returns ~-1.833
```

#### Bernoulli.prototype.mean

Returns the [median][expected-value].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var mu = bernoulli.mean;
// returns 0.4
```

#### Bernoulli.prototype.median

Returns the [median][median].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var median = bernoulli.median;
// returns 0.0
```

#### Bernoulli.prototype.mode

Returns the [mode][mode].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var mode = bernoulli.mode;
// returns 0.0
```

#### Bernoulli.prototype.skewness

Returns the [skewness][skewness].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var skewness = bernoulli.skewness;
// returns ~0.408
```

#### Bernoulli.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var s = bernoulli.stdev;
// returns ~0.49
```

#### Bernoulli.prototype.variance

Returns the [variance][variance].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var s2 = bernoulli.variance;
// returns 0.24
```

* * *

### Methods

#### Bernoulli.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.cdf( 0.5 );
// returns 0.8
```

#### Bernoulli.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.mgf( -3.0 );
// returns ~0.81
```

#### Bernoulli.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.pmf( 0.0 );
// returns 0.8

y = bernoulli.pmf( 1.0 );
// returns 0.2
```

#### Bernoulli.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.quantile( 0.5 );
// returns 0

y = bernoulli.quantile( 0.9 );
// returns 1
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
var Bernoulli = require( '@stdlib/stats/base/dists/bernoulli/ctor' );

var bernoulli = new Bernoulli( 0.5 );

var mu = bernoulli.mean;
// returns 0.5

var s2 = bernoulli.variance;
// returns 0.25

var y = bernoulli.cdf( 2.0 );
// returns 1.0
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

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

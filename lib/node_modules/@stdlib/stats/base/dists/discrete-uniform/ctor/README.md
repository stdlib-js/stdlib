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

# Discrete Uniform

> Discrete uniform distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var DiscreteUniform = require( '@stdlib/stats/base/dists/discrete-uniform/ctor' );
```

#### DiscreteUniform( \[a, b] )

Returns a [discrete uniform][discrete-uniform-distribution] distribution object.

```javascript
var discreteUniform = new DiscreteUniform();

var mu = discreteUniform.mean;
// returns 0.5
```

By default, `a = 0` and `b = 1`. To create a distribution having a different `a` (minimum support) and `b` (maximum support), provide the corresponding arguments.

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var mu = discreteUniform.mean;
// returns 3.0
```

* * *

## discreteUniform

A [discrete uniform][discrete-uniform-distribution] distribution object has the following properties and methods...

### Writable Properties

#### discreteUniform.a

Minimum support of the distribution. `a` **must** be an integer smaller than or equal to `b`.

```javascript
var discreteUniform = new DiscreteUniform( -2, 2 );

var a = discreteUniform.a;
// returns -2

discreteUniform.a = 0;

a = discreteUniform.a;
// returns 0
```

#### discreteUniform.b

Maximum support of the distribution. `b` **must** be an integer larger than or equal to `a`.

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var b = discreteUniform.b;
// returns 4

discreteUniform.b = 3;

b = discreteUniform.b;
// returns 3
```

* * *

### Computed Properties

#### DiscreteUniform.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var entropy = discreteUniform.entropy;
// returns ~2.197
```

#### DiscreteUniform.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var kurtosis = discreteUniform.kurtosis;
// returns -1.23
```

#### DiscreteUniform.prototype.mean

Returns the [expected value][expected-value].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var mu = discreteUniform.mean;
// returns 8.0
```

#### DiscreteUniform.prototype.median

Returns the [median][median].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var median = discreteUniform.median;
// returns 8.0
```

#### DiscreteUniform.prototype.skewness

Returns the [skewness][skewness].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var skewness = discreteUniform.skewness;
// returns 0.0
```

#### DiscreteUniform.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var s = discreteUniform.stdev;
// returns ~2.582
```

#### DiscreteUniform.prototype.variance

Returns the [variance][variance].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var s2 = discreteUniform.variance;
// returns ~6.667
```

* * *

### Methods

#### DiscreteUniform.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.cdf( 2.5 );
// returns ~0.333
```

#### DiscreteUniform.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.logcdf( 2.5 );
// returns ~-1.099
```

#### DiscreteUniform.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.logpmf( 4.0 );
// returns ~-1.099
```

#### DiscreteUniform.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.pmf( 3, 0 );
// returns ~0.333
```

#### DiscreteUniform.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.quantile( 0.5 );
// returns 3.0

y = discreteUniform.quantile( 1.9 );
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
var DiscreteUniform = require( '@stdlib/stats/base/dists/discrete-uniform/ctor' );

var discreteUniform = new DiscreteUniform( -2, 2 );

var mu = discreteUniform.mean;
// returns 0.0

var median = discreteUniform.median;
// returns 0.0

var s2 = discreteUniform.variance;
// returns 2.0

var y = discreteUniform.cdf( 2.5 );
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

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

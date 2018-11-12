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

# Student's T

> Student's t distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var T = require( '@stdlib/stats/base/dists/t/ctor' );
```

#### T( \[v] )

Returns a [Student's t][t-distribution] distribution object.

```javascript
var t = new T();

var mu = t.mean;
// returns NaN
```

By default, `v = 1.0`. To create a distribution having a different degrees of freedom `v`, provide a parameter value.

```javascript
var t = new T( 4.0 );

var mu = t.mean;
// returns 0.0
```

* * *

## t

A [Student's t][t-distribution] distribution object has the following properties and methods...

### Writable Properties

#### t.v

Degrees of freedom of the distribution. `v` **must** be a positive number.

```javascript
var t = new T( 2.0 );

var v = t.v;
// returns 2.0

t.v = 3.0;

v = t.v;
// returns 3.0
```

* * *

### Computed Properties

#### T.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var t = new T( 4.0 );

var entropy = t.entropy;
// returns ~1.682
```

#### T.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var t = new T( 4.0 );

var kurtosis = t.kurtosis;
// returns Infinity
```

#### T.prototype.mean

Returns the [expected value][expected-value].

```javascript
var t = new T( 4.0 );

var mu = t.mean;
// returns 0.0
```

#### T.prototype.median

Returns the [median][median].

```javascript
var t = new T( 4.0 );

var median = t.median;
// returns 0.0
```

#### T.prototype.mode

Returns the [mode][mode].

```javascript
var t = new T( 4.0 );

var mode = t.mode;
// returns 0.0
```

#### T.prototype.skewness

Returns the [skewness][skewness].

```javascript
var t = new T( 4.0 );

var skewness = t.skewness;
// returns 0.0
```

#### T.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var t = new T( 4.0 );

var s = t.stdev;
// returns ~1.414
```

#### T.prototype.variance

Returns the [variance][variance].

```javascript
var t = new T( 4.0 );

var s2 = t.variance;
// returns 2.0
```

* * *

### Methods

#### T.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var t = new T( 2.0 );

var y = t.cdf( 0.5 );
// returns ~0.667
```

#### T.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var t = new T( 2.0 );

var y = t.logcdf( 0.5 );
// returns ~-0.405
```

#### T.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var t = new T( 2.0 );

var y = t.logpdf( 0.8 );
// returns ~-1.456
```

#### T.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var t = new T( 2.0 );

var y = t.pdf( 0.8 );
// returns ~0.233
```

#### T.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var t = new T( 2.0 );

var y = t.quantile( 0.5 );
// returns 0.0

y = t.quantile( 1.9 );
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
var T = require( '@stdlib/stats/base/dists/t/ctor' );

var t = new T( 2.0 );

var mu = t.mean;
// returns 0.0

var mode = t.mode;
// returns 0.0

var s2 = t.variance;
// returns Infinity

var y = t.cdf( 0.8 );
// returns ~0.746
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

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

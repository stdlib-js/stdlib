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

# Uniform

> Uniform distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Uniform = require( '@stdlib/stats/base/dists/uniform/ctor' );
```

#### Uniform( \[a, b] )

Returns an [uniform][uniform-distribution] distribution object.

```javascript
var uniform = new Uniform();

var mu = uniform.mean;
// returns 0.5
```

By default, `a = 0.0` and `b = 1.0`. To create a distribution having a different `a` (minimum support) and `b` (maximum support), provide the corresponding arguments.

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var mu = uniform.mean;
// returns 3.0
```

* * *

## uniform

An [uniform][uniform-distribution] distribution object has the following properties and methods...

### Writable Properties

#### uniform.a

Minimum support of the distribution. `a` **must** be a number smaller than `b`.

```javascript
var uniform = new Uniform();

var a = uniform.a;
// returns 0.0

uniform.a = 0.5;

a = uniform.a;
// returns 0.5
```

#### uniform.b

Maximum support of the distribution. `b` **must** be a number larger than `a`.

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var b = uniform.b;
// returns 4.0

uniform.b = 3.0;

b = uniform.b;
// returns 3.0
```

* * *

### Computed Properties

#### Uniform.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var entropy = uniform.entropy;
// returns ~2.079
```

#### Uniform.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var kurtosis = uniform.kurtosis;
// returns -1.2
```

#### Uniform.prototype.mean

Returns the [expected value][expected-value].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var mu = uniform.mean;
// returns 8.0
```

#### Uniform.prototype.median

Returns the [median][median].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var median = uniform.median;
// returns 8.0
```

#### Uniform.prototype.skewness

Returns the [skewness][skewness].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var skewness = uniform.skewness;
// returns 0.0
```

#### Uniform.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var s = uniform.stdev;
// returns ~2.309
```

#### Uniform.prototype.variance

Returns the [variance][variance].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var s2 = uniform.variance;
// returns ~5.333
```

* * *

### Methods

#### Uniform.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.cdf( 2.5 );
// returns 0.25
```

#### Uniform.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.logcdf( 2.5 );
// returns ~-1.386
```

#### Uniform.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.logpdf( 2.5 );
// returns ~-0.693
```

#### Uniform.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.pdf( 2.5 );
// returns 0.5
```

#### Uniform.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.quantile( 0.5 );
// returns 3.0

y = uniform.quantile( 1.9 );
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
var Uniform = require( '@stdlib/stats/base/dists/uniform/ctor' );

var uniform = new Uniform( 2.0, 4.0 );

var mu = uniform.mean;
// returns 3.0

var median = uniform.median;
// returns 3.0

var s2 = uniform.variance;
// returns ~0.333

var y = uniform.cdf( 2.5 );
// returns 0.25
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

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

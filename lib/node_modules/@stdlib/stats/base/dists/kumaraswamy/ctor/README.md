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

# Kumaraswamy

> Kumaraswamy's double bounded distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Kumaraswamy = require( '@stdlib/stats/base/dists/kumaraswamy/ctor' );
```

#### Kumaraswamy( \[a, b] )

Returns a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution object.

```javascript
var kumaraswamy = new Kumaraswamy();

var mu = kumaraswamy.mean;
// returns 0.5
```

By default, `a = 1.0` and `b = 1.0`. To create a distribution having a different `a` (first shape parameter) and `b` (second shape parameter), provide the corresponding arguments.

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var mu = kumaraswamy.mean;
// returns ~0.406
```

* * *

## kumaraswamy

A [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution object has the following properties and methods...

### Writable Properties

#### kumaraswamy.a

First shape parameter of the distribution. `a` **must** be a positive number.

```javascript
var kumaraswamy = new Kumaraswamy();

var a = kumaraswamy.a;
// returns 1.0

kumaraswamy.a = 3.0;

a = kumaraswamy.a;
// returns 3.0
```

#### kumaraswamy.b

Second shape parameter of the distribution. `b` **must** be a positive number.

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var b = kumaraswamy.b;
// returns 4.0

kumaraswamy.b = 3.0;

b = kumaraswamy.b;
// returns 3.0
```

* * *

### Computed Properties

#### Kumaraswamy.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );

var kurtosis = kumaraswamy.kurtosis;
// returns ~2.704
```

#### Kumaraswamy.prototype.mean

Returns the [expected value][expected-value].

```javascript
var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );

var mu = kumaraswamy.mean;
// returns ~0.481
```

#### Kumaraswamy.prototype.mode

Returns the [mode][mode].

```javascript
var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );

var mode = kumaraswamy.mode;
// returns ~0.503
```

#### Kumaraswamy.prototype.skewness

Returns the [skewness][skewness].

```javascript
var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );

var skewness = kumaraswamy.skewness;
// returns ~-0.201
```

#### Kumaraswamy.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );

var s = kumaraswamy.stdev;
// returns ~0.13
```

#### Kumaraswamy.prototype.variance

Returns the [variance][variance].

```javascript
var kumaraswamy = new Kumaraswamy( 4.0, 12.0 );

var s2 = kumaraswamy.variance;
// returns ~0.017
```

* * *

### Methods

#### Kumaraswamy.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var y = kumaraswamy.cdf( 0.5 );
// returns ~0.684
```

#### Kumaraswamy.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var y = kumaraswamy.logcdf( 0.5 );
// returns ~-0.38
```

#### Kumaraswamy.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var y = kumaraswamy.logpdf( 0.8 );
// returns ~-1.209
```

#### Kumaraswamy.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var y = kumaraswamy.pdf( 0.8 );
// returns ~0.299
```

#### Kumaraswamy.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var y = kumaraswamy.quantile( 0.5 );
// returns ~0.399

y = kumaraswamy.quantile( 1.9 );
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
var Kumaraswamy = require( '@stdlib/stats/base/dists/kumaraswamy/ctor' );

var kumaraswamy = new Kumaraswamy( 2.0, 4.0 );

var mu = kumaraswamy.mean;
// returns ~0.406

var mode = kumaraswamy.mode;
// returns ~0.378

var s2 = kumaraswamy.variance;
// returns ~0.035

var y = kumaraswamy.cdf( 0.8 );
// returns ~0.983
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

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

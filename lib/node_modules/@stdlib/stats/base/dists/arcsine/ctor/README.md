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

# Arcsine

> Arcsine distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Arcsine = require( '@stdlib/stats/base/dists/arcsine/ctor' );
```

#### Arcsine( \[a, b] )

Returns an [arcsine][arcsine-distribution] distribution object.

```javascript
var arcsine = new Arcsine();

var mu = arcsine.mean;
// returns 0.5
```

By default, `a = 0.0` and `b = 1.0`. To create a distribution having a different `a` (minimum support) and `b` (maximum support), provide the corresponding arguments.

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var mu = arcsine.mean;
// returns 3.0
```

* * *

## arcsine

An [arcsine][arcsine-distribution] distribution object has the following properties and methods...

### Writable Properties

#### arcsine.a

Minimum support of the distribution. `a` **must** be a number less than `b`.

```javascript
var arcsine = new Arcsine();

var a = arcsine.a;
// returns 0.0

arcsine.a = 0.5;

a = arcsine.a;
// returns 0.5
```

#### arcsine.b

Maximum support of the distribution. `b` **must** be a number greater than `a`.

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var b = arcsine.b;
// returns 4.0

arcsine.b = 3.0;

b = arcsine.b;
// returns 3.0
```

* * *

### Computed Properties

#### Arcsine.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var entropy = arcsine.entropy;
// returns ~1.838
```

#### Arcsine.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var kurtosis = arcsine.kurtosis;
// returns -1.5
```

#### Arcsine.prototype.mean

Returns the [expected value][expected-value].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var mu = arcsine.mean;
// returns 8.0
```

#### Arcsine.prototype.median

Returns the [median][median].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var median = arcsine.median;
// returns 8.0
```

#### Arcsine.prototype.mode

Returns the [mode][mode].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var mode = arcsine.mode;
// returns 4.0
```

#### Arcsine.prototype.skewness

Returns the [skewness][skewness].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var skewness = arcsine.skewness;
// returns 0.0
```

#### Arcsine.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var s = arcsine.stdev;
// returns ~2.828
```

#### Arcsine.prototype.variance

Returns the [variance][variance].

```javascript
var arcsine = new Arcsine( 4.0, 12.0 );

var s2 = arcsine.variance;
// returns 8.0
```

* * *

### Methods

#### Arcsine.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var y = arcsine.cdf( 2.5 );
// returns ~0.333
```

#### Arcsine.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var y = arcsine.logcdf( 2.5 );
// returns ~-1.1
```

#### Arcsine.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var y = arcsine.logpdf( 2.5 );
// returns ~-1.0
```

#### Arcsine.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var y = arcsine.pdf( 2.5 );
// returns ~0.368
```

#### Arcsine.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var arcsine = new Arcsine( 2.0, 4.0 );

var y = arcsine.quantile( 0.5 );
// returns 3.0

y = arcsine.quantile( 1.9 );
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
var Arcsine = require( '@stdlib/stats/base/dists/arcsine/ctor' );

var arcsine = new Arcsine( 2.0, 4.0 );

var mu = arcsine.mean;
// returns 3.0

var median = arcsine.median;
// returns 3.0

var s2 = arcsine.variance;
// returns 0.5

var y = arcsine.cdf( 2.5 );
// returns ~0.333
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

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

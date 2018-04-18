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

# Triangular

> Triangular distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Triangular = require( '@stdlib/stats/base/dists/triangular/ctor' );
```

#### Triangular( \[a, b, c] )

Returns a [triangular][triangular-distribution] distribution object.

```javascript
var triangular = new Triangular();

var mu = triangular.mean;
// returns 0.5
```

By default, `a = 0.0`, `b = 1.0`, and `c = 0.5`. To create a distribution having a different `a` (minimum support), `b` (maximum support), and `c` (mode), provide the corresponding arguments.

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.5 );

var mu = triangular.mean;
// returns ~3.167
```

* * *

## triangular

An [triangular][triangular-distribution] distribution object has the following properties and methods...

### Writable Properties

#### triangular.a

Minimum support of the distribution. `a` **must** be a number smaller than or equal to `b` and `c`.

```javascript
var triangular = new Triangular();

var a = triangular.a;
// returns 0.0

triangular.a = 0.5;

a = triangular.a;
// returns 0.5
```

#### triangular.b

Maximum support of the distribution. `b` **must** be a number larger than or equal to `a` and `c`.

```javascript
var triangular = new Triangular( 2.0, 4.0, 2.5 );

var b = triangular.b;
// returns 4.0

triangular.b = 3.0;

b = triangular.b;
// returns 3.0
```

#### triangular.c

Mode of the distribution. `c` **must** be a number larger than or equal to `a` and smaller than or equal to `b`.

```javascript
var triangular = new Triangular( 2.0, 5.0, 4.0 );

var c = triangular.c;
// returns 4.0

triangular.c = 3.0;

c = triangular.c;
// returns 3.0
```

* * *

### Computed Properties

#### Triangular.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var entropy = triangular.entropy;
// returns ~1.886
```

#### Triangular.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var kurtosis = triangular.kurtosis;
// returns -0.6
```

#### Triangular.prototype.mean

Returns the [expected value][expected-value].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var mu = triangular.mean;
// returns ~8.667
```

#### Triangular.prototype.median

Returns the [median][median].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var median = triangular.median;
// returns ~8.899
```

#### Triangular.prototype.mode

Returns the [mode][mode].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var mode = triangular.mode;
// returns 10.0
```

#### Triangular.prototype.skewness

Returns the [skewness][skewness].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var skewness = triangular.skewness;
// returns ~-0.422
```

#### Triangular.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var s = triangular.stdev;
// returns ~1.7
```

#### Triangular.prototype.variance

Returns the [variance][variance].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var s2 = triangular.variance;
// returns ~2.889
```

* * *

### Methods

#### Triangular.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.cdf( 2.5 );
// returns 0.125
```

#### Triangular.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.logcdf( 2.5 );
// returns ~-2.079
```

#### Triangular.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.logpdf( 2.5 );
// returns ~-0.693
```

#### Triangular.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.pdf( 2.5 );
// returns 0.5
```

#### Triangular.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.quantile( 0.5 );
// returns 3.0

y = triangular.quantile( 1.9 );
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
var Triangular = require( '@stdlib/stats/base/dists/triangular/ctor' );

var triangular = new Triangular( 2.0, 4.0, 3.0 );

var mu = triangular.mean;
// returns 3.0

var median = triangular.median;
// returns 3.0

var s2 = triangular.variance;
// returns ~0.167

var y = triangular.cdf( 2.5 );
// returns 0.125
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

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

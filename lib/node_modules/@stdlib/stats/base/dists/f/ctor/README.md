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

# Fisher's F

> F distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var F = require( '@stdlib/stats/base/dists/f/ctor' );
```

#### F( \[d1, d2] )

Returns a [F][f-distribution] distribution object.

```javascript
var f = new F();

var mu = f.mean;
// returns NaN
```

By default, `d1 = 1.0` and `d2 = 1.0`. To create a distribution having a different `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom), provide the corresponding arguments.

```javascript
var f = new F( 2.0, 4.0 );

var mu = f.mean;
// returns 2.0
```

* * *

## f

A [F][f-distribution] distribution object has the following properties and methods...

### Writable Properties

#### f.d1

Numerator degrees of freedom of the distribution. `d1` **must** be a positive number.

```javascript
var f = new F();

var d1 = f.d1;
// returns 1.0

f.d1 = 3.0;

d1 = f.d1;
// returns 3.0
```

#### f.d2

Denominator degrees of freedom of the distribution. `d2` **must** be a positive number.

```javascript
var f = new F( 2.0, 4.0 );

var d2 = f.d2;
// returns 4.0

f.d2 = 3.0;

d2 = f.d2;
// returns 3.0
```

* * *

### Computed Properties

#### F.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var f = new F( 4.0, 12.0 );

var entropy = f.entropy;
// returns ~1.12
```

#### F.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var f = new F( 4.0, 12.0 );

var kurtosis = f.kurtosis;
// returns ~26.143
```

#### F.prototype.mean

Returns the [expected value][expected-value].

```javascript
var f = new F( 4.0, 12.0 );

var mu = f.mean;
// returns 1.2
```

#### F.prototype.mode

Returns the [mode][mode].

```javascript
var f = new F( 4.0, 12.0 );

var mode = f.mode;
// returns ~0.429
```

#### F.prototype.skewness

Returns the [skewness][skewness].

```javascript
var f = new F( 4.0, 12.0 );

var skewness = f.skewness;
// returns ~3.207
```

#### F.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var f = new F( 4.0, 12.0 );

var s = f.stdev;
// returns ~1.122
```

#### F.prototype.variance

Returns the [variance][variance].

```javascript
var f = new F( 4.0, 12.0 );

var s2 = f.variance;
// returns 1.26
```

* * *

### Methods

#### F.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var f = new F( 2.0, 4.0 );

var y = f.cdf( 0.5 );
// returns ~0.36
```

#### F.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var f = new F( 2.0, 4.0 );

var y = f.pdf( 0.8 );
// returns ~0.364
```

#### F.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var f = new F( 2.0, 4.0 );

var y = f.quantile( 0.5 );
// returns ~0.828

y = f.quantile( 1.9 );
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
var F = require( '@stdlib/stats/base/dists/f/ctor' );

var f = new F( 3.0, 5.0 );

var mu = f.mean;
// returns ~1.667

var mode = f.mode;
// returns ~0.238

var s2 = f.variance;
// returns ~11.111

var y = f.cdf( 0.8 );
// returns ~0.455
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

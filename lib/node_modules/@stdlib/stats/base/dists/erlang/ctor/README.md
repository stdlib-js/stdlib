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

# Erlang

> Erlang distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Erlang = require( '@stdlib/stats/base/dists/erlang/ctor' );
```

#### Erlang( \[k, lambda] )

Returns an [Erlang][erlang-distribution] distribution object.

```javascript
var erlang = new Erlang();

var mode = erlang.mode;
// returns 0.0
```

By default, `k = 1.0` and `lambda = 1.0`. To create a distribution having a different `k` (shape parameter) and `lambda` (rate parameter), provide the corresponding arguments.

```javascript
var erlang = new Erlang( 2, 4.0 );

var mode = erlang.mode;
// returns 0.25
```

* * *

## erlang

An [Erlang][erlang-distribution] distribution object has the following properties and methods...

### Writable Properties

#### erlang.k

Shape parameter of the distribution. `k` **must** be a positive integer.

```javascript
var erlang = new Erlang();

var k = erlang.k;
// returns 1.0

erlang.k = 3.0;

k = erlang.k;
// returns 3.0
```

#### erlang.lambda

Rate parameter of the distribution. `lambda` **must** be a positive number.

```javascript
var erlang = new Erlang( 2, 4.0 );

var lambda = erlang.lambda;
// returns 4.0

erlang.lambda = 3.0;

lambda = erlang.lambda;
// returns 3.0
```

* * *

### Computed Properties

#### Erlang.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var erlang = new Erlang( 4, 12.0 );

var entropy = erlang.entropy;
// returns ~-0.462
```

#### Erlang.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var erlang = new Erlang( 4, 12.0 );

var kurtosis = erlang.kurtosis;
// returns 1.5
```

#### Erlang.prototype.mean

Returns the [expected value][expected-value].

```javascript
var erlang = new Erlang( 4, 12.0 );

var mu = erlang.mean;
// returns ~0.333
```

#### Erlang.prototype.mode

Returns the [mode][mode].

```javascript
var erlang = new Erlang( 4, 12.0 );

var mode = erlang.mode;
// returns 0.25
```

#### Erlang.prototype.skewness

Returns the [skewness][skewness].

```javascript
var erlang = new Erlang( 4, 12.0 );

var skewness = erlang.skewness;
// returns 1.0
```

#### Erlang.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var erlang = new Erlang( 4, 12.0 );

var s = erlang.stdev;
// returns ~0.167
```

#### Erlang.prototype.variance

Returns the [variance][variance].

```javascript
var erlang = new Erlang( 4, 12.0 );

var s2 = erlang.variance;
// returns ~0.028
```

* * *

### Methods

#### Erlang.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var erlang = new Erlang( 2, 4.0 );

var y = erlang.cdf( 0.5 );
// returns ~0.594
```

#### Erlang.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var erlang = new Erlang( 2, 4.0 );

var y = erlang.logpdf( 0.8 );
// returns ~-0.65
```

#### Erlang.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var erlang = new Erlang( 2, 4.0 );

var y = erlang.mgf( 0.5 );
// returns ~1.306
```

#### Erlang.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var erlang = new Erlang( 2, 4.0 );

var y = erlang.pdf( 0.8 );
// returns ~0.522
```

#### Erlang.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var erlang = new Erlang( 2, 4.0 );

var y = erlang.quantile( 0.5 );
// returns ~0.42

y = erlang.quantile( 1.9 );
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
var Erlang = require( '@stdlib/stats/base/dists/erlang/ctor' );

var erlang = new Erlang( 2, 4.0 );

var mu = erlang.mean;
// returns 0.5

var mode = erlang.mode;
// returns 0.25

var s2 = erlang.variance;
// returns 0.125

var y = erlang.cdf( 0.8 );
// returns ~0.829
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

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

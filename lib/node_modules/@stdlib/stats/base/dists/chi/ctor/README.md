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

# Chi

> Chi distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Chi = require( '@stdlib/stats/base/dists/chi/ctor' );
```

#### Chi( \[k] )

Returns an [chi][chi-distribution] distribution object.

```javascript
var chi = new Chi();

var mu = chi.mean;
// returns ~0.798
```

By default, `k = 1.0`. To create a distribution having a different degrees of freedom `k`, provide a parameter value.

```javascript
var chi = new Chi( 4.0 );

var mu = chi.mean;
// returns ~1.88
```

* * *

## chi

A [chi][chi-distribution] distribution object has the following properties and methods...

### Writable Properties

#### chi.k

Degrees of freedom of the distribution. `k` **must** be a positive number.

```javascript
var chi = new Chi( 2.0 );

var k = chi.k;
// returns 2.0

chi.k = 3.0;

k = chi.k;
// returns 3.0
```

* * *

### Computed Properties

#### Chi.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var chi = new Chi( 4.0 );

var entropy = chi.entropy;
// returns ~1.019
```

#### Chi.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var chi = new Chi( 4.0 );

var kurtosis = chi.kurtosis;
// returns ~0.059
```

#### Chi.prototype.mean

Returns the [expected value][expected-value].

```javascript
var chi = new Chi( 4.0 );

var mu = chi.mean;
// returns ~1.88
```

#### Chi.prototype.mode

Returns the [mode][mode].

```javascript
var chi = new Chi( 4.0 );

var mode = chi.mode;
// returns ~1.732
```

#### Chi.prototype.skewness

Returns the [skewness][skewness].

```javascript
var chi = new Chi( 4.0 );

var skewness = chi.skewness;
// returns ~0.406
```

#### Chi.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var chi = new Chi( 4.0 );

var s = chi.stdev;
// returns ~0.682
```

#### Chi.prototype.variance

Returns the [variance][variance].

```javascript
var chi = new Chi( 4.0 );

var s2 = chi.variance;
// returns ~0.466
```

* * *

### Methods

#### Chi.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var chi = new Chi( 2.0 );

var y = chi.cdf( 0.5 );
// returns ~0.118
```

#### Chi.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var chi = new Chi( 2.0 );

var y = chi.logpdf( 0.8 );
// returns ~-0.543
```

#### Chi.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var chi = new Chi( 2.0 );

var y = chi.pdf( 0.8 );
// returns ~0.581
```

#### Chi.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var chi = new Chi( 2.0 );

var y = chi.quantile( 0.5 );
// returns ~1.177

y = chi.quantile( 1.9 );
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
var Chi = require( '@stdlib/stats/base/dists/chi/ctor' );

var chi = new Chi( 2.0 );

var mu = chi.mean;
// returns ~1.253

var mode = chi.mode;
// returns 1.0

var s2 = chi.variance;
// returns ~0.429

var y = chi.cdf( 0.8 );
// returns ~0.274
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

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

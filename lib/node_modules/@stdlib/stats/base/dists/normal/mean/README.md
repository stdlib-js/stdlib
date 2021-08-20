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

# Mean

> [Normal][normal-distribution] distribution [expected value][mean].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][mean] for a [normal][normal-distribution] random variable with mean `μ` and standard deviation `σ > 0` is

<!-- <equation class="equation" label="eq:normal_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \mu" alt="Expected value for a normal distribution."> -->

<div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \mu" data-equation="eq:normal_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/normal/mean/docs/img/equation_normal_expectation.svg" alt="Expected value for a normal distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/normal/mean' );
```

#### mean( mu, sigma )

Returns the [expected value][mean] for a [normal][normal-distribution] distribution with parameters `mu` (mean) and `sigma` (standard deviation).

```javascript
var y = mean( 2.0, 1.0 );
// returns 2.0

y = mean( 0.0, 1.0 );
// returns 0.0

y = mean( -1.0, 4.0 );
// returns -1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mean( NaN, 1.0 );
// returns NaN

y = mean( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = mean( 0.0, 0.0 );
// returns NaN

y = mean( 0.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var mean = require( '@stdlib/stats/base/dists/normal/mean' );

var sigma;
var mu;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    sigma = randu() * 20.0;
    y = mean( mu, sigma );
    console.log( 'µ: %d, σ: %d, E(X;µ,σ): %d', mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[mean]: https://en.wikipedia.org/wiki/Mean

</section>

<!-- /.links -->

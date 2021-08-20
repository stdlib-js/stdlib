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

# Variance

> [Exponential][exponential-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_variance" align="center" raw="\operatorname{Var}\left( X \right) = \lambda^{-2}" alt="Variance for an exponential distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = \lambda^{-2}" data-equation="eq:exponential_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/variance/docs/img/equation_exponential_variance.svg" alt="Variance for an exponential distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/exponential/variance' );
```

#### variance( lambda )

Returns the [variance][variance] of a [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var v = variance( 9.0 );
// returns ~0.012

v = variance( 0.5 );
// returns 4.0
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = variance( -1.0 );
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
var round = require( '@stdlib/math/base/special/round' );
var variance = require( '@stdlib/stats/base/dists/exponential/variance' );

var lambda;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    lambda = randu() * 20.0;
    v = variance( lambda );
    console.log( 'λ: %d, Var(X;λ): %d', lambda.toFixed( 4 ), v.toFixed( 4 ) );
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

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

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

# Kurtosis

> [Negative binomial][negative-binomial-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [negative binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{6}{r} + \frac{(1-p)^{2}}{pr}" alt="Excess kurtosis for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{6}{r} + \frac{(1-p)^{2}}{pr}" data-equation="eq:negative_binomial_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/kurtosis/docs/img/equation_negative_binomial_kurtosis.svg" alt="Excess kurtosis for a negative binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `r` is the number of successes until experiment is stopped and `p` is the success probability in each trial. The random variable `X` denotes the number of failures until the `r` success is reached. 

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/negative-binomial/kurtosis' );
```

#### kurtosis( r, p )

Returns the [excess kurtosis][kurtosis] of a [negative binomial][negative-binomial-distribution] distribution with parameters `r` (number of successes until experiment is stopped) and `p` (success probability).

```javascript
var v = kurtosis( 100, 0.2 );
// returns ~0.061

v = kurtosis( 50, 0.5 );
// returns ~0.13
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 0.5 );
// returns NaN

v = kurtosis( 20, NaN );
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var v = kurtosis( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = kurtosis( 20, -1.0 );
// returns NaN

v = kurtosis( 20, 1.5 );
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
var kurtosis = require( '@stdlib/stats/base/dists/negative-binomial/kurtosis' );

var v;
var i;
var r;
var p;

for ( i = 0; i < 10; i++ ) {
    r = randu() * 100;
    p = randu();
    v = kurtosis( r, p );
    console.log( 'r: %d, p: %d, Kurt(X;r,p): %d', r, p.toFixed( 4 ), v.toFixed( 4 ) );
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

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->

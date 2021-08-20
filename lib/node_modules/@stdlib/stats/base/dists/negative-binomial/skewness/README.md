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

# Skewness

> [Negative binomial][negative-binomial-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [negative binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{1+p}{\sqrt{pr}}" alt="Skewness for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{1+p}{\sqrt{pr}}" data-equation="eq:negative_binomial_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/skewness/docs/img/equation_negative_binomial_skewness.svg" alt="Skewness for a negative binomial distribution.">
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
var skewness = require( '@stdlib/stats/base/dists/negative-binomial/skewness' );
```

#### skewness( r, p )

Returns the [skewness][skewness] of a [negative binomial][negative-binomial-distribution] distribution with parameters `r` (number of successes until experiment is stopped) and `p` (success probability).

```javascript
var v = skewness( 100, 0.2 );
// returns ~0.201

v = skewness( 50, 0.5 );
// returns ~0.3
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 0.5 );
// returns NaN

v = skewness( 20, NaN );
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var v = skewness( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = skewness( 20, -1.0 );
// returns NaN

v = skewness( 20, 1.5 );
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
var skewness = require( '@stdlib/stats/base/dists/negative-binomial/skewness' );

var v;
var i;
var r;
var p;

for ( i = 0; i < 10; i++ ) {
    r = randu() * 100;
    p = randu();
    v = skewness( r, p );
    console.log( 'r: %d, p: %d, skew(X;r,p): %d', r, p.toFixed( 4 ), v.toFixed( 4 ) );
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

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->

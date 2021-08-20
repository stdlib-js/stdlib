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

# Mode

> [Negative binomial][negative-binomial-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [negative-binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_mode" align="center" raw="\operatorname{mode}\left( X \right) = \begin{cases}{\big \lfloor }{\frac{p(r-1)}{1-p}}{\big \rfloor } & \text{ if }\ r>1\\ 0 & \text{ if } \ r\leq 1\end{cases}" alt="Mode for a negative-binomial distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = \begin{cases}{\big \lfloor }{\frac{p(r-1)}{1-p}}{\big \rfloor } &amp; \text{ if }\ r&gt;1\\ 0 &amp; \text{ if } \ r\leq 1\end{cases}" data-equation="eq:negative_binomial_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/mode/docs/img/equation_negative_binomial_mode.svg" alt="Mode for a negative-binomial distribution.">
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
var mode = require( '@stdlib/stats/base/dists/negative-binomial/mode' );
```

#### mode( r, p )

Returns the [mode][mode] of a [negative binomial][negative-binomial-distribution] distribution with parameters `r` (number of successes until experiment is stopped) and `p` (success probability).

```javascript
var v = mode( 100, 0.2 );
// returns 396

v = mode( 50, 0.5 );
// returns 49
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 0.5 );
// returns NaN

v = mode( 20, NaN );
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var v = mode( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = mode( 20, -1.0 );
// returns NaN

v = mode( 20, 1.5 );
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
var mode = require( '@stdlib/stats/base/dists/negative-binomial/mode' );

var v;
var i;
var r;
var p;

for ( i = 0; i < 10; i++ ) {
    r = randu() * 100;
    p = randu();
    v = mode( r, p );
    console.log( 'r: %d, p: %d, mode(X;r,p): %d', r, p.toFixed( 4 ), v.toFixed( 4 ) );
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

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->

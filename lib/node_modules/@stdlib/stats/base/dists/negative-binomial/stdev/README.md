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

# Standard Deviation

> [Negative binomial][negative-binomial-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [negative binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_stdev" align="center" raw="\sigma = \sqrt{ \tfrac{pr}{(1-p)^{2}} }" alt="Standard deviation for a negative binomial distribution."> -->

<div class="equation" align="center" data-raw-text="\sigma = \sqrt{ \tfrac{pr}{(1-p)^{2}} }" data-equation="eq:negative_binomial_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/stdev/docs/img/equation_negative_binomial_stdev.svg" alt="Standard deviation for a negative binomial distribution.">
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
var stdev = require( '@stdlib/stats/base/dists/negative-binomial/stdev' );
```

#### stdev( r, p )

Returns the [standard deviation][standard-deviation] of a [negative binomial][negative-binomial-distribution] distribution with parameters `r` (number of successes until experiment is stopped) and `p` (success probability).

```javascript
var v = stdev( 100, 0.2 );
// returns ~44.721

v = stdev( 50, 0.5 );
// returns 10.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 0.5 );
// returns NaN

v = stdev( 20, NaN );
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var v = stdev( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = stdev( 20, -1.0 );
// returns NaN

v = stdev( 20, 1.5 );
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
var stdev = require( '@stdlib/stats/base/dists/negative-binomial/stdev' );

var v;
var i;
var r;
var p;

for ( i = 0; i < 10; i++ ) {
    r = randu() * 100;
    p = randu();
    v = stdev( r, p );
    console.log( 'r: %d, p: %d, SD(X;r,p): %d', r, p.toFixed( 4 ), v.toFixed( 4 ) );
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

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->

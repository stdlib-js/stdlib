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

> [Degenerate][degenerate-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][standard-deviation] for a [degenerate][degenerate-distribution] random variable is

<!-- <equation class="equation" label="eq:degenerate_stdev" align="center" raw="\operatorname{SD}\left( X \right) = 0" alt="Standard deviation for a degenerate distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{SD}\left( X \right) = 0" data-equation="eq:degenerate_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/base/dists/degenerate/stdev/docs/img/equation_degenerate_stdev.svg" alt="Standard deviation for a degenerate distribution.">
    <br>
</div>

<!-- </equation> -->

where `μ` is the constant value of the distribution.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/degenerate/stdev' );
```

#### stdev( mu )

Returns the [standard deviation][standard-deviation] of a [degenerate][degenerate-distribution] distribution with constant value `mu`.

```javascript
var v = stdev( 10.0 );
// returns 0.0

v = stdev( -0.5 );
// returns 0.0

v = stdev( NaN );
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
var stdev = require( '@stdlib/stats/base/dists/degenerate/stdev' );

var mu;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = randu();
    v = stdev( mu );
    console.log( 'µ: %d, SD(X;µ): %d', mu.toFixed( 4 ), v.toFixed( 4 ) );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->

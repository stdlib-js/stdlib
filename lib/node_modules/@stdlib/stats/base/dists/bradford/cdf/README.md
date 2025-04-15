<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Cumulative Distribution Function

> [Bradford][bradford-distribution] distribution [cumulative distribution function][cdf] (CDF).

<section class="intro">

The [cumulative distribution function][cdf] (CDF) for a [Bradford][bradford-distribution] random variable is

<!-- <equation class="equation" label="eq:bradford_cdf" align="center" raw="F(x;c)=\frac{\ln(1+cx)}{\ln(1+c)}" alt="Cumulative distribution function (CDF) for a Bradford distribution."> -->

```math
F(x;c)=\frac{\ln(1+cx)}{\ln(1+c)}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;c)=\frac{\ln(1+cx)}{\ln(1+c)}" data-equation="eq:bradford_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/bradford/cdf/docs/img/equation_bradford_cdf.svg" alt="Cumulative distribution function (CDF) for a Bradford distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `c > 0` is the shape parameter of the distribution.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/bradford/cdf' );
```

#### cdf( x, c )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Bradford][bradford-distribution] distribution with shape parameter `c` at a value `x`.

```javascript
var y = cdf( 0.1, 0.1 );
// returns ~0.104

y = cdf( 0.5, 5.0 );
// returns ~0.699

y = cdf( 1.0, 10.0 );
// returns 1.0

y = cdf( -0.5, 1.0 );
// returns 0.0

y = cdf( 2.0, 1.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `c <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 0.0, 0.0 );
// returns NaN

y = cdf( 0.5, -5.0 );
// returns NaN
```

#### cdf.factory( c )

Returns a function for evaluating the [CDF][cdf] of a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var myPDF = cdf.factory( 5.0 );
var y = myPDF( 0.5 );
// returns ~0.699

y = myPDF( 1.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var cdf = require( '@stdlib/stats/base/dists/bradford/cdf' );

var x = uniform( 10, 0.0, 1.0 );
var c = uniform( 10, 0.1, 10.0 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
    y = cdf( x[ i ], c[ i ] );
    console.log( 'x: %d, c: %d, F(x;c): %d', x[ i ].toFixed( 4 ), c[ i ].toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

</section>

<!-- /.links -->

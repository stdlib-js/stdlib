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

# Quantile Function

> Planck (discrete exponential) distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_quantile_function" align="center" raw="Q(p;\lambda) = \left\lceil -\frac{\ln(1-p)}{\lambda} - 1 \right\rceil" alt="Quantile function for a Planck distribution."> -->

```math
Q(p;\lambda) = \left\lceil -\frac{\ln(1-p)}{\lambda} \right\rceil \!-1
```

<!-- </equation> -->

for `0 < p < 1` and where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/planck/quantile' );
```

#### quantile( p, lambda )

Evaluates the [quantile function][quantile-function] for a Planck distribution with shape parameter `lambda` at a probability `p`.

```javascript
var y = quantile( 0.8, 0.4 );
// returns 4

y = quantile( 0.5, 1.4 );
// returns 0

y = quantile( 0.9, 2.1 );
// returns 1
```

If provided an input probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.5 );
// returns NaN

y = quantile( -0.1, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN
```

#### quantile.factory( lambda )

Returns a function for evaluating the [quantile function][quantile-function] for a Planck distribution with shape parameter `lambda`.

```javascript
var myquantile = quantile.factory( 0.4 );
var y = myquantile( 0.4 );
// returns 1

y = myquantile( 0.8 );
// returns 4

y = myquantile( 1.0 );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var quantile = require( '@stdlib/stats/base/dists/planck/quantile' );

var lambda = uniform( 10, 0.1, 10.0 );
var p = uniform( 10, 0.0, 1.0 );

var y;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    y = quantile( p[ i ], lambda[ i ] );
    console.log( 'p: %d, λ: %d, Q(p;λ): %d', p[ i ].toFixed( 4 ), lambda[ i ].toFixed( 4 ), y.toFixed( 4 ) );
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

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->

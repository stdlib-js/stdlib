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

# Mean

> [Bradford][bradford-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Bradford][bradford-distribution] random variable is

<!-- <equation class="equation" label="eq:bradford_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \frac{c - \ln(1 + c)}{c \ln(1 + c)}" alt="Expected value for a Bradford distribution."> -->

```math
\mathbb{E}\left[ X \right] = \frac{c - \ln(1 + c)}{c \ln(1 + c)}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \frac{c - \ln(1 + c)}{c \ln(1 + c)}" data-equation="eq:bradford_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bradford/mean/docs/img/equation_bradford_expectation.svg" alt="Expected value for a Bradford distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `c` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/bradford/mean' );
```

#### mean( c )

Returns the [expected value][expected-value] of a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var v = mean( 0.1 );
// returns ~0.492

v = mean( 10.0 );
// returns ~0.317
```

If provided a shape parameter `c <= 0`, the function returns `NaN`.

```javascript
var v = mean( 0.0 );
// returns NaN

v = mean( -1.5 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var mean = require( '@stdlib/stats/base/dists/bradford/mean' );

var c = uniform( 10, 0.1, 10.0 );

var v;
var i;
for ( i = 0; i < c.length; i++ ) {
    v = mean( c[ i ] );
    console.log( 'c: %d, E(X;c): %d', c[ i ].toFixed( 4 ), v.toFixed( 4 ) );
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

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->

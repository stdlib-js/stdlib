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

# Skewness

> [Bradford][bradford-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Bradford][bradford-distribution] random variable with shape parameter.`c` is

<!-- <equation class="equation" label="eq:bradford_skewness" align="center" raw="\operatorname{skew}\left( c \right) = \frac{\sqrt{2}\,\Bigl(12c^2 - 9c\,\log(1+c)(c+2) +2\,(\log(1+c))^2\,(c(c+3)+3)\Bigr)}{\sqrt{c\,\Bigl(c\,(\log(1+c)-2)+2\log(1+c)\Bigr)}\Bigl(3c\,(\log(1+c)-2)+6\log(1+c)\Bigr)}" alt="Skewness for a bradford distribution."> -->

```math
\mathop{\mathrm{skew}}\left( c \right) = \frac{\sqrt{2}\,\Bigl(12c^2 - 9c\,\log(1+c)(c+2) + 2\,(\log(1+c))^2\,(c(c+3)+3)\Bigr)}{\sqrt{c\,\Bigl(c\,(\log(1+c)-2)+2\log(1+c)\Bigr)}\Bigl(3c\,(\log(1+c)-2)+6\log(1+c)\Bigr)}
```

<!-- </equation> -->

where `c` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/bradford/skewness' );
```

#### skewness( c )

Returns the [skewness][skewness] of a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var v = skewness( 9.0 );
// returns ~0.772

v = skewness( 0.5 );
// returns ~0.140
```

If provided `c <= 0`, the function returns `NaN`.

```javascript
var v = skewness( -1.0 );
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var skewness = require( '@stdlib/stats/base/dists/bradford/skewness' );

var opts = {
    'dtype': 'float64'
};
var c = uniform( 10, 0.1, 10.0, opts );

logEachMap( 'c: %0.4f, Skew(X;c): %0.4f', c, skewness );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->

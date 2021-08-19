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

# Riemann Zeta Function

> [Riemann zeta][zeta-function] function.

<section class="intro">

The [Riemann zeta][zeta-function] function is the [analytic continuation][analytic-continuation] of the infinite series

<!-- <equation class="equation" label="eq:riemann_zeta_function" align="center" raw="\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}" alt="Riemann zeta function"> -->

<div class="equation" align="center" data-raw-text="\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}" data-equation="eq:riemann_zeta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/riemann-zeta/docs/img/equation_riemann_zeta_function.svg" alt="Riemann zeta function">
    <br>
</div>

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is only convergent when the real part of `s`, `σ`, is greater than `1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zeta = require( '@stdlib/math/base/special/riemann-zeta' );
```

#### zeta( s )

Evaluates the [Riemann zeta][zeta-function] function as a function of a real variable `s` (i.e., `t = 0`).

```javascript
var v = zeta( 1.1 );
// returns ~10.584

v = zeta( -4.0 );
// returns 0.0

v = zeta( 70.0 );
// returns 1.0

v = zeta( 0.5 );
// returns ~-1.46

v = zeta( 1.0 ); // pole
// returns NaN

v = zeta( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var zeta = require( '@stdlib/math/base/special/riemann-zeta' );

var s;
var v;
var i;

s = linspace( -50.0, 50.0, 200 );
for ( i = 0; i < s.length; i++ ) {
    v = zeta( s[ i ] );
    console.log( 's: %d, ζ(s): %d', s[ i ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[zeta-function]: https://en.wikipedia.org/wiki/Riemann_zeta_function

[analytic-continuation]: https://en.wikipedia.org/wiki/Analytic_continuation

</section>

<!-- /.links -->

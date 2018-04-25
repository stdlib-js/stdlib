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

# Dirichlet Eta Function

> [Dirichlet eta][eta-function] function.

<section class="intro">

The [Dirichlet eta][eta-function] function is defined by the [Dirichlet series][dirichlet-series]

<!-- <equation class="equation" label="eq:dirichlet_eta_function" align="center" raw="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" alt="Dirichlet eta function"> -->

<div class="equation" align="center" data-raw-text="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" data-equation="eq:dirichlet_eta_function">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/dirichlet-eta/docs/img/equation_dirichlet_eta_function.svg" alt="Dirichlet eta function">
    <br>
</div>

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is convergent for all complex numbers having a real part greater than `0`.

Note that the [Dirichlet eta][eta-function] function is also known as the **alternating zeta function** and denoted `ζ*(s)`. The series is an alternating sum corresponding to the Dirichlet series expansion of the [Riemann zeta][@stdlib/math/base/special/riemann-zeta] function. Accordingly, the following relation holds:

<!-- <equation class="equation" label="eq:dirichlet_riemann_relation" align="center" raw="\eta(s) = (1-2^{1-s})\zeta(s)" alt="Dirichlet-Riemann zeta relation"> -->

<div class="equation" align="center" data-raw-text="\eta(s) = (1-2^{1-s})\zeta(s)" data-equation="eq:dirichlet_riemann_relation">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/dirichlet-eta/docs/img/equation_dirichlet_riemann_relation.svg" alt="Dirichlet-Riemann zeta relation">
    <br>
</div>

<!-- </equation> -->

where `ζ(s)` is the [Riemann zeta][@stdlib/math/base/special/riemann-zeta] function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var eta = require( '@stdlib/math/base/special/dirichlet-eta' );
```

#### eta( s )

Evaluates the [Dirichlet eta][eta-function] function as a function of a real variable `s`.

```javascript
var v = eta( 0.0 ); // Abel sum of 1-1+1-1+...
// returns 0.5

v = eta( -1.0 ); // Abel sum of 1-2+3-4+...
// returns 0.25

v = eta( 1.0 ); // alternating harmonic series => ln(2)
// returns 0.6931471805599453

v = eta( 3.14 );
// returns ~0.9096

v = eta( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/math/utils/linspace' );
var eta = require( '@stdlib/math/base/special/dirichlet-eta' );

var s = linspace( -50.0, 50.0, 200 );
var v;
var i;

for ( i = 0; i < s.length; i++ ) {
    v = eta( s[ i ] );
    console.log( 's: %d, η(s): %d', s[ i ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[eta-function]: https://en.wikipedia.org/wiki/Dirichlet_eta_function

[dirichlet-series]: https://en.wikipedia.org/wiki/Dirichlet_series

[@stdlib/math/base/special/riemann-zeta]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/riemann-zeta

</section>

<!-- /.links -->

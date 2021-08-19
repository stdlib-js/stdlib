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

# Dirac Delta

> Evaluate the [Dirac delta function][dirac-delta-function].

<section class="intro">

The [Dirac delta function][dirac-delta-function] may be loosely defined as

<!-- <equation class="equation" label="eq:dirac_delta" align="center" raw="\delta = \begin{cases} \infty & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \neq 0\end{cases}" alt="Dirac delta function."> -->

<div class="equation" align="center" data-raw-text="\delta = \begin{cases} \infty &amp; \textrm{if}\ x = 0 \\ 0 &amp; \textrm{if}\ x \neq 0\end{cases}" data-equation="eq:dirac_delta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/dirac-delta/docs/img/equation_dirac_delta.svg" alt="Dirac delta function.">
    <br>
</div>

<!-- </equation> -->

and is constrained to satisfy the identity

<!-- <equation class="equation" label="eq:dirac_delta_integral" align="center" raw="\int^{+\infty}_{-\infty} \delta(x)\ dx = 1" alt="Dirac delta function integral."> -->

<div class="equation" align="center" data-raw-text="\int^{+\infty}_{-\infty} \delta(x)\ dx = 1" data-equation="eq:dirac_delta_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/dirac-delta/docs/img/equation_dirac_delta_integral.svg" alt="Dirac delta function integral.">
    <br>
</div>

<!-- </equation> -->

Note that the [Dirac delta function][dirac-delta-function] is **not** a function in the traditional sense, as any real-valued function which is zero everywhere except at a single point, must have an integral equal to `0`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var diracDelta = require( '@stdlib/math/base/special/dirac-delta' );
```

#### diracDelta( x )

Evaluates the [Dirac delta function][dirac-delta-function].

```javascript
var v = diracDelta( 0.0 );
// returns Infinity

v = diracDelta( 3.14 );
// returns 0.0

v = diracDelta( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var diracDelta = require( '@stdlib/math/base/special/dirac-delta' );

var x = linspace( -1.0, 1.0, 101 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( 'dirac(%d) = %d', x[ i ], diracDelta( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[dirac-delta-function]: https://en.wikipedia.org/wiki/Dirac_delta_function

</section>

<!-- /.links -->

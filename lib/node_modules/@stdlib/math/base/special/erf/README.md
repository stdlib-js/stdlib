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

# erf

> [Error function][error-function].

<section class="intro">

The [error function][error-function] is defined as

<!-- <equation class="equation" label="eq:error_function" align="center" raw="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" alt="Error function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" data-equation="eq:error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/erf/docs/img/equation_error_function.svg" alt="Error function.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erf = require( '@stdlib/math/base/special/erf' );
```

#### erf( x )

Evaluates the [error function][error-function].

```javascript
var y = erf( 2.0 );
// returns ~0.9953

y = erf( -1.0 );
// returns ~-0.8427
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erf( NaN );
// returns NaN
```

The [error function][error-function] is an [odd function][odd-function]; i.e., `erf(-x) = -erf(x)`. Thus, in accordance with the [IEEE 754][ieee754] standard, if provided `-0`, the function returns `-0`.

```javascript
var y = erf( -0.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var erf = require( '@stdlib/math/base/special/erf' );

var x = linspace( -10.0, 10.0, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
    y = erf( x[ i ] );
    console.log( 'x: %d, erf(x): %d', x[ i ], y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[error-function]: https://en.wikipedia.org/wiki/Error_function

[odd-function]: https://en.wikipedia.org/wiki/Even_and_odd_functions

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

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

# digamma

> [Digamma][digamma-function] function.

<section class="intro">

The [digamma function][digamma-function] `ψ` is the logarithmic derivative of the [gamma function][gamma-function], i.e.

<!-- <equation class="equation" label="eq:digamma_function" align="center" raw="\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,'(x)}{\Gamma(x)}" alt="Digamma function"> -->

<div class="equation" align="center" data-raw-text="\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,&#39;(x)}{\Gamma(x)}" data-equation="eq:digamma_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/digamma/docs/img/equation_digamma_function.svg" alt="Digamma function">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var digamma = require( '@stdlib/math/base/special/digamma' );
```

#### digamma( x )

Evaluates the [digamma function][digamma-function].

```javascript
var v = digamma( -2.5 );
// returns ~1.103

v = digamma( 1.0 );
// returns ~-0.577

v = digamma( 10.0 );
// returns ~2.252
```

If `x` is `0` or a negative `integer`, the function returns `NaN`.

```javascript
var v = digamma( 0.0 );
// returns NaN

v = digamma( -1.0 );
// returns NaN

v = digamma( -2.0 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = digamma( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var digamma = require( '@stdlib/math/base/special/digamma' );

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu()*10.0) - 5.0;
    v = digamma( x );
    console.log( 'x: %d, f(x): %d', x, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[digamma-function]: https://en.wikipedia.org/wiki/Digamma_function

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

</section>

<!-- /.links -->

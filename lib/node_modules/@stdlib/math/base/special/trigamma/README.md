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

# Trigamma

> [Trigamma][trigamma-function] function.

<section class="intro">

The [trigamma function][trigamma-function] `ψ^(1)` is the derivative of the [digamma function][@stdlib/math/base/special/digamma].

<!-- <equation class="equation" label="eq:trigamma_function" align="center" raw="\psi^{(1)}(x) =\frac{d}{dx} \Psi(x) = \sum_{k=0}^\infty \frac{1}{(k+x)^2}" alt="Trigamma function"> -->

<div class="equation" align="center" data-raw-text="\psi^{(1)}(x) =\frac{d}{dx} \Psi(x) = \sum_{k=0}^\infty \frac{1}{(k+x)^2}" data-equation="eq:trigamma_function">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/trigamma/docs/img/equation_trigamma_function.svg" alt="Trigamma function">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var trigamma = require( '@stdlib/math/base/special/trigamma' );
```

#### trigamma( x )

Evaluates the [trigamma function][trigamma-function].

```javascript
var v = trigamma( -2.5 );
// returns ~9.539

v = trigamma( 1.0 );
// returns ~1.645

v = trigamma( 10.0 );
// returns ~0.105
```

If `x` is `0` or a negative `integer`, the function returns `NaN`.

```javascript
var v = trigamma( 0.0 );
// returns NaN

v = trigamma( -1.0 );
// returns NaN

v = trigamma( -2.0 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = trigamma( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var trigamma = require( '@stdlib/math/base/special/trigamma' );

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu()*100.0) - 50.0;
    v = trigamma( x );
    console.log( 'x: %d, ψ^(1)(x): %d', x, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[trigamma-function]: https://en.wikipedia.org/wiki/Trigamma_function

[@stdlib/math/base/special/digamma]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/digamma

</section>

<!-- /.links -->

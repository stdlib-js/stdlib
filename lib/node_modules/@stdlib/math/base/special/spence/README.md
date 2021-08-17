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

# spence

> [Spence’s function][spence], also known as the dilogarithm.

<section class="intro">

The dilogarithm is defined as

<!-- <equation class="equation" label="eq:dilogarithm" align="center" raw="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" alt="Dilogarithm."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" data-equation="eq:dilogarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ea8657e10f42753f63de0b5c7dd8b13b4879409a/lib/node_modules/@stdlib/math/base/special/spence/docs/img/equation_dilogarithm.svg" alt="Dilogarithm.">
    <br>
</div>

<!-- </equation> -->

or also alternatively as

<!-- <equation class="equation" label="eq:dilogarithm_alt" align="center" raw="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." alt="Alternative definition of dilogarithm."> -->

<div class="equation" align="center" data-raw-text="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." data-equation="eq:dilogarithm_alt">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ea8657e10f42753f63de0b5c7dd8b13b4879409a/lib/node_modules/@stdlib/math/base/special/spence/docs/img/equation_dilogarithm_alt.svg" alt="Alternative definition of dilogarithm.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var spence = require( '@stdlib/math/base/special/spence' );
```

#### spence( x )

Evaluates [Spence’s function][spence], which is alternatively known as the dilogarithm.

```javascript
var v = spence( 3.0 );
// returns ~-1.437

v = spence( 0.0 );
// returns ~1.645

v = spence( NaN );
// returns NaN
```

For negative numbers, the dilogarithm is **not** defined.

```javascript
var v = spence( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var spence = require( '@stdlib/math/base/special/spence' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    console.log( 'spence( %d ) = %d', x, spence( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[spence]: https://en.wikipedia.org/wiki/Spence%27s_function

</section>

<!-- /.links -->

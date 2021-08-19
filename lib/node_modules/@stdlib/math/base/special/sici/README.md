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

# sici

> Compute the sine and cosine integrals.

<section class="intro">

The sine integral is defined as

<!-- <equation class="equation" label="eq:sine_integral" align="center" raw="\int_0^x \frac{\sin t}{t}\; dt" alt="Sine integral."> -->

<div class="equation" align="center" data-raw-text="\int_0^x \frac{\sin t}{t}\; dt" data-equation="eq:sine_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/sici/docs/img/equation_sine_integral.svg" alt="Sine integral.">
    <br>
</div>

<!-- </equation> -->

and the cosine integral is defined as

<!-- <equation class="equation" label="eq:cosine_integral" align="center" raw="\gamma + \log( x ) + \int_0^x \frac{\cos t - 1}{t}\; dt" alt="Cosine integral."> -->

<div class="equation" align="center" data-raw-text="\gamma + \log( x ) + \int_0^x \frac{\cos t - 1}{t}\; dt" data-equation="eq:cosine_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/sici/docs/img/equation_cosine_integral.svg" alt="Cosine integral.">
    <br>
</div>

<!-- </equation> -->

where `γ` is the [Euler-Mascheroni][eulergamma] constant.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sici = require( '@stdlib/math/base/special/sici' );
```

#### sici( \[out,] x )

Computes the sine and cosine integrals.

```javascript
var v = sici( 3.0 );
// returns [ ~1.849, ~0.12 ]

v = sici( 0.0 );
// returns [ 0.0, -Infinity ]

v = sici( -9.0 );
// returns [ ~-1.665, ~0.055 ]

v = sici( NaN );
// returns [ NaN, NaN ]
```

By default, the function returns the sine and cosine integrals as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = sici( out, 3.0 );
// returns <Float64Array>[ ~1.849, ~0.12 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var sici = require( '@stdlib/math/base/special/sici' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = sici( x );
    console.log( 'si(%d) = %d, ci(%d) = %d', x, y[ 0 ], x, y[ 1 ] );
}
```

</section>

<!-- /.examples -->

<section class="links">

[eulergamma]: http://mathworld.wolfram.com/Euler-MascheroniConstant.html

</section>

<!-- /.links -->

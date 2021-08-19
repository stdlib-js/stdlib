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

# Epsilon

> Difference between one and the smallest value greater than one that can be represented as a [single-precision floating-point number][ieee754].

<section class="intro">

[Epsilon][machine-epsilon] is defined as

<!-- <equation class="equation" label="eq:epsilon_float32" align="center" raw="\epsilon = b^{-(p-1)}" alt="Epsilon for a single-precision floating-point number."> -->

<div class="equation" align="center" data-raw-text="\epsilon = b^{-(p-1)}" data-equation="eq:epsilon_float32">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5d87cc7cb2c58aeb732872f89562d2c89571cc8a/lib/node_modules/@stdlib/constants/float32/eps/docs/img/equation_epsilon_float32.svg" alt="Epsilon for a single-precision floating-point number.">
    <br>
</div>

<!-- </equation> -->

where `b` is the radix (base) and `p` is the precision (number of radix bits in the significand). For [single-precision floating-point numbers][ieee754], `b` is `2` and `p` is `24`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var FLOAT32_EPSILON = require( '@stdlib/constants/float32/eps' );
```

#### FLOAT32_EPSILON

Difference between one and the smallest value greater than one that can be represented as a [single-precision floating-point number][ieee754].

```javascript
var bool = ( FLOAT32_EPSILON === 1.1920928955078125e-7 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var randu = require( '@stdlib/random/base/randu' );
var FLOAT32_EPSILON = require( '@stdlib/constants/float32/eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = float64ToFloat32( abs( a - b ) );
    tol = float64ToFloat32( FLOAT32_EPSILON * max( abs( a ), abs( b ) ) );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = float64ToFloat32( randu()*10.0 );
    b = float64ToFloat32( a + (randu()*2.0e-6) - 1.0e-6 );
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d', a, ( bool ) ? 'is' : 'is not', b );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[machine-epsilon]: https://en.wikipedia.org/wiki/Machine_epsilon

</section>

<!-- /.links -->

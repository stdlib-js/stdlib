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

> Difference between one and the smallest value greater than one that can be represented as a [half-precision floating-point number][half-precision-floating-point-format].

<section class="intro">

[Epsilon][machine-epsilon] is defined as

<!-- <equation class="equation" label="eq:epsilon_float16" align="center" raw="\epsilon = b^{-(p-1)}" alt="Epsilon for a half-precision floating-point number."> -->

<div class="equation" align="center" data-raw-text="\epsilon = b^{-(p-1)}" data-equation="eq:epsilon_float16">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5d87cc7cb2c58aeb732872f89562d2c89571cc8a/lib/node_modules/@stdlib/constants/float16/eps/docs/img/equation_epsilon_float16.svg" alt="Epsilon for a half-precision floating-point number.">
    <br>
</div>

<!-- </equation> -->

where `b` is the radix (base) and `p` is the precision (number of radix bits in the significand). For [half-precision floating-point numbers][half-precision-floating-point-format], `b` is `2` and `p` is `11`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var FLOAT16_EPSILON = require( '@stdlib/constants/float16/eps' );
```

#### FLOAT16_EPSILON

Difference between one and the smallest value greater than one that can be represented as a [half-precision floating-point number][half-precision-floating-point-format].

```javascript
var bool = ( FLOAT16_EPSILON === 0.0009765625 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var maxabs = require( '@stdlib/math/base/special/maxabs' );
var randu = require( '@stdlib/random/base/randu' );
var FLOAT16_EPSILON = require( '@stdlib/constants/float16/eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = abs( a - b );
    tol = FLOAT16_EPSILON * maxabs( a, b );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = randu() * 10.0;
    b = a + (randu()*2.0e-3) - 1.0e-3;
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d', a, ( bool ) ? 'is' : 'is not', b );
}
```

</section>

<!-- /.examples -->

<section class="links">

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

[machine-epsilon]: https://en.wikipedia.org/wiki/Machine_epsilon

</section>

<!-- /.links -->

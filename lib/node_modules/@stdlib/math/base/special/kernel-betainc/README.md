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

# Kernel Betainc

> [Incomplete beta function][incomplete-beta-function] and its first derivative.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var kernelBetainc = require( '@stdlib/math/base/special/kernel-betainc' );
```

#### kernelBetainc( x, a, b, regularized, upper )

Evaluates the [incomplete beta function][incomplete-beta-function] and its first derivative for parameters `x`, `a > 0` and `b > 0`. The `regularized` and `upper` boolean parameters are used to specify whether to evaluate the regularized or non-regularized and the upper or lower incomplete beta functions, respectively.

```javascript
var out = kernelBetainc( 0.8, 1.0, 0.3, false, false );
// returns [ ~1.277, ~0.926 ]

out = kernelBetainc( 0.2, 1.0, 2.0, true, false );
// returns [ 0.36, 1.6 ]

out = kernelBetainc( 0.2, 1.0, 2.0, true, true );
// returns [ 0.64, 1.6 ]
```

If provided `NaN` for `x`, `a`, or `b`, the function returns `[ NaN, NaN ]`.

```javascript
var out = kernelBetainc( NaN, 1.0, 1.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( 0.8, NaN, 1.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( 0.8, 1.0, NaN, true, true );
// returns [ NaN, NaN ]
```

If `x` is outside the interval `[0,1]`, the function returns `[ NaN, NaN ]`.

```javascript
var out = kernelBetainc( 1.5, 1.0, 1.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( -0.5, 1.0, 1.0, true, true );
// returns [ NaN, NaN ]
```

If `a` or `b` is negative, the function returns `[ NaN, NaN ]`.

```javascript
var out = kernelBetainc( 0.5, -2.0, 2.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( 0.5, 2.0, -2.0, true, true );
// returns [ NaN, NaN ]
```

#### kernelBetainc.assign( x, a, b, regularized, upper, out, stride, offset )

Evaluates the [incomplete beta function][incomplete-beta-function] and its first derivative for parameters `x`, `a > 0` and `b > 0` and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );
var v = kernelBetainc.assign( 0.2, 1.0, 2.0, true, true, out, 1, 0 );
// returns <Float64Array>[ 0.64, 1.6 ]

var bool = ( v === out );
// returns true
```

The `offset` parameter specifies the index of the first output array element, and the `stride` parameter specifies the stride length between consecutive output array elements.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var kernelBetainc = require( '@stdlib/math/base/special/kernel-betainc' );

var out;
var i;
var x;
var a;
var b;

out = [ 0.0, 0.0 ];
for ( i = 0; i < 100; i++ ) {
    x = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    kernelBetainc( x, a, b, true, false, out, 1, 0 );
    console.log( 'x: %d, \t a: %d, \t b: %d, \t f(x,a,b): %d, \t f^1(x,a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), out[ 0 ].toFixed( 4 ), out[ 1 ].toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

</section>

<!-- /.links -->

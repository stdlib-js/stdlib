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

# Kernel Cosine

> Compute the [cosine][cosine] of a number on `[-π/4, π/4]`.

<section class="usage">

## Usage

```javascript
var kernelCos = require( '@stdlib/math/base/special/kernel-cos' );
```

#### kernelCos( x, y )

Computes the [cosine][cosine] of a `number` on `[-π/4, π/4]`. For increased accuracy, the number for which the [cosine][cosine] should be evaluated can be supplied as a [double-double number][double-double-arithmetic] (i.e., a non-evaluated sum of two [double-precision floating-point numbers][ieee754] `x` and `y`).

```javascript
var v = kernelCos( 0.0, 0.0 );
// returns ~1.0

v = kernelCos( 3.141592653589793/6.0, 0.0 );
// returns ~0.866

v = kernelCos( 0.785, -1.144e-17 );
// returns ~0.707

v = kernelCos( NaN, 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As components of a [double-double number][double-double-arithmetic], the two [double-precision floating-point numbers][ieee754] `x` and `y` must satisfy 

    <!-- <equation class="equation" label="eq:double_double_inequality" align="center" raw="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" alt="Inequality for the two components of a double-double number."> -->

    <div class="equation" align="center" data-raw-text="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" data-equation="eq:double_double_inequality">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/kernel-cos/docs/img/equation_double_double_inequality.svg" alt="Inequality for the two components of a double-double number.">
        <br>
    </div>

    <!-- </equation> -->

    where `ulp` stands for [units in the last place][ulp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var PI = require( '@stdlib/constants/float64/pi' );
var kernelCos = require( '@stdlib/math/base/special/kernel-cos' );

var x = linspace( -PI/4.0, PI/4.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( 'kernelCos(%d) = %d', x[ i ], kernelCos( x[ i ], 0.0 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cosine]: https://en.wikipedia.org/wiki/Cosine

[double-double-arithmetic]: https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format#Double-double_arithmetic

[ieee754]: https://en.wikipedia.org/wiki/IEEE_floating_point

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

</section>

<!-- /.links -->

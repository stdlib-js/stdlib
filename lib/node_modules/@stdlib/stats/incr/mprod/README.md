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

# incrmprod

> Compute a moving product incrementally.

<section class="intro">

For a window of size `W`, the moving product is defined as

<!-- <equation class="equation" label="eq:moving_product" align="center" raw="\prod_{i=0}^{W-1} x_i" alt="Equation for the moving product."> -->

<div class="equation" align="center" data-raw-text="\prod_{i=0}^{W-1} x_i" data-equation="eq:moving_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mprod/docs/img/equation_moving_product.svg" alt="Equation for the moving product.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmprod = require( '@stdlib/stats/incr/mprod' );
```

#### incrmprod( window )

Returns an accumulator `function` which incrementally computes a moving product. The `window` parameter defines the number of values over which to compute the moving product.

```javascript
var accumulator = incrmprod( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated product. If not provided an input value `x`, the accumulator function returns the current product.

```javascript
var accumulator = incrmprod( 3 );

var p = accumulator();
// returns null

// Fill the window...
p = accumulator( 2.0 ); // [2.0]
// returns 2.0

p = accumulator( 1.0 ); // [2.0, 1.0]
// returns 2.0

p = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 6.0

// Window begins sliding...
p = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns -21.0

p = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 105.0

p = accumulator();
// returns 105.0
```

Under certain conditions, overflow may be transient.

```javascript
// Large values:
var x = 5.0e+300;
var y = 1.0e+300;

// Tiny value:
var z = 2.0e-302;

// Initialize an accumulator:
var accumulator = incrmprod( 3 );

var p = accumulator( x );
// returns 5.0e+300

// Transient overflow:
p = accumulator( y );
// returns Infinity

// Recover a finite result:
p = accumulator( z );
// returns 1.0e+299
```

Similarly, under certain conditions, underflow may be transient.

```javascript
// Tiny values:
var x = 4.0e-302;
var y = 9.0e-303;

// Large value:
var z = 2.0e+300;

// Initialize an accumulator:
var accumulator = incrmprod( 3 );

var p = accumulator( x );
// returns 4.0e-302

// Transient underflow:
p = accumulator( y );
// returns 0.0

// Recover a non-zero result:
p = accumulator( z );
// returns 7.2e-304
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   For large accumulation windows or accumulations of either large or small numbers, care should be taken to prevent overflow and underflow. Note, however, that overflow/underflow may be transient, as the accumulator does not use a double-precision floating-point number to store an accumulated product. Instead, the accumulator splits an accumulated product into a normalized **fraction** and **exponent** and updates each component separately. Doing so guards against a loss in precision.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmprod = require( '@stdlib/stats/incr/mprod' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmprod( 5 );

// For each simulated datum, update the moving product...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*10.0 ) - 5.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

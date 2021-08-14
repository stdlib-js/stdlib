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

# incrprod

> Compute a product incrementally.

<section class="intro">

The product is defined as

<!-- <equation class="equation" label="eq:product" align="center" raw="p = \prod_{i=0}^{n-1} x_i" alt="Equation for the product."> -->

<div class="equation" align="center" data-raw-text="p = \prod_{i=0}^{n-1} x_i" data-equation="eq:product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ae1331d17d505898a27e695fc60144d786627384/lib/node_modules/@stdlib/stats/incr/prod/docs/img/equation_product.svg" alt="Equation for the product.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrprod = require( '@stdlib/stats/incr/prod' );
```

#### incrprod()

Returns an accumulator `function` which incrementally computes a product.

```javascript
var accumulator = incrprod();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated product. If not provided an input value `x`, the accumulator function returns the current product.

```javascript
var accumulator = incrprod();

var prod = accumulator( 2.0 );
// returns 2.0

prod = accumulator( 1.0 );
// returns 2.0

prod = accumulator( 3.0 );
// returns 6.0

prod = accumulator();
// returns 6.0
```

Under certain conditions, overflow may be transient.

```javascript
// Large values:
var x = 5.0e+300;
var y = 1.0e+300;

// Tiny value:
var z = 2.0e-302;

// Initialize an accumulator:
var accumulator = incrprod();

var prod = accumulator( x );
// returns 5.0e+300

// Transient overflow:
prod = accumulator( y );
// returns Infinity

// Recover a finite result:
prod = accumulator( z );
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
var accumulator = incrprod();

var prod = accumulator( x );
// returns 4.0e-302

// Transient underflow:
prod = accumulator( y );
// returns 0.0

// Recover a non-zero result:
prod = accumulator( z );
// returns 7.2e-304
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   For long running accumulations or accumulations of either large or small numbers, care should be taken to prevent overflow and underflow. Note, however, that overflow/underflow may be transient, as the accumulator does not use a double-precision floating-point number to store an accumulated product. Instead, the accumulator splits an accumulated product into a normalized **fraction** and **exponent** and updates each component separately. Doing so guards against a loss in precision.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrprod = require( '@stdlib/stats/incr/prod' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrprod();

// For each simulated value, update the product...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

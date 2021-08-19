<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# incrnansumabs2

> Compute a sum of squared absolute values incrementally, ignoring `NaN` values.

<section class="intro">

The sum of squared absolute values is defined as

<!-- <equation class="equation" label="eq:sum_squared_absolute_values" align="center" raw="s = \sum_{i=0}^{n-1} x_i^2" alt="Equation for the sum of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} x_i^2" data-equation="eq:sum_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e004d6b9831fc769f3f50479c69e8d7c2afdbe2/lib/node_modules/@stdlib/stats/incr/nansumabs2/docs/img/equation_sum_squared_absolute_values.svg" alt="Equation for the sum of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnansumabs2 = require( '@stdlib/stats/incr/nansumabs2' );
```

#### incrnansumabs2()

Returns an accumulator `function` which incrementally computes a sum of squared absolute values, ignoring `NaN` values.

```javascript
var accumulator = incrnansumabs2();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrnansumabs2();

var sum = accumulator( 2.0 );
// returns 4.0

sum = accumulator( -1.0 );
// returns 5.0

sum = accumulator( NaN );
// returns 5.0

sum = accumulator( -3.0 );
// returns 14.0

sum = accumulator();
// returns 14.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   For long running accumulations or accumulations of large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrnansumabs2 = require( '@stdlib/stats/incr/nansumabs2' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnansumabs2();

// For each simulated datum, update the sum...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

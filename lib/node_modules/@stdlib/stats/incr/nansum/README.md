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

# incrnansum

> Compute a sum incrementally, ignoring `NaN` values.

<section class="intro">

The sum is defined as

<!-- <equation class="equation" label="eq:sum" align="center" raw="s = \sum_{i=0}^{n-1} x_i" alt="Equation for the sum."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} x_i" data-equation="eq:sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@eb48b7659e2110aba9fb9c120942cee2e0c4bf5c/lib/node_modules/@stdlib/stats/incr/nansum/docs/img/equation_sum.svg" alt="Equation for the sum.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnansum = require( '@stdlib/stats/incr/nansum' );
```

#### incrnansum()

Returns an accumulator `function` which incrementally computes a sum, ignoring `NaN` values.

```javascript
var accumulator = incrnansum();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrnansum();

var sum = accumulator( 2.0 );
// returns 2.0

sum = accumulator( 1.0 );
// returns 3.0

sum = accumulator( NaN );
// returns 3.0

sum = accumulator( 3.0 );
// returns 6.0

sum = accumulator();
// returns 6.0
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
var incrnansum = require( '@stdlib/stats/incr/nansum' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnansum();

// For each simulated datum, update the sum...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.2 ) {
        v = NaN;
    } else {
        v = randu() * 100.0;
    }
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<section class="links">

</section>

<!-- /.links -->

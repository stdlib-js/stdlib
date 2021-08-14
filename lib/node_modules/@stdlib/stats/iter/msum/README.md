<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# itermsum

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving sum.

<section class="intro">

For a window of size `W`, the moving sum is defined as

<!-- <equation class="equation" label="eq:moving_sum" align="center" raw="s = \sum_{i=0}^{W-1} x_i" alt="Equation for the moving sum."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} x_i" data-equation="eq:moving_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@649f1d940ae76f02c3c2fc97e52f59b452e2e15f/lib/node_modules/@stdlib/stats/iter/msum/docs/img/equation_moving_sum.svg" alt="Equation for the moving sum.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itermsum = require( '@stdlib/stats/iter/msum' );
```

#### itermsum( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving sum. The `W` parameter defines the number of iterated values over which to compute the moving sum.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermsum( arr, 3 );

// Fill the window...
var s = it.next().value; // [2.0]
// returns 2.0

s = it.next().value; // [2.0, 1.0]
// returns 3.0

s = it.next().value; // [2.0, 1.0, 3.0]
// returns 6.0

// Window begins sliding...
s = it.next().value; // [1.0, 3.0, -7.0]
// returns -3.0

s = it.next().value; // [3.0, -7.0, -5.0]
// returns -9.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **at least** `W-1` future invocations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itermsum = require( '@stdlib/stats/iter/msum' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving sum:
var it = itermsum( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'sum: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->

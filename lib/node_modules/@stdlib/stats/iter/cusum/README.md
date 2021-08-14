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

# itercusum

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum.

<section class="intro">

The cumulative sum is defined as

<!-- <equation class="equation" label="eq:cumulative_sum" align="center" raw="\begin{align*} s_0 &= x_0 \\ s_1 &= x_1 + s_0 \\ s_2 &= x_2 + s_1 \\ s_n &= x_n + s_{n-1} = x_n + \sum_{i=0}^{n-1} x_i \end{align*}" alt="Equation for the cumulative sum."> -->

<div class="equation" align="center" data-raw-text="\begin{align*} s_0 &amp;= x_0 \\ s_1 &amp;= x_1 + s_0 \\ s_2 &amp;= x_2 + s_1 \\ s_n &amp;= x_n + s_{n-1} = x_n + \sum_{i=0}^{n-1} x_i \end{align*}" data-equation="eq:cumulative_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@755a26b39bb6429f6d0b6dd8d13bd0bd1ec5ba35/lib/node_modules/@stdlib/stats/iter/cusum/docs/img/equation_cumulative_sum.svg" alt="Equation for the cumulative sum.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercusum = require( '@stdlib/stats/iter/cusum' );
```

#### itercusum( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercusum( arr );

var s = it.next().value;
// returns 2.0

s = it.next().value;
// returns 3.0

s = it.next().value;
// returns 6.0

s = it.next().value;
// returns -1.0

s = it.next().value;
// returns -6.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itercusum = require( '@stdlib/stats/iter/cusum' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative sum:
var it = itercusum( rand );

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

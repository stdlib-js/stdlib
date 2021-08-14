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

# itercuprod

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative product.

<section class="intro">

The cumulative product is defined as

<!-- <equation class="equation" label="eq:cumulative_product" align="center" raw="\begin{align*} p_0 &= x_0 \\ p_1 &= x_1 \cdot p_0 \\ p_2 &= x_2 \cdot p_1 \\ p_n &= x_n \cdot p_{n-1} = x_n \cdot \prod_{i=0}^{n-1} x_i \end{align*}" alt="Equation for the cumulative product."> -->

<div class="equation" align="center" data-raw-text="\begin{align*} p_0 &amp;= x_0 \\ p_1 &amp;= x_1 \cdot p_0 \\ p_2 &amp;= x_2 \cdot p_1 \\ p_n &amp;= x_n \cdot p_{n-1} = x_n \cdot \prod_{i=0}^{n-1} x_i \end{align*}" data-equation="eq:cumulative_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e70489fe2d16d2496f77b516c791cf5c0c078ae1/lib/node_modules/@stdlib/stats/iter/cuprod/docs/img/equation_cumulative_product.svg" alt="Equation for the cumulative product.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercuprod = require( '@stdlib/stats/iter/cuprod' );
```

#### itercuprod( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative product.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercuprod( arr );

var p = it.next().value;
// returns 2.0

p = it.next().value;
// returns 2.0

p = it.next().value;
// returns 6.0

p = it.next().value;
// returns -42.0

p = it.next().value;
// returns 210.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   For [iterators][mdn-iterator-protocol] which can generate many values or which may output large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itercuprod = require( '@stdlib/stats/iter/cuprod' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative product:
var it = itercuprod( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'prod: %d', v.value );
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

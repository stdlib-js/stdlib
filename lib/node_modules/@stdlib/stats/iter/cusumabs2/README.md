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

# itercusumabs2

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum of squared absolute values.

<section class="intro">

The cumulative sum of squared absolute values is defined as

<!-- <equation class="equation" label="eq:cumulative_sum_of_squared_absolute_values" align="center" raw="\begin{align*} s_0 &= x_0^2 \\ s_1 &= x_1^2 + s_0 \\ s_2 &= x_2^2 + s_1 \\ s_n &= x_n^2 + s_{n-1} = x_n^2 + \sum_{i=0}^{n-1} x_i^2 \end{align*}" alt="Equation for the cumulative sum of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="\begin{align*} s_0 &amp;= x_0^2 \\ s_1 &amp;= x_1^2 + s_0 \\ s_2 &amp;= x_2^2 + s_1 \\ s_n &amp;= x_n^2 + s_{n-1} = x_n^2 + \sum_{i=0}^{n-1} x_i^2 \end{align*}" data-equation="eq:cumulative_sum_of_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@daba99f62ed8ff3f49cf13b209c692fd9ccb6c6f/lib/node_modules/@stdlib/stats/iter/cusumabs2/docs/img/equation_cumulative_sum_of_squared_absolute_values.svg" alt="Equation for the cumulative sum of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercusumabs2 = require( '@stdlib/stats/iter/cusumabs2' );
```

#### itercusumabs2( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum of squared absolute values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercusumabs2( arr );

var s = it.next().value;
// returns 4.0

s = it.next().value;
// returns 5.0

s = it.next().value;
// returns 14.0

s = it.next().value;
// returns 63.0

s = it.next().value;
// returns 88.0
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
var itercusumabs2 = require( '@stdlib/stats/iter/cusumabs2' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative sum of squared absolute values:
var it = itercusumabs2( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'sumabs2: %d', v.value );
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

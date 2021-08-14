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

# itermmeanabs2

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving [arithmetic mean][arithmetic-mean] of squared absolute values.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] of squared absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_squared_absolute_values" align="center" raw="m = \frac{1}{W} \sum_{i=0}^{W-1} x_i^2" alt="Equation for the arithmetic mean of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="m = \frac{1}{W} \sum_{i=0}^{W-1} x_i^2" data-equation="eq:arithmetic_mean_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c1d2841d603469ac8c307dfcc77e66e7286fba1b/lib/node_modules/@stdlib/stats/iter/mmeanabs2/docs/img/equation_arithmetic_mean_squared_absolute_values.svg" alt="Equation for the arithmetic mean of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itermmeanabs2 = require( '@stdlib/stats/iter/mmeanabs2' );
```

#### itermmeanabs2( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving [arithmetic mean][arithmetic-mean] of squared absolute values. The `W` parameter defines the number of iterated values over which to compute the moving mean.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermmeanabs2( arr, 3 );

// Fill the window...
var m = it.next().value; // [2.0]
// returns 4.0

m = it.next().value; // [2.0, 1.0]
// returns 2.5

m = it.next().value; // [2.0, 1.0, 3.0]
// returns ~4.67

// Window begins sliding...
m = it.next().value; // [1.0, 3.0, -7.0]
// returns ~19.67

m = it.next().value; // [3.0, -7.0, -5.0]
// returns ~27.67
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
var itermmeanabs2 = require( '@stdlib/stats/iter/mmeanabs2' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving mean of squared absolute values:
var it = itermmeanabs2( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'meanabs2: %d', v.value );
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

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->

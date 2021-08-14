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

# itercumeanabs2

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean] of squared absolute values.

<section class="intro">

The cumulative [arithmetic mean][arithmetic-mean] of squared absolute values is defined as

<!-- <equation class="equation" label="eq:cumulative_arithmetic_mean_squared_absolute_values" align="center" raw="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i^2" alt="Equation for the cumulative arithmetic mean of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i^2" data-equation="eq:cumulative_arithmetic_mean_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d3d95236f834a139a4cb700b0acc4f1667a9ffa5/lib/node_modules/@stdlib/stats/iter/cumeanabs2/docs/img/equation_cumulative_arithmetic_mean_squared_absolute_values.svg" alt="Equation for the cumulative arithmetic mean of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercumeanabs2 = require( '@stdlib/stats/iter/cumeanabs2' );
```

#### itercumeanabs2( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean] of squared absolute values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumeanabs2( arr );

var m = it.next().value;
// returns 4.0

m = it.next().value;
// returns 2.5

m = it.next().value;
// returns ~4.67

m = it.next().value;
// returns 15.75

m = it.next().value;
// returns 17.6
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
var itercumeanabs2 = require( '@stdlib/stats/iter/cumeanabs2' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative mean of squared absolute values:
var it = itercumeanabs2( rand );

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

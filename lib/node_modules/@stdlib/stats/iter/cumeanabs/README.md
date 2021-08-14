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

# itercumeanabs

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean] of absolute values.

<section class="intro">

The cumulative [arithmetic mean][arithmetic-mean] of absolute values is defined as

<!-- <equation class="equation" label="eq:cumulative_arithmetic_mean_absolute_values" align="center" raw="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n |x_i|" alt="Equation for the cumulative arithmetic mean of absolute values."> -->

<div class="equation" align="center" data-raw-text="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n |x_i|" data-equation="eq:cumulative_arithmetic_mean_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5979d3a5ef6baf7af9747de0630d8101a025da65/lib/node_modules/@stdlib/stats/iter/cumeanabs/docs/img/equation_cumulative_arithmetic_mean_absolute_values.svg" alt="Equation for the cumulative arithmetic mean of absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercumeanabs = require( '@stdlib/stats/iter/cumeanabs' );
```

#### itercumeanabs( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean] of absolute values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumeanabs( arr );

var m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 1.5

m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 3.25

m = it.next().value;
// returns 3.6
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
var itercumeanabs = require( '@stdlib/stats/iter/cumeanabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative mean of absolute values:
var it = itercumeanabs( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'meanabs: %d', v.value );
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

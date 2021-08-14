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

# itercumean

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean].

<section class="intro">

The cumulative [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:cumulative_arithmetic_mean" align="center" raw="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i" alt="Equation for the cumulative arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i" data-equation="eq:cumulative_arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@409c465a46090d66ce8ea7980f14e8f28a95e9be/lib/node_modules/@stdlib/stats/iter/cumean/docs/img/equation_cumulative_arithmetic_mean.svg" alt="Equation for the cumulative arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercumean = require( '@stdlib/stats/iter/cumean' );
```

#### itercumean( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumean( arr );

var m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 1.5

m = it.next().value;
// returns 2.0

m = it.next().value;
// returns -0.25

m = it.next().value;
// returns -1.2
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
var itercumean = require( '@stdlib/stats/iter/cumean' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative mean:
var it = itercumean( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'mean: %d', v.value );
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

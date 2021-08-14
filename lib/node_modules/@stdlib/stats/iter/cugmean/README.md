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

# itercugmean

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [geometric mean][geometric-mean].

<section class="intro">

The [geometric mean][geometric-mean] is defined as the nth root of a product of _n_ numbers.

<!-- <equation class="equation" label="eq:geometric_mean" align="center" raw="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" alt="Equation for the geometric mean."> -->

<div class="equation" align="center" data-raw-text="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" data-equation="eq:geometric_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b38de7dff069561da1cb4710c85fc74433b7eaaa/lib/node_modules/@stdlib/stats/iter/cugmean/docs/img/equation_geometric_mean.svg" alt="Equation for the geometric mean.">
    <br>
</div>

<!-- </equation> --> 

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercugmean = require( '@stdlib/stats/iter/cugmean' );
```

#### itercugmean( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [geometric mean][geometric-mean].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, 7.0, 5.0 ] );
var it = itercugmean( arr );

var v = it.next().value;
// returns 2.0

v = it.next().value;
// returns ~1.41

v = it.next().value;
// returns ~1.82

v = it.next().value;
// returns ~2.55

v = it.next().value;
// returns ~2.91
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`) or negative, the function returns `NaN` for **all** future iterations. If non-numeric and/or negative iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles such values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itercugmean = require( '@stdlib/stats/iter/cugmean' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( 0.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative geometric mean:
var it = itercugmean( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'gmean: %d', v.value );
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

[geometric-mean]: https://en.wikipedia.org/wiki/Geometric_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->

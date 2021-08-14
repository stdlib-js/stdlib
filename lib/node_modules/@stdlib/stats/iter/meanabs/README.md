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

# itermeanabs

> Compute the [arithmetic mean][arithmetic-mean] of absolute values for all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The [arithmetic mean][arithmetic-mean] of absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_absolute_values" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} |x_i|" alt="Equation for the arithmetic mean of absolute values."> -->

<div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} |x_i|" data-equation="eq:arithmetic_mean_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@896f937c33114bc5971c1cf87c60fbdbbb66f6ba/lib/node_modules/@stdlib/stats/iter/meanabs/docs/img/equation_arithmetic_mean_absolute_values.svg" alt="Equation for the arithmetic mean of absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itermeanabs = require( '@stdlib/stats/iter/meanabs' );
```

#### itermeanabs( iterator )

Computes the [arithmetic mean][arithmetic-mean] of absolute values for all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1.0, -2.0, -3.0, 4.0 ] );

var m = itermeanabs( arr );
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itermeanabs = require( '@stdlib/stats/iter/meanabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the arithmetic mean of absolute values:
var m = itermeanabs( rand );
// returns <number>

console.log( 'meanabs: %d.', m );
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

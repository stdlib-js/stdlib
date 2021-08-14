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

# itercuhmean

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [harmonic mean][harmonic-mean].

<section class="intro">

The [harmonic mean][harmonic-mean] of positive real numbers `x_0, x_1, ..., x_{n-1}` is defined as

<!-- <equation class="equation" label="eq:harmonic_mean" align="center" raw="\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}\end{align}" alt="Equation for the harmonic mean."> -->

<div class="equation" align="center" data-raw-text="\begin{align}H &amp;= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &amp;= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &amp;= \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}\end{align}" data-equation="eq:harmonic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c00986cca2dbfac62b50df74d56662f485b6d4e5/lib/node_modules/@stdlib/stats/iter/cuhmean/docs/img/equation_harmonic_mean.svg" alt="Equation for the harmonic mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercuhmean = require( '@stdlib/stats/iter/cuhmean' );
```

#### itercuhmean( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [harmonic mean][harmonic-mean].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, 7.0, 5.0 ] );
var it = itercuhmean( arr );

var v = it.next().value;
// returns 2.0

v = it.next().value;
// returns ~1.33

v = it.next().value;
// returns ~1.64

v = it.next().value;
// returns ~2.02

v = it.next().value;
// returns ~2.30
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles such values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itercuhmean = require( '@stdlib/stats/iter/cuhmean' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( 0.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative harmonic mean:
var it = itercuhmean( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'hmean: %d', v.value );
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

[harmonic-mean]: https://en.wikipedia.org/wiki/Harmonic_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->

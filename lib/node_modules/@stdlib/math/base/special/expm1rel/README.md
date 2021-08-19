<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# expm1rel

> Compute the relative error exponential.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The relative error exponential is defined as

<!-- <equation class="equation" label="eq:relative_error_exponential" align="center" raw="f(x) = \frac{e^x - 1}{x}" alt="Equation for the relative error exponential."> -->

<div class="equation" align="center" data-raw-text="f(x) = \frac{e^x - 1}{x}" data-equation="eq:relative_error_exponential">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@237a80443a932a41f0195d0b9fc7699aa8c8e417/lib/node_modules/@stdlib/math/base/special/expm1rel/docs/img/equation_relative_error_exponential.svg" alt="Equation for the relative error exponential.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var expm1rel = require( '@stdlib/math/base/special/expm1rel' );
```

#### expm1rel( x )

Computes the relative error exponential.

```javascript
var v = expm1rel( 0.0 );
// returns 1.0

v = expm1rel( 1.0 );
// returns ~1.718

v = expm1rel( -1.0 );
// returns ~0.632

v = expm1rel( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When `x` is near zero, `exp(x)-1` can suffer catastrophic cancellation (i.e., a significant loss in precision). `expm1rel` avoids such a loss in precision.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var expm1rel = require( '@stdlib/math/base/special/expm1rel' );

var x;
var y;
var a;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    a = x.toFixed( 3 );
    y = expm1rel( x );
    console.log( '(e^%d - 1)/%d = %d', a, a, y );
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

</section>

<!-- /.links -->

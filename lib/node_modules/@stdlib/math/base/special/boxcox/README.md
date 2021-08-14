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

# boxcox

> Compute a one-parameter [Box-Cox transformation][box-cox-transformation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The one-parameter [Box-Cox transformation][box-cox-transformation] is defined as 

<!-- <equation class="equation" label="eq:boxcox_transformation_one_parameter" align="center" raw="y^{\lambda} = \begin{cases}\frac{y^{\lambda} - 1}{\lambda} & \textrm{if}\ \lambda \neq 0 \\ \ln(y) & \textrm{if}\ \lambda = 0 \end{cases}" alt="One-Parameter Box-Cox Transformation"> -->

<div class="equation" align="center" data-raw-text="y^{\lambda} = \begin{cases}\frac{y^{\lambda} - 1}{\lambda} & \textrm{if}\ \lambda \neq 0 \\ \ln(y) & \textrm{if}\ \lambda = 0 \end{cases}" data-equation="eq:boxcox_transformation_one_parameter">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1cd982bdbe87913bbb66e9d6a79b0acb0fb89616/lib/node_modules/@stdlib/math/base/special/boxcox/docs/img/equation_boxcox_transformation_one_parameter.svg" alt="One-Parameter Box-Cox Transformation" />
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var boxcox = require( '@stdlib/math/base/special/boxcox' );
```

#### boxcox( x, lambda )

Computes a one-parameter [Box-Cox transformation][box-cox-transformation].

```javascript
var v = boxcox( 1.0, 2.5 );
// returns 0.0

v = boxcox( 4.0, 2.5 );
// returns 12.4

v = boxcox( 10.0, 2.5 );
// returns ~126.0911

v = boxcox( 2.0, 0.0 );
// returns ~0.6931

v = boxcox( -1.0, 2.5 );
// returns NaN

v = boxcox( 0.0, -1.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/incrspace' );
var boxcox = require( '@stdlib/math/base/special/boxcox' );

var x = incrspace( -1.0, 10.0, 1.0 );
var l = incrspace( -0.5, 5.0, 0.5 );
var b;
var i;
var j;

for ( i = 0; i < x.length; i++ ) {
    for ( j = 0; j < l.length; j++ ) {
        b = boxcox( x[ i ], l[ j ] );
        console.log( 'boxcox(%d, %d) = %d', x[ i ], l[ j ], b );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Box, G. E. P., and D. R. Cox. 1964. "An Analysis of Transformations." _Journal of the Royal Statistical Society. Series B (Methodological)_ 26 (2). \[Royal Statistical Society, Wiley]: 211–52. <http://www.jstor.org/stable/2984418>.

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[box-cox-transformation]: https://en.wikipedia.org/wiki/Power_transform#Box-Cox_transformation

</section>

<!-- /.links -->

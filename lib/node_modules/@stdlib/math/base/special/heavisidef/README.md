<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Heaviside Function

> Evaluate the [Heaviside function][heaviside-function] for a single-precision floating-point number.

<section class="intro">

The [Heaviside function][heaviside-function] is defined as

<!-- <equation class="equation" label="eq:heaviside_function" align="center" raw="H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function."> -->

```math
H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} 1 &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function.svg" alt="Heaviside function.">
    <br>
</div> -->

<!-- </equation> -->

and is discontinuous at `0`. Depending on the context, the [Heaviside function][heaviside-function] may be defined as a continuous function. To define the [Heaviside function][heaviside-function] such that the function has rotational symmetry,

<!-- <equation class="equation" label="eq:heaviside_function_half_maximum" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function half-maximum."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ \frac{1}{2} &amp; \textrm{if}\ x = 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_half_maximum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_half_maximum.svg" alt="Heaviside function half-maximum.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a left-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_left_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}" alt="Heaviside function left-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \leq 0\end{cases}" data-equation="eq:heaviside_function_left_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_left_continuous.svg" alt="Heaviside function left-continuous.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a right-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_right_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function right-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_right_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_right_continuous.svg" alt="Heaviside function right-continuous.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var heavisidef = require( '@stdlib/math/base/special/heavisidef' );
```

#### heavisidef( x\[, continuity] )

Evaluates the [Heaviside function][heaviside-function] for a single-precision floating-point number.

```javascript
var v = heavisidef( 3.14 );
// returns 1.0

v = heavisidef( -3.14 );
// returns 0.0

v = heavisidef( NaN );
// returns NaN
```

The `continuity` parameter may be one of the following values:

-   `'half-maximum'`: if `x == 0`, the function returns `0.5`.
-   `'left-continuous'`: if `x == 0`, the function returns `0.0`.
-   `'right-continuous'`: if `x == 0`, the function returns `1.0`.

By default, the function is discontinuous at `0`.

```javascript
var v = heavisidef( 0.0 );
// returns NaN
```

To define the [Heaviside function][heaviside-function] as a continuous function, set the `continuity` parameter.

```javascript
var v = heavisidef( 0.0, 'half-maximum' );
// returns 0.5

v = heavisidef( 0.0, 'left-continuous' );
// returns 0.0

v = heavisidef( 0.0, 'right-continuous' );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var heavisidef = require( '@stdlib/math/base/special/heavisidef' );

var x = linspace( -10.0, 10.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'H(%d) = %f', x[ i ], heavisidef( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[heaviside-function]: https://en.wikipedia.org/wiki/Heaviside_step_function

</section>

<!-- /.links -->

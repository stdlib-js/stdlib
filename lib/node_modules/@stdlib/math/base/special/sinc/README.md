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

# sinc

> Compute the [cardinal sine][sinc] of a number.

<section class="intro">

The normalized [cardinal sine][sinc] function is defined as

<!-- <equation class="equation" label="eq:sinc_function" align="center" raw="\operatorname{sinc}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} & \textrm{if}\ x \neq 0 \\ 1 & \textrm{if}\ x = 0 \end{cases}" alt="Sinc function"> -->

<div class="equation" align="center" data-raw-text="\operatorname{sinc}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} &amp; \textrm{if}\ x \neq 0 \\ 1 &amp; \textrm{if}\ x = 0 \end{cases}" data-equation="eq:sinc_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/sinc/docs/img/equation_sinc_function.svg" alt="Sinc function">
    <br>
</div>

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sinc = require( '@stdlib/math/base/special/sinc' );
```

#### sinc( x )

Computes the normalized [cardinal sine][sinc] of a `number`.

```javascript
var v = sinc( 0.5 );
// returns ~0.637

v = sinc( -1.2 );
// returns ~-0.156

v = sinc( 0.0 );
// returns 1.0

v = sinc( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var sinc = require( '@stdlib/math/base/special/sinc' );

var x = linspace( -5.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( sinc( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[sinc]: https://en.wikipedia.org/wiki/Sinc_function

</section>

<!-- /.links -->

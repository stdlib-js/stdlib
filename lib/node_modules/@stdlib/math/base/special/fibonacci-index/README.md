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

# Fibonacci Number Index

> Compute the [Fibonacci number][fibonacci-number] index.

<section class="intro">

The [Fibonacci number][fibonacci-number] index is given by

<!-- <equation class="equation" label="eq:fibonacci_number_index" align="center" raw="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" alt="Formula to compute the Fibonacci number index."> -->

<div class="equation" align="center" data-raw-text="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" data-equation="eq:fibonacci_number_index">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/fibonacci-index/docs/img/equation_fibonacci_number_index.svg" alt="Formula to compute the Fibonacci number index.">
    <br>
</div>

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `F > 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fibonacciIndex = require( '@stdlib/math/base/special/fibonacci-index' );
```

#### fibonacciIndex( F )

Computes the [Fibonacci number][fibonacci-number] index for `F_n > 1`.

```javascript
var n = fibonacciIndex( 2 );
// returns 3

n = fibonacciIndex( 3 );
// returns 4

n = fibonacciIndex( 5 );
// returns 5
```

If provided either a non-integer or `F_n <= 1`, the function returns `NaN`. 

```javascript
var n = fibonacciIndex( -1 );
// returns NaN

n = fibonacciIndex( 3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var n = fibonacciIndex( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fibonacciIndex = require( '@stdlib/math/base/special/fibonacci-index' );

var F1;
var F2;
var FN;
var n;
var i;

F1 = 1;
F2 = 1;
for ( i = 3; i < 79; i++ ) {
    FN = F1 + F2;
    F1 = F2;
    F2 = FN;
    n = fibonacciIndex( FN );
    console.log( 'n(%d) = %d', FN, n );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

</section>

<!-- /.links -->

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

# Fibonacci

> Compute the nth [Fibonacci number][fibonacci-number].

<section class="intro">

The [Fibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:fibonacci_sequence" align="center" raw="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" alt="Fibonacci sequence"> -->

<div class="equation" align="center" data-raw-text="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" data-equation="eq:fibonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/fibonacci/docs/img/equation_fibonacci_sequence.svg" alt="Fibonacci sequence">
    <br>
</div>

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:fibonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2}" alt="Fibonacci sequence recurrence relation"> -->

<div class="equation" align="center" data-raw-text="F_n = F_{n-1} + F_{n-2}" data-equation="eq:fibonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/fibonacci/docs/img/equation_fibonacci_recurrence_relation.svg" alt="Fibonacci sequence recurrence relation">
    <br>
</div>

<!-- </equation> -->

with seed values `F_0 = 0` and `F_1 = 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
```

#### fibonacci( n )

Computes the nth [Fibonacci number][fibonacci-number].

```javascript
var v = fibonacci( 0 );
// returns 0

v = fibonacci( 1 );
// returns 1

v = fibonacci( 2 );
// returns 1

v = fibonacci( 3 );
// returns 2

v = fibonacci( 78 );
// returns 8944394323791464
```

If `n > 78`, the function returns `NaN`, as larger [Fibonacci numbers][fibonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = fibonacci( 79 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = fibonacci( 3.14 );
// returns NaN

v = fibonacci( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = fibonacci( NaN );
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
var fibonacci = require( '@stdlib/math/base/special/fibonacci' );

var v;
var i;

for ( i = 0; i < 79; i++ ) {
    v = fibonacci( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

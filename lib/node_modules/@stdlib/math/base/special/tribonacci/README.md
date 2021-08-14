<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Tribonacci

> Compute the nth [Tribonacci number][tribonacci-number].

<section class="intro">

The [Tribonacci numbers][tribonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:tribonacci_sequence" align="center" raw="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" alt="Tribonacci sequence"> -->

<div class="equation" align="center" data-raw-text="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" data-equation="eq:tribonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3249a68fb57cd71148f87ef3b2774be70a04d80a/lib/node_modules/@stdlib/math/base/special/tribonacci/docs/img/equation_tribonacci_sequence.svg" alt="Tribonacci sequence">
    <br>
</div>

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:tribonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2} + F_{n-3}" alt="Tribonacci sequence recurrence relation"> -->

<div class="equation" align="center" data-raw-text="F_n = F_{n-1} + F_{n-2} + F_{n-3}" data-equation="eq:tribonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3249a68fb57cd71148f87ef3b2774be70a04d80a/lib/node_modules/@stdlib/math/base/special/tribonacci/docs/img/equation_tribonacci_recurrence_relation.svg" alt="Tribonacci sequence recurrence relation">
    <br>
</div>

<!-- </equation> -->

with seed values `F_0 = 0`, `F_1 = 0`, and `F_2 = 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var tribonacci = require( '@stdlib/math/base/special/tribonacci' );
```

#### tribonacci( n )

Computes the nth [Tribonacci number][tribonacci-number].

```javascript
var v = tribonacci( 0 );
// returns 0

v = tribonacci( 1 );
// returns 0

v = tribonacci( 2 );
// returns 1

v = tribonacci( 3 );
// returns 1

v = tribonacci( 63 );
// returns 8607945812375585
```

If `n > 63`, the function returns `NaN`, as larger [Tribonacci numbers][tribonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = tribonacci( 64 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = tribonacci( 3.14 );
// returns NaN

v = tribonacci( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = tribonacci( NaN );
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
var tribonacci = require( '@stdlib/math/base/special/tribonacci' );

var v;
var i;

for ( i = 0; i < 64; i++ ) {
    v = tribonacci( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[tribonacci-number]: https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

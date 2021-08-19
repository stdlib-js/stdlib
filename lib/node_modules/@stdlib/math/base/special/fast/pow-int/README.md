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

# Exponential Function

> [Exponential function][exponential-function].

<section class="intro">

The [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:exponential_function" align="center" raw="y = b^x" alt="Exponential function"> -->

<div class="equation" align="center" data-raw-text="y = b^x" data-equation="eq:exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c1bdd27898df04d752ddb2dca37ca049e4c94d9b/lib/node_modules/@stdlib/math/base/special/fast/pow-int/docs/img/equation_exponential_function.svg" alt="Exponential function">
    <br>
</div>

<!-- </equation> -->

where `b` is the **base** and `x` is the **exponent**.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pow = require( '@stdlib/math/base/special/fast/pow-int' );
```

#### pow( base, exponent )

Evaluates the [exponential function][exponential-function] given a signed 32-bit integer `exponent`.

```javascript
var v = pow( 2.0, 3 );
// returns 8.0

v = pow( 100.0, 0 );
// returns 1.0

v = pow( 3.14, 1 );
// returns 3.14

v = pow( -3.14, 1 );
// returns -3.14

v = pow( 2.0, -2 );
// returns 0.25

v = pow( NaN, 3 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This implementation is **not** recommended for high-precision applications due to error accumulation. As a trivial example, consider

    ```javascript
    var v = pow( 10.0, 308 );
    // returns 1.0000000000000006e+308
    ```

    where the expected result is `1.0e+308`.

-   If provided a negative `exponent`, the implementation first computes the reciprocal of the `base` and then evaluates the exponential function. This can introduce significant error. For example,

    ```javascript
    var v = pow( -459, -98 );
    // returns 1.3878956588399783e-261
    ```

    where the expected result is `1.3878956588399598e-261`. From the bit sequences,

    ```text
    0000100111000101110110100000000111001011001011010001000101010110
    0000100111000101110110100000000111001011001011010001000100000100
    ```

    one observes that the returned value differs in the last `7` bits of the significand.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var pow = require( '@stdlib/math/base/special/fast/pow-int' );

var x;
var y;
var v;

x = 10.0;
for ( y = 0; y < 309; y++ ) {
    v = pow( x, y );
    console.log( '%d^%d = %d', x, y, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

</section>

<!-- /.links -->

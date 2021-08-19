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
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/pow/docs/img/equation_exponential_function.svg" alt="Exponential function">
    <br>
</div>

<!-- </equation> -->

where `b` is the **base** and `x` is the **exponent**.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pow = require( '@stdlib/math/base/special/pow' );
```

#### pow( base, exponent )

Evaluates the [exponential function][exponential-function].

```javascript
var v = pow( 2.0, 3.0 );
// returns 8.0

v = pow( 4.0, 0.5 );
// returns 2.0

v = pow( 100.0, 0.0 );
// returns 1.0

v = pow( 3.141592653589793, 5.0 );
// returns ~306.0197

v = pow( 3.141592653589793, -0.2 );
// returns ~0.7954

v = pow( NaN, 3.0 );
// returns NaN

v = pow( 5.0, NaN );
// returns NaN

v = pow( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );

var b;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    b = round( randu()*10.0 );
    x = round( randu()*10.0 ) - 5.0;
    console.log( '%d^%d = %d', b, x, pow( b, x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

</section>

<!-- /.links -->

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

# powm1

> Evaluate `bˣ - 1`.

<section class="intro">

<!-- <equation class="equation" label="eq:exponential_function_minus_one" align="center" raw="y = b^x - 1" alt="Exponential function minus one"> -->

<div class="equation" align="center" data-raw-text="y = b^x - 1" data-equation="eq:exponential_function_minus_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/powm1/docs/img/equation_exponential_function_minus_one.svg" alt="Exponential function minus one">
    <br>
</div>

<!-- </equation> -->

When `b` is close to `1` and/or `x` is small, this implementation is more accurate than naively computing `bˣ` minus `1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var powm1 = require( '@stdlib/math/base/special/powm1' );
```

#### powm1( b, x )

Evaluates `bˣ - 1`.

```javascript
var y = powm1( 2.0, 3.0 );
// returns 7.0

y = powm1( 4.0, 0.5 );
// returns 1.0

y = powm1( 0.0, 100.0 );
// returns -1.0

y = powm1( 100.0, 0.0 );
// returns 0.0

y = powm1( 0.0, 0.0 );
// returns 0.0

y = powm1( 3.141592653589793, 5.0 );
// returns ~305.0197

y = powm1( NaN, 3.0 );
// returns NaN

y = powm1( 5.0, NaN );
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
var powm1 = require( '@stdlib/math/base/special/powm1' );

var b;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    b = round( randu()*10.0 );
    x = round( randu()*10.0 ) - 5.0;
    y = powm1( b, x );
    console.log( '%d^%d - 1 = %d', b, x, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

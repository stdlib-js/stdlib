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

# Binary Logarithm

> Evaluate the [binary logarithm][binary-logarithm].

<section class="intro">

The [binary logarithm][binary-logarithm] (logarithm with base 2) is defined for any positive real number as

<!-- <equation class="equation" label="eq:binary_logarithm" align="center" raw="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" alt="Equation for the binary logarithm."> -->

<div class="equation" align="center" data-raw-text="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" data-equation="eq:binary_logarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8cb4d022f6163be6523964802725ed2a74f2497b/lib/node_modules/@stdlib/math/base/special/log2/docs/img/equation_binary_logarithm.svg" alt="Equation for the binary logarithm.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var log2 = require( '@stdlib/math/base/special/log2' );
```

#### log2( x )

Evaluates the [binary logarithm][binary-logarithm].

```javascript
var v = log2( 4.0 );
// returns 2.0

v = log2( 0.0 );
// returns -Infinity

v = log2( Infinity );
// returns Infinity

v = log2( NaN );
// returns NaN
```

For negative numbers, the [binary logarithm][binary-logarithm] is **not** defined.

```javascript
var v = log2( -4.0 );
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
var log2 = require( '@stdlib/math/base/special/log2' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'log2(%d) = %d', x, log2( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[binary-logarithm]: https://en.wikipedia.org/wiki/Binary_logarithm

</section>

<!-- /.links -->

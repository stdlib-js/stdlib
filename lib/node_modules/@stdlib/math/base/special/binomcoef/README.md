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

# Binomial Coefficient

> Compute the [binomial coefficient][binomial-coefficient].

<section class="intro">

The [binomial coefficient][binomial-coefficient] of two nonnegative integers `n` and `k` is defined as

<!-- <equation class="equation" label="eq:binomial_coefficient" align="center" raw="\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n" alt="Factorial formula for the Binomial coefficient."> -->

<div class="equation" align="center" data-raw-text="\binom {n}{k} = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n" data-equation="eq:binomial_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binomcoef/docs/img/equation_binomial_coefficient.svg" alt="Factorial formula for the Binomial coefficient.">
    <br>
</div>

<!-- </equation> -->

The [binomial coefficient][binomial-coefficient] can be generalized to negative integers `n` as follows:

<!-- <equation class="equation" label="eq:binomial_coefficient_negative_integers" align="center" raw="\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)" alt="Generalization of the binomial coefficient to negative n."> -->

<div class="equation" align="center" data-raw-text="\binom {-n}{k} = (-1)^{k} \binom{n + k - 1}{k} = (-1)^{k} \left(\!\!{\binom {n}{k}}\!\!\right)" data-equation="eq:binomial_coefficient_negative_integers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/binomcoef/docs/img/equation_binomial_coefficient_negative_integers.svg" alt="Generalization of the binomial coefficient to negative n.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binomcoef = require( '@stdlib/math/base/special/binomcoef' );
```

#### binomcoef( n, k )

Evaluates the [binomial coefficient][binomial-coefficient] of two integers `n` and `k`.

```javascript
var v = binomcoef( 8, 2 );
// returns 28

v = binomcoef( 0, 0 );
// returns 1

v = binomcoef( -4, 2 );
// returns 10

v = binomcoef( 5, 3 );
// returns 10

v = binomcoef( NaN, 3 );
// returns NaN

v = binomcoef( 5, NaN );
// returns NaN

v = binomcoef( NaN, NaN );
// returns NaN
```

For negative `k`, the function returns `0`.

```javascript
var v = binomcoef( 2, -1 );
// returns 0

v = binomcoef( -3, -1 );
// returns 0
```

The function returns `NaN` for non-integer `n` or `k`.

```javascript
var v = binomcoef( 2, 1.5 );
// returns NaN

v = binomcoef( 5.5, 2 );
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
var binomcoef = require( '@stdlib/math/base/special/binomcoef' );

var n;
var k;
var i;

for ( i = 0; i < 100; i++ ) {
    n = round( (randu()*30.0) - 10.0 );
    k = round( randu()*20.0 );
    console.log( '%d choose %d = %d', n, k, binomcoef( n, k ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[binomial-coefficient]: https://en.wikipedia.org/wiki/Binomial_coefficient

</section>

<!-- /.links -->

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

# incrgmean

> Compute a [geometric mean][geometric-mean] incrementally.

<section class="intro">

The [geometric mean][geometric-mean] is defined as the nth root of a product of _n_ numbers.

<!-- <equation class="equation" label="eq:geometric_mean" align="center" raw="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" alt="Equation for the geometric mean."> -->

<div class="equation" align="center" data-raw-text="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" data-equation="eq:geometric_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@cb802bd5cb07ef925c8a3ce9c34db0fb68040d12/lib/node_modules/@stdlib/stats/incr/gmean/docs/img/equation_geometric_mean.svg" alt="Equation for the geometric mean.">
    <br>
</div>

<!-- </equation> --> 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrgmean = require( '@stdlib/stats/incr/gmean' );
```

#### incrgmean()

Returns an accumulator `function` which incrementally computes a [geometric mean][geometric-mean].

```javascript
var accumulator = incrgmean();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [geometric mean][geometric-mean]. If not provided an input value `x`, the accumulator function returns the current [geometric mean][geometric-mean].

```javascript
var accumulator = incrgmean();

var prod = accumulator( 2.0 );
// returns 2.0

prod = accumulator( 1.0 );
// returns ~1.414

prod = accumulator( 3.0 );
// returns ~1.817

prod = accumulator();
// returns ~1.817
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrgmean = require( '@stdlib/stats/incr/gmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrgmean();

// For each simulated value, update the geometric mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[geometric-mean]: https://en.wikipedia.org/wiki/Geometric_mean

</section>

<!-- /.links -->

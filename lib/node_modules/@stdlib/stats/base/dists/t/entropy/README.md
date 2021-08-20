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

# Entropy

> [Student's t][t-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Student's t][t-distribution] random variable with degrees of freedom `ν` is

<!-- <equation class="equation" label="eq:t_entropy" align="center" raw="h\left( X \right) = \frac{\nu +1}{2} \left[\psi\left({\frac{1+\nu }{2}}\right)-\psi\left({\frac{\nu }{2}}\right)\right]+\ln{\left[{\sqrt {\nu }}B\left({\frac{\nu }{2}},{\frac{1}{2}}\right)\right]}" alt="Differential entropy for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \frac{\nu +1}{2} \left[\psi\left({\frac{1+\nu }{2}}\right)-\psi\left({\frac{\nu }{2}}\right)\right]+\ln{\left[{\sqrt {\nu }}B\left({\frac{\nu }{2}},{\frac{1}{2}}\right)\right]}" data-equation="eq:t_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/entropy/docs/img/equation_t_entropy.svg" alt="Differential entropy for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

where `Β` and `ψ` denote the [beta][beta-function] and [digamma][digamma] functions, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/t/entropy' );
```

#### entropy( v )

Returns the [differential entropy][entropy] of a [Student's t][t-distribution] distribution with degrees of freedom `v` (in [nats][nats]).

```javascript
var y = entropy( 9.0 );
// returns ~1.533

y = entropy( 3.5 );
// returns ~1.721
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = entropy( -1.0 );
// returns NaN

y = entropy( 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var entropy = require( '@stdlib/stats/base/dists/t/entropy' );

var v;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    v = randu() * 20.0;
    y = entropy( v );
    console.log( 'v: %d, h(X,v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

</section>

<!-- /.links -->

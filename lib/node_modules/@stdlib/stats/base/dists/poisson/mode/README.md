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

# Mode

> [Poisson][poisson-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_mode" align="center" raw="\operatorname{mode}\left( X \right) = \lfloor \lambda \rfloor" alt="Mode for a Poisson distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = \lfloor \lambda \rfloor" data-equation="eq:poisson_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/mode/docs/img/equation_poisson_mode.svg" alt="Mode for a Poisson distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ` is the mean parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/poisson/mode' );
```

#### mode( lambda )

Returns the [mode][mode] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var v = mode( 9.0 );
// returns 9

v = mode( 0.5 );
// returns 0
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var v = mode( -1.0 );
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
var mode = require( '@stdlib/stats/base/dists/poisson/mode' );

var lambda;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    lambda = randu() * 20.0;
    v = mode( lambda );
    console.log( 'λ: %d, mode(X;λ): %d', lambda.toFixed( 4 ), v.toFixed( 4 ) );
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

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->

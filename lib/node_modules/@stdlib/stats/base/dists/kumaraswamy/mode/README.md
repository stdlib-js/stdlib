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

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable with first shape parameter `a` and second shape parameter `b` is

<!-- <equation class="equation" label="eq:kumaraswamy_mode" align="center" raw="\operatorname{mode}\left( X \right) = \left(\frac{a-1}{ab-1}\right)^{1/a}" alt="Mode for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = \left(\frac{a-1}{ab-1}\right)^{1/a}" data-equation="eq:kumaraswamy_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/mode/docs/img/equation_kumaraswamy_mode.svg" alt="Mode for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

for `a >= 1`, `b >=1` and not `a = b = 1`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/kumaraswamy/mode' );
```

#### mode( a, b )

Returns the [mode][mode] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```javascript
var v = mode( 1.5, 1.5 );
// returns ~0.543

v = mode( 4.0, 12.0 );
// returns ~0.503

v = mode( 2.0, 8.0 );
// returns ~0.258
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 2.0 );
// returns NaN

v = mode( 2.0, NaN );
// returns NaN
```

If provided `a = 1` and `b = 1`, the function returns `NaN`.

```javascript
var y = mode( 1.0, 1.0 );
// returns NaN
```

If provided `a < 1`, the function returns `NaN`.

```javascript
var y = mode( -1.0, 2.0 );
// returns NaN

y = mode( 0.0, 2.0 );
// returns NaN
```

If provided `b < 1`, the function returns `NaN`.

```javascript
var y = mode( 2.0, -1.0 );
// returns NaN

y = mode( 2.0, 0.0 );
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
var mode = require( '@stdlib/stats/base/dists/kumaraswamy/mode' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = randu() * 10.0;
    b = randu() * 10.0;
    v = mode( a, b );
    console.log( 'a: %d, b: %d, mode(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
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

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->

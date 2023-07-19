<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Quantile Function

> [Studentized range][studentized-range] distribution [quantile function][quantile-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/studentized-range/quantile' );
```

#### quantile( p, r, v\[, nranges=1] )

Evaluates the [quantile function][quantile-function] for a [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var y = quantile( 0.5, 3.0, 2.0 );
// returns ~0.0644

y = quantile( 0.9, 17.0, 2.0 );
// returns ~0.913

y = quantile( 0.5, 3.0, 2.0, 2 );
// returns ~0.01
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 3.0, 2.0 );
// returns NaN

y = quantile( -0.1, 3.0, 2.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 2.0, 2.0 );
// returns NaN

y = quantile( 0.0, NaN, 2.0 );
// returns NaN
```

If provided `v < 2` or `r < 2`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 3.0 );
// returns NaN

y = quantile( 0.4, 3.0, 1.5 );
// returns NaN
```

#### quantile.factory( r, v\[, nranges=1] )

Returns a function for evaluating the [quantile function][quantile-function] of an [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var myquantile = quantile.factory( 4.0 );

var y = myquantile( 0.2 );
// returns ~-0.941

y = myquantile( 0.9 );
// returns ~1.533
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/studentized-range/quantile' );

var v;
var r;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    r = ( randu() * 20.0 ) + 2.0;
    v = ( randu() * 20.0 ) + 2.0;
    y = quantile( p, r, v );
    console.log( 'p: %d, r: %d, v: %d, Q(p;r,v): %d', p.toFixed( 4 ), r.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

</section>

<!-- /.links -->

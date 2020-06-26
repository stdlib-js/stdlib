<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

> Wilcoxon signed rank test statistic [quantile function][quantile-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/signrank/quantile' );
```

#### quantile( p, n )

Evaluates the [quantile function][quantile-function] for the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var y = quantile( 0.8, 5 );
// returns 11

y = quantile( 0.5, 3 );
// returns 3
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 5 );
// returns NaN

y = quantile( -0.1, 5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 5 );
// returns NaN

y = quantile( 0.0, NaN);
// returns NaN
```

If not provided a positive integer for `n`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN

y = quantile( 0.4, 3.7 );
// returns NaN
```

#### quantile.factory( n )

Returns a function for evaluating the [quantile function][quantile-function] of the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var myQuantile = quantile.factory( 8 );

var y = myQuantile( 0.4 );
// returns 16

y = myQuantile( 1.0 );
// returns 36
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/signrank/quantile' );

var n;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    n = randint( 1, 20 );
    y = quantile( p, n );
    console.log( 'p: %d, n: %d, Q(p;n): %d', p.toFixed( 4 ), n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->

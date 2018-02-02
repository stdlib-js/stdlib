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

# betainc

> [Incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var betainc = require( '@stdlib/math/base/special/betainc' );
```

#### betainc( x, a, b\[, regularized\[, upper]] )

By default, evaluates the regularized lower [incomplete beta function][incomplete-beta-function] for inputs `x`, `a > 0` and `b > 0`. The fourth and fifth parameters of the function can be used to specify whether instead to evaluate the non-regularized and/or upper incomplete beta functions, respectively.

```javascript
var y = betainc( 0.5, 2.0, 2.0 );
// returns 0.5

y = betainc( 0.5, 2.0, 2.0, false );
// returns ~0.083

y = betainc( 0.2, 1.0, 2.0 );
// returns 0.36

y = betainc( 0.2, 1.0, 2.0, true, true );
// returns 0.64
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = betainc( NaN, 1.0, 1.0 );
// returns NaN

y = betainc( 0.8, NaN, 1.0 );
// returns NaN

y = betainc( 0.8, 1.0, NaN );
// returns NaN
```

If provided a `x` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = betainc( 1.5, 1.0, 1.0 );
// returns NaN

y = betainc( -0.5, 1.0, 1.0 );
// returns NaN
```

If provided a negative `a`, the function returns `NaN`.

```javascript
var y = betainc( 0.5, -2.0, 2.0 );
// returns NaN
```

If provided a negative `b`, the function returns `NaN`.

```javascript
var y = betainc( 0.5, 2.0, -2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var betainc = require( '@stdlib/math/base/special/betainc' );

var i;
var x;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    console.log( 'x: %d, \t a: %d, \t b: %d, \t f(x,a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), betainc( x, a, b ).toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

</section>

<!-- /.links -->

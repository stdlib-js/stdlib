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

# betaincinv

> Inverse of the [incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var betaincinv = require( '@stdlib/math/base/special/betaincinv' );
```

#### betaincinv( p, a, b\[, upper] )

Inverts the regularized [incomplete beta function][incomplete-beta-function]. Contrary to the more commonly used definition, in this implementation the first parameter is the probability `p` and the second and third parameter are `a` and `b`. By default, the function inverts the _lower_ regularized [incomplete beta function][incomplete-beta-function]. To invert the _upper_ function instead, set the `upper` argument to `true`.

```javascript
var y = betaincinv( 0.2, 3.0, 3.0 );
// returns ~0.327

y = betaincinv( 0.4, 3.0, 3.0 );
// returns ~0.446

y = betaincinv( 0.4, 3.0, 3.0, true );
// returns ~0.554

y = betaincinv( 0.4, 1.0, 6.0 );
// returns ~0.082

y = betaincinv( 0.8, 1.0, 6.0 );
// returns ~0.235
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = betaincinv( NaN, 1.0, 1.0 );
// returns NaN

y = betaincinv( 0.5, NaN, 1.0 );
// returns NaN

y = betaincinv( 0.5, 1.0, NaN );
// returns NaN
```

If provided a value outside `[0,1]` for `p`, the function returns `NaN`.

```javascript
var y = betaincinv( 1.2, 1.0, 1.0 );
// returns NaN

y = betaincinv( -0.5, 1.0, 1.0 );
// returns NaN
```

If provided a nonpositive `a`, the function returns `NaN`.

```javascript
var y = betaincinv( 0.5, -2.0, 2.0 );
// returns NaN

y = betaincinv( 0.5, 0.0, 2.0 );
// returns NaN
```

If provided a nonpositive `b`, the function returns `NaN`.

```javascript
var y = betaincinv( 0.5, 2.0, -2.0 );
// returns NaN

y = betaincinv( 0.5, 2.0, 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var betaincinv = require( '@stdlib/math/base/special/betaincinv' );

var i;
var p;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    console.log( 'p: %d, \t a: %d, \t b: %d, \t f(p,a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), betaincinv( p, a, b ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

</section>

<!-- /.links -->

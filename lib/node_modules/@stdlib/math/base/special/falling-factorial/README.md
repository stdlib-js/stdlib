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

# Falling Factorial

> Compute the [falling factorial][falling-and-rising-factorials].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fallingFactorial = require( '@stdlib/math/base/special/falling-factorial' );
```

#### fallingFactorial( x, n )

Evaluates the [falling factorial][falling-and-rising-factorials] of `x` and `n`.

```javascript
var v = fallingFactorial( 0.9, 5 );
// returns ~0.644

v = fallingFactorial( -9.0, 3 );
// returns -990.0

v = fallingFactorial( 0.0, 2 );
// returns 0.0

v = fallingFactorial( NaN, 3 );
// returns NaN

v = fallingFactorial( 5.0, NaN );
// returns NaN

v = fallingFactorial( NaN, NaN );
// returns NaN
```

The function returns `NaN` if not provided a nonnegative integer for `n`.

```javascript
var v = fallingFactorial( 2.0, 1.5 );
// returns NaN

v = fallingFactorial( 3.0, -2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var fallingFactorial = require( '@stdlib/math/base/special/falling-factorial' );

var n;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*40.0 ) - 20.0;
    n = ceil( randu()*20.0 );
    console.log( 'fallingFactorial(%d,%d) = %d', x, n, fallingFactorial( x, n ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[falling-and-rising-factorials]: https://en.wikipedia.org/wiki/Falling_and_rising_factorials

</section>

<!-- /.links -->

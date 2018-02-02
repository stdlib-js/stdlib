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

# Rising Factorial

> Compute the [rising factorial][falling-and-rising-factorials].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var risingFactorial = require( '@stdlib/math/base/special/rising-factorial' );
```

#### risingFactorial( x, n )

Evaluates the [rising factorial][falling-and-rising-factorials] of `x` and `n`.

```javascript
var v = risingFactorial( 0.9, 5 );
// returns ~94.766

v = risingFactorial( -9.0, 3 );
// returns -504.0

v = risingFactorial( 0.0, 2 );
// returns 0.0

v = risingFactorial( 3.0, -2 );
// returns 0.5

v = risingFactorial( NaN, 3 );
// returns NaN

v = risingFactorial( 5.0, NaN );
// returns NaN

v = risingFactorial( NaN, NaN );
// returns NaN
```

The function returns `NaN` for non-integer `n`.

```javascript
var v = risingFactorial( 2.0, 1.5 );
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
var risingFactorial = require( '@stdlib/math/base/special/rising-factorial' );

var n;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*40.0 ) - 20.0;
    n = ceil( ( randu()*40.0 ) - 20.0 );
    console.log( 'risingFactorial(%d,%d) = %d', x, n, risingFactorial( x, n ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[falling-and-rising-factorials]: https://en.wikipedia.org/wiki/Falling_and_rising_factorials

</section>

<!-- /.links -->

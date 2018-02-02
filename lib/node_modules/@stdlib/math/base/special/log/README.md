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

# Logarithm

> Compute the base `b` [logarithm][logarithm].

<section class="usage">

## Usage

```javascript
var log = require( '@stdlib/math/base/special/log' );
```

#### log( x, b )

Computes the base `b` logarithm of `x`.

```javascript
var v = log( 100.0, 10.0 );
// returns 2.0

v = log( 16.0, 2.0 );
// returns 4.0

v = log( 5.0, 1.0 );
// returns Infinity
```

For negative `x` or `b`, the [logarithm][logarithm] is **not** defined.

```javascript
var v = log( -4.0, 1.0 );
// returns NaN

v = log( 2.0, -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var log = require( '@stdlib/math/base/special/log' );

var b;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    b = round( randu() * 5.0 );
    console.log( 'log( %d, %d ) = %d', x, b, log( x, b ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[logarithm]: https://en.wikipedia.org/wiki/Logarithm

</section>

<!-- /.links -->

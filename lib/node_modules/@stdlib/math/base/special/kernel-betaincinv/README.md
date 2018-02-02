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

# Kernel Betaincinv

> Inverse of the lower [incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var kernelBetaincinv = require( '@stdlib/math/base/special/kernel-betaincinv' );
```

#### kernelBetaincinv( a, b, p, q )

Inverts the lower regularized [incomplete beta function][incomplete-beta-function] at `a > 0` and `b > 0`. Input probabilities `p` and `q` must satisfy `p = 1 - q`. The function returns a two-element array holding the function value `y` and `1-y`.

```javascript
var y = kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 );
// returns [ ~0.327, ~0.673 ]

y = kernelBetaincinv( 3.0, 3.0, 0.4, 0.6 );
// returns [ ~0.446, ~0.554 ]

y = kernelBetaincinv( 1.0, 6.0, 0.4, 0.6 );
// returns [ ~0.082, ~0.918 ]

y = kernelBetaincinv( 1.0, 6.0, 0.8, 0.2 );
// returns [ ~0.235, ~0.765 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var kernelBetaincinv = require( '@stdlib/math/base/special/kernel-betaincinv' );

var i;
var p;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    console.log( 'p: %d, \t a: %d, \t b: %d, \t f(p,a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), kernelBetaincinv( a, b, p, 1.0-p )[ 0 ] );
}
```

</section>

<!-- /.examples -->

<section class="links">

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

</section>

<!-- /.links -->

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

# truncn

> Round a numeric value to the nearest multiple of 10^n toward zero.

<section class="usage">

## Usage

```javascript
var truncn = require( '@stdlib/math/base/special/truncn' );
```

#### truncn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward zero.

```javascript
// Round a value to 4 decimal places:
var v = truncn( 3.141592653589793, -4 );
// returns 3.1415

// If n = 0, `truncn` behaves like `trunc`:
v = truncn( 3.141592653589793, 0 );
// returns 3.0

// Round a value to the nearest thousand:
v = truncn( 12368.0, 3 );
// returns 12000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var truncn = require( '@stdlib/math/base/special/truncn' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = truncn( randu()*5.0, 0 );
    v = truncn( x, -n );
    console.log( 'x: %d. Number of decimals: %d. Rounded: %d.', x, n, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

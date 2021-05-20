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

# atanh

> Compute the [hyperbolic arctangent][hyperbolic-arctangent] of a number.

<section class="usage">

## Usage

```javascript
var atanh = require( '@stdlib/math/base/special/atanh' );
```

#### atanh( x )

Computes the [hyperbolic arctangent][hyperbolic-arctangent] of a `number` (in radians).

```javascript
var v = atanh( 0.0 );
// returns 0.0

v = atanh( -0.0 );
// returns -0.0

v = atanh( 0.5 );
// returns ~0.549

v = atanh( 0.9 );
// returns ~1.472

v = atanh( 1.0 );
// returns Infinity

v = atanh( -1.0 );
// returns -Infinity
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = atanh( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var atanh = require( '@stdlib/math/base/special/atanh' );

var x = linspace( -1.0, 1.0, 103 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( atanh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[hyperbolic-arctangent]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->

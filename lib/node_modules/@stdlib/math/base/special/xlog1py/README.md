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

# xlog1py

> Compute `x * ln(y+1)` so that the result is `0` if `x = 0`.

<section class="usage">

## Usage

```javascript
var xlog1py = require( '@stdlib/math/base/special/xlog1py' );
```

#### xlog1py( x, y )

Computes `x * ln(y+1)` so that the result is `0` if `x = 0`.

```javascript
var out = xlog1py( 3.0, 2.0 );
// returns ~3.296

out = xlog1py( 1.5, 5.9 );
// returns ~2.897

out = xlog1py( 0.9, 1.0 );
// returns ~0.624

out = xlog1py( 1.0, 0.0 );
// returns 0.0

out = xlog1py( 0.0, -2.0 );
// returns 0.0

out = xlog1py( 1.5, NaN );
// returns NaN

out = xlog1py( 0.0, NaN );
// returns NaN

out = xlog1py( NaN, 2.3 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var xlog1py = require( '@stdlib/math/base/special/xlog1py' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    if ( x < 0.5 ) {
        x = 0.0;
    }
    y = ( randu() * 20.0 ) - 5.0;
    console.log( 'xlog1py(%d, %d) = %d', x, y, xlog1py( x, y ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

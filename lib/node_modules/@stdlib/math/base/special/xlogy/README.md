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

# xlogy

> Compute `x * ln(y)` so that the result is `0` if `x = 0`.

<section class="usage">

## Usage

```javascript
var xlogy = require( '@stdlib/math/base/special/xlogy' );
```

#### xlogy( x, y )

Computes `x * ln(y)` so that the result is `0` if `x = 0`.

```javascript
var out = xlogy( 3.0, 2.0 );
// returns ~2.079

out = xlogy( 1.5, 5.9 );
// returns ~2.662

out = xlogy( 0.9, 1.0 );
// returns 0.0

out = xlogy( 0.0, -2.0 );
// returns 0.0

out = xlogy( 1.5, NaN );
// returns NaN

out = xlogy( 0.0, NaN );
// returns NaN

out = xlogy( NaN, 2.3 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var xlogy = require( '@stdlib/math/base/special/xlogy' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    if ( x < 0.5 ) {
        x = 0.0;
    }
    y = ( randu() * 20.0 ) - 5.0;
    console.log( 'xlogy(%d, %d) = %d', x, y, xlogy( x, y ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

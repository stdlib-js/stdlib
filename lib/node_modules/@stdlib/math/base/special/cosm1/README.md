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

# cosm1

> Compute `cos(x) - 1`.

<section class="usage">

## Usage

```javascript
var cosm1 = require( '@stdlib/math/base/special/cosm1' );
```

#### cosm1( x )

Computes `cos(x) - 1`, where `cos` is the [cosine][@stdlib/math/base/special/cos] of a `number` (in radians). This function should be used instead of manually calculating `cos(x) - 1` when the argument is near unity.

```javascript
var PI = require( '@stdlib/constants/math/float64-pi' );

var v = cosm1( 0.0 );
// returns 0.0

v = cosm1( PI/4.0 );
// returns ~-0.293

v = cosm1( -PI/6.0 );
// returns ~-0.134

v = cosm1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/math/utils/linspace' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var cosm1 = require( '@stdlib/math/base/special/cosm1' );

var x = linspace( 0.0, 2.0*PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( cosm1( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cos

</section>

<!-- /.links -->

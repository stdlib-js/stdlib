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

# sqrt1pm1

> Compute `sqrt( 1 + x ) - 1`.

<section class="usage">

## Usage

```javascript
var sqrt1pm1 = require( '@stdlib/math/base/special/sqrt1pm1' );
```

#### sqrt1pm1( x )

Computes `sqrt( 1 + x ) - 1` more accurately for small `x`. 

```javascript
var v = sqrt1pm1( 3.0 );
// returns 1.0

v = sqrt1pm1( 0.5 );
// returns ~0.225

v = sqrt1pm1( 0.02 );
// returns ~0.01

v = sqrt1pm1( -0.5 );
// returns ~-0.293

v = sqrt1pm1( -1.1 );
// returns NaN

v = sqrt1pm1( NaN );
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
var sqrt1pm1 = require( '@stdlib/math/base/special/sqrt1pm1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'sqrt(1+%d) - 1 = %d', x, sqrt1pm1( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

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

# round2

> Round a numeric value to the nearest power of two on a linear scale.

<section class="usage">

## Usage

```javascript
var round2 = require( '@stdlib/math/base/special/round2' );
```

#### round2( x )

Rounds a `numeric` value to the nearest power of two on a linear scale.

```javascript
var v = round2( -4.2 );
// returns -4.0

v = round2( -4.5 );
// returns -4.0

v = round2( -4.6 );
// returns -4.0

v = round2( 9.99999 );
// returns 8.0

v = round2( 9.5 );
// returns 8.0

v = round2( 13.0 );
// returns 16.0

v = round2( -13.0 );
// returns -16.0

v = round2( 0.0 );
// returns 0.0

v = round2( -0.0 );
// returns -0.0

v = round2( Infinity );
// returns Infinity

v = round2( -Infinity );
// returns -Infinity

v = round2( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round2 = require( '@stdlib/math/base/special/round2' );

var x;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    v = round2( x );
    console.log( 'Value: %d. Rounded: %d.', x, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

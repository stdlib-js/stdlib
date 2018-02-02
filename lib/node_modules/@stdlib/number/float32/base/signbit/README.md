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

# signbit

> Return a boolean indicating if the sign bit for a [single-precision floating-point number][ieee754] is on (true) or off (false).

<section class="usage">

## Usage

```javascript
var signbitf = require( '@stdlib/number/float32/base/signbit' );
```

#### signbitf( x )

Returns a `boolean` indicating if the sign bit for a [single-precision floating-point number][ieee754] is on (`true`) or off (`false`).

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var bool = signbitf( toFloat32( 4.0 ) );
// returns false

bool = signbitf( toFloat32( -9.14e-34 ) );
// returns true

bool = signbitf( 0.0 );
// returns false

bool = signbitf( -0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var randu = require( '@stdlib/random/base/randu' );
var signbitf = require( '@stdlib/number/float32/base/signbit' );

var sign;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    x = toFloat32( x );
    sign = signbitf( x );
    sign = ( sign ) ? 'true' : 'false';
    console.log( 'x: %d. signbit: %s.', x, sign );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

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

> Return a boolean indicating if the sign bit for a [double-precision floating-point number][ieee754] is on (true) or off (false).

<section class="usage">

## Usage

```javascript
var signbit = require( '@stdlib/number/float64/base/signbit' );
```

#### signbit( x )

Returns a `boolean` indicating if the sign bit for a [double-precision floating-point number][ieee754] is on (`true`) or off (`false`).

```javascript
var bool = signbit( 4.0 );
// returns false

bool = signbit( -9.14e-307 );
// returns true

bool = signbit( 0.0 );
// returns false

bool = signbit( -0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var signbit = require( '@stdlib/number/float64/base/signbit' );

var sign;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*100.0 ) - 50.0;
    sign = signbit( x );
    sign = ( sign ) ? 'true' : 'false';
    console.log( 'x: %d. signbit: %s.', x, sign );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->

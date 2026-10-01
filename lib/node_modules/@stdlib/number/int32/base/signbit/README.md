<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

> Return a boolean indicating if the sign bit for a signed 32-bit integer is on (true) or off (false).

<section class="usage">

## Usage

```javascript
var signbit = require( '@stdlib/number/int32/base/signbit' );
```

#### signbit( x )

Returns a boolean indicating if the sign bit for a signed 32-bit integer is on (`true`) or off (`false`).

```javascript
var bool = signbit( 4 );
// returns false

bool = signbit( -4 );
// returns true

bool = signbit( 0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var signbit = require( '@stdlib/number/int32/base/signbit' );

var x = discreteUniform( 100, -50, 50, {
    'dtype': 'generic'
});
logEachMap( 'x: %d. signbit: %s.', x, signbit );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

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

# isComplex128

> Test if a value is a [128-bit complex number][@stdlib/complex/float64].

<section class="usage">

## Usage

```javascript
var isComplex128 = require( '@stdlib/assert/is-complex128' );
```

#### isComplex128( value )

Tests if a value is a [128-bit complex number][@stdlib/complex/float64].

```javascript
var Complex128 = require( '@stdlib/complex/float64' );

var x = new Complex128( 1.0, 3.0 );

var bool = isComplex128( x );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var Complex128 = require( '@stdlib/complex/float64' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );

var out = isComplex128( new Complex128( 3.0, 1.0 ) );
// returns true

out = isComplex128( new Complex64( 2.0, 2.0 ) );
// returns false

out = isComplex128( {} );
// returns false

out = isComplex128( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/complex/float64]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64

</section>

<!-- /.links -->

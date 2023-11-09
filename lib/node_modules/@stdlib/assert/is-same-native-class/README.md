<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isSameNativeClass

> Test if two arguments have the same native class.

<section class="usage">

## Usage

```javascript
var isSameNativeClass = require( '@stdlib/assert/is-same-native-class' );
```

#### isSameNativeClass( a, b )

Tests if two arguments `a` and `b` have the same [native class][@stdlib/utils/native-class].

```javascript
var bool = isSameNativeClass( 'beep', 'boop' );
// returns true

bool = isSameNativeClass( [], {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isSameNativeClass = require( '@stdlib/assert/is-same-native-class' );

var bool = isSameNativeClass( 3.14, new Number( 3.14 ) );
// returns true

bool = isSameNativeClass( 'beep', 'boop' );
// returns true

bool = isSameNativeClass( new TypeError( 'beep' ), new RangeError( 'boop' ) );
// returns true

bool = isSameNativeClass( [], {} );
// returns false

bool = isSameNativeClass( null, void 0 );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/native-class]: https://github.com/stdlib-js/stdlib/tree/develop

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

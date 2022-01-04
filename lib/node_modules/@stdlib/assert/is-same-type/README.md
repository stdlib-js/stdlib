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

# isSameType

> Test if two arguments have the same type.

<section class="usage">

## Usage

```javascript
var isSameType = require( '@stdlib/assert/is-same-type' );
```

#### isSameType( a, b )

Tests if two arguments `a` and `b` have the same type.

```javascript
var bool = isSameType( false, true );
// returns true

bool = isSameType( 'beep', 'boop' );
// returns true

bool = isSameType( 0.0, '0.0' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function uses the `typeof` operator to determine the type of each argument.
-   The function returns `true` if the types are the same and `false` otherwise.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSameType = require( '@stdlib/assert/is-same-type' );

var bool = isSameType( true, false );
// returns true

bool = isSameType( 3.14, -3.14 );
// returns true

bool = isSameType( {}, [] );
// returns true

bool = isSameType( null, null );
// returns true

bool = isSameType( NaN, NaN );
// returns true

bool = isSameType( null, NaN );
// returns false

bool = isSameType( 0.0, '0.0' );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

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

# isNamedTypedTupleLike

> Test if a value is [named typed tuple][@stdlib/utils/named-typed-tuple]-like.

<section class="usage">

## Usage

```javascript
var isNamedTypedTupleLike = require( '@stdlib/assert/is-named-typed-tuple-like' );
```

#### isNamedTypedTupleLike( value )

Tests if a value is [named typed tuple][@stdlib/utils/named-typed-tuple]-like.

```javascript
var namedtypedtuple = require( '@stdlib/utils/named-typed-tuple' );

var Point = namedtypedtuple( [ 'x', 'y' ] );
var p = new Point();

var bool = isNamedTypedTupleLike( p );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var namedtypedtuple = require( '@stdlib/utils/named-typed-tuple' );
var isNamedTypedTupleLike = require( '@stdlib/assert/is-named-typed-tuple-like' );

var Point = namedtypedtuple( [ 'x', 'y' ] );
var p = new Point();

var bool = isNamedTypedTupleLike( p );
// returns true

bool = isNamedTypedTupleLike( [ 1, 2, 3, 4 ] );
// returns false

bool = isNamedTypedTupleLike( {} );
// returns false

bool = isNamedTypedTupleLike( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/utils/named-typed-tuple]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/named-typed-tuple

</section>

<!-- /.links -->

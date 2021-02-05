<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isFloat64VectorLike

> Test if a value is a 1-dimensional [ndarray][@stdlib/ndarray/ctor]-like object containing double-precision floating-point numbers.

<section class="usage">

## Usage

```javascript
var isFloat64VectorLike = require( '@stdlib/assert/is-float64vector-like' );
```

#### isFloat64VectorLike( value )

Tests if a value is a 1-dimensional [ndarray][@stdlib/ndarray/ctor]-like object whose underlying data type is `float64`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'float64', new Float64Array( [ 0, 0, 0, 0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

var bool = isFloat64VectorLike( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var isFloat64VectorLike = require( '@stdlib/assert/is-float64vector-like' );

var buffer = new Float64Array( [ 0, 0, 0, 0 ] );
var arr = ndarray( 'float64', buffer, [ 4 ], [ 1 ], 0, 'row-major' );

var out = isFloat64VectorLike( arr );
// returns true

out = isFloat64VectorLike( [ 1, 2, 3, 4 ] );
// returns false

out = isFloat64VectorLike( {} );
// returns false

out = isFloat64VectorLike( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor

</section>

<!-- /.links -->

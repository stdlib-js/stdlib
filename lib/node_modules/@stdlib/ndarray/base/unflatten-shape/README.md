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

# unflattenShape

> Expand a dimension over multiple dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var unflattenShape = require( '@stdlib/ndarray/base/unflatten-shape' );
```

#### unflattenShape( shape, dim, sizes )

Expands a dimension over multiple dimensions.

```javascript
var sh = unflattenShape( [ 6, 2, 1 ], 0, [ 3, 2 ] );
// returns [ 3, 2, 2, 1 ]
```

The function accepts the following parameters:

-   **shape**: array shape.
-   **dim**: dimension to be unflattened. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **sizes**: new shape of the unflattened dimension.

#### unflattenShape.assign( shape, dim, sizes, out )

Expands a dimension over multiple dimensions and assigns results to a provided output array.

```javascript
var o = [ 0, 0, 0, 0 ];

var out = unflattenShape.assign( [ 6, 2, 1 ], 0, [ 3, 2 ], o );
// returns [ 3, 2, 2, 1 ]

var bool = ( out === o );
// returns true
```

The function accepts the following parameters:

-   **shape**: array shape.
-   **dim**: dimension to be unflattened. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **sizes**: new shape of the unflattened dimension.
-   **out**: output array.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var unflattenShape = require( '@stdlib/ndarray/base/unflatten-shape' );

var out = unflattenShape( [ 2, 4, 1 ], 1, [ 2, 2 ] );
// returns [ 2, 2, 2, 1 ]

out = unflattenShape( [ 2, 4, 1 ], 1, [ 2, 1, 2 ] );
// returns [ 2, 2, 1, 2, 1 ]

out = unflattenShape( [ 2, 4, 1 ], 1, [ 2, 1, 1, 2 ] );
// returns [ 2, 2, 1, 1, 2, 1 ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

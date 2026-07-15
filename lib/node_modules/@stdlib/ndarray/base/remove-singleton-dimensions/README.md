<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# removeSingletonDimensions

> Remove singleton dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var removeSingletonDimensions = require( '@stdlib/ndarray/base/remove-singleton-dimensions' );
```

#### removeSingletonDimensions( x, writable )

Returns an ndarray without singleton dimensions (i.e., dimensions whose size is equal to `1`).

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create a 1x2x2 ndarray:
var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ] ] );
// returns <ndarray>[ [ [ 1, 2 ], [ 3, 4 ] ] ]

// Remove singleton dimensions:
var y = removeSingletonDimensions( x, false );
// returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.
-   The function **always** returns a new ndarray instance even if the input ndarray does not contain any singleton dimensions.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var removeSingletonDimensions = require( '@stdlib/ndarray/base/remove-singleton-dimensions' );

var x = uniform( [ 1, 1, 3, 3, 3 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

var y = removeSingletonDimensions( x, false );
console.log( ndarray2array( y ) );
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

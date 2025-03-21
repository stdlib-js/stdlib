<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# indexOf

> Return the index of the first element which equals a provided search element.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var indexOf = require( '@stdlib/array/base/index-of' );
```

#### indexOf( x, searchElement, fromIndex, equalNaNs )

Returns the index of the first element which equals a provided search element.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var idx = indexOf( x, 3, 0, false );
// returns 2
```

If the function is unable to find an element which equals a provided search element, the function returns `-1`.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var idx = indexOf( x, 7, 0, false );
// returns -1
```

To begin searching from specific index, provide a non-zero `fromIndex` argument.

```javascript
var x = [ 1, 1, 2, 1, 2, 3, 3 ];

var idx = indexOf( x, 2, 3, false );
// returns 4
```

If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.

```javascript
var x = [ 1, 1, 2, 1, 2, 3, 3 ];

var idx = indexOf( x, 2, -4, false );
// returns 4
```

When searching for a search element, the function checks for strict equality. As a consequence, `NaN` values are considered distinct. In order to resolve the first element which is `NaN`, set the `equalNaNs` argument to `true`.

```javascript
var x = [ 1, 2, 3, NaN, 5, 6 ];

var idx = indexOf( x, NaN, 0, false );
// returns -1

idx = indexOf( x, NaN, 0, true );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having an `indexOf` method and `equalNaNs` is `false`, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.indexOf( searchElement, fromIndex )
    ```

-   If provided an array-like object without an `indexOf` method or if `equalNaNs` is `true`, the function performs a linear scan and returns immediately upon finding a match.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var indexOf = require( '@stdlib/array/base/index-of' );

var x = [ 'foo', 'bar', 'beep', 'boop', 'foo', 'bar' ];

var idx = indexOf( x, 'beep', 0, false );
// returns 2

idx = indexOf( x, 'bop', 0, false );
// returns -1

idx = indexOf( x, 'foo', 1, false );
// returns 4

idx = indexOf( x, 'foo', -4, false );
// returns 4

idx = indexOf( x, 'foo', 5, false );
// returns -1
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

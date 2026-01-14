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

# strided2array

> Convert a strided array to a non-strided generic array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var strided2array = require( '@stdlib/array/base/from-strided' );
```

#### strided2array( N, x, stride, offset )

Converts a strided array to a non-strided generic array.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var arr = strided2array( 3, x, 2, 0 );
// returns [ 1, 3, 5 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input array.
-   **stride**: index stride.
-   **offset**: index of the first indexed value in the input array.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that the input array is compatible with the specified number of elements, index stride, and index offset.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
var strided2array = require( '@stdlib/array/base/from-strided' );

var x = zeroTo( 10 );
console.log( x );

var y = strided2array( 5, x, -2, x.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

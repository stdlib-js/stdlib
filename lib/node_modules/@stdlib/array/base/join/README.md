<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# join

> Return a string created by joining array elements using a specified separator.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var join = require( '@stdlib/array/base/join' );
```

#### join( x, separator )

Returns a string created by joining array elements using a specified separator.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = join( x, ',' );
// returns '1,2,3,4,5,6'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `join` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.join( separator )
    ```

-   If an array element is either `null` or `undefined`, the function will serialize the element as an empty string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var AccessorArray = require( '@stdlib/array/base/accessor' );
var Float64Array = require( '@stdlib/array/float64' );
var join = require( '@stdlib/array/base/join' );

var x = [ 0, 1, 2, 3, 4, 5 ];
var s = join( x, ',' );
// returns '0,1,2,3,4,5'

x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );
s = join( x, ',' );
// returns '0,1,2,3,4,5'

s = join( x, '-' );
// returns '0-1-2-3-4-5'

s = new AccessorArray( [ 1, 2, 3, 4 ] );
s = join( s, ',' );
// returns '1,2,3,4'

x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
s = join( x, ',' );
// returns '1 + 2i,3 + 4i,5 + 6i'

x = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0 ] );
s = join( x, ',' );
// returns '1 - 1i,2 - 2i'
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

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

# withArray

> Return a new array after replacing an index with a given value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var withArray = require( '@stdlib/array/base/with' );
```

#### withArray( x, index, value )

Return a new array after updating an index into the input array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = withArray( x, 0, 5 );
// returns [5, 2, 3, 4]

out = withArray( x, -1, 6 );
// returns [1, 2, 3, 6]

```

The function accepts the following arguments:

-   **x**: an input array.
-   **index**: element index.
-   **value**: replacement value.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `with` method, the function defers execution to that method and assumes that the method has the following signature:

    ```text
    x.with( index, value )
    ```

    If provided an array-like object without a `with` method, the function manually shallow copied that object and assign provided value to that index.

-   Negative indices are resolved relative to the last array element, with the last element corresponding to `-1`.

-   If provided out-of-bounds indices, the function always returns `undefined`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteuniform = require( '@stdlib/random/array/discrete-uniform' );
var withArray = require( '@stdlib/array/base/with' );
var rand = require( '@stdlib/random/base/randu' );
var x;
var indices;

// Define an array:
x = discreteuniform( 10, -100, 100 );

// Define an array containing random index values:
indices = discreteuniform( 100, -x.length, x.length-1 );

// Randomly selected values from the input array:
var i;
var index;
var newvalue;
var updatedarray;
for (i = 0; i < indices.length; i++) {
    index = indices[i];
    newvalue = rand(); // Random value between -100 and 100
    updatedarray = withArray(x, index, newvalue); // Update the value at the given index
    console.log('Updated x[%d] to %d', index, newvalue);
    console.log('Updated array:', updatedarray);
}
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

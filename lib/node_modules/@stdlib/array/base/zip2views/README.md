<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# zip2views

> Zip one or more arrays to an array of composite views.

<section class="usage">

## Usage

```javascript
var zip2views = require( '@stdlib/array/base/zip2views' );
```

#### zip2views( arrays, labels )

Zips one or more arrays to an array of composite views.

```javascript
var x = [ 1, 2, 3 ];
var y = [ 'a', 'b', 'c' ];

var labels = [ 'x', 'y' ];

var z = zip2views( [ x, y ], labels );
// returns [ <Object>, <Object>, <Object> ]

var v0 = z[ 0 ].toJSON();
// returns { 'x': 1, 'y': 'a' }

var v1 = z[ 1 ].toJSON();
// returns { 'x': 2, 'y': 'b' }

var v2 = z[ 2 ].toJSON();
// returns { 'x': 3, 'y': 'c' }

// Mutate one of the input arrays:
x[ 0 ] = 5;

v0 = z[ 0 ].toJSON();
// returns { 'x': 5, 'y': 'a' }

// Set a view property:
z[ 1 ].y = 'beep';

v1 = z[ 1 ].toJSON();
// returns { 'x': 2, 'y': 'beep' }

var y1 = y.slice();
// returns [ 'a', 'beep', 'c' ]
```

The function supports the following parameters:

-   **arrays**: list of arrays to zip.
-   **labels**: list of array labels.

Each element in the returned array is a class instance having prototype properties corresponding to the list of array labels. As demonstrated in the example above, to convert an element to a regular object, invoke an element's `toJSON` method. Note, however, that the object returned by an element's `toJSON` method no longer shares the same memory as the provided input arrays.

</section>

<!-- /.usage -->

<section class="notes">

-   The function assumes that the list of arrays to be zipped all have the same length.
-   The number of provided array labels should equal the number of arrays to be zipped.
-   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an input array or a view will mutate the other.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var zip2views = require( '@stdlib/array/base/zip2views' );

var x = zeroTo( 10 );
var y = discreteUniform( x.length, -100, 100 );

var labels = [ 'x', 'y' ];

var out = zip2views( [ x, y ], labels );
// returns [...]
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

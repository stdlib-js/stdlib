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

# zip2views1d

> Zip one or more one-dimensional ndarrays to an array of composite views.

<section class="usage">

## Usage

```javascript
var zip2views1d = require( '@stdlib/ndarray/base/zip2views1d' );
```

#### zip2views1d( arrays, labels )

Zips one or more one-dimensional ndarrays to an array of composite views.

```javascript
var array2ndarray = require( '@stdlib/ndarray/base/from-array' );

var x = array2ndarray( [ 1, 2, 3 ], 'row-major' );
var y = array2ndarray( [ 'a', 'b', 'c' ], 'row-major' );

var labels = [ 'x', 'y' ];

var z = zip2views1d( [ x, y ], labels );
// returns [ <Object>, <Object>, <Object> ]

var v0 = z[ 0 ].toJSON();
// returns { 'x': 1, 'y': 'a' }

var v1 = z[ 1 ].toJSON();
// returns { 'x': 2, 'y': 'b' }

var v2 = z[ 2 ].toJSON();
// returns { 'x': 3, 'y': 'c' }

// Mutate one of the input arrays:
x.set( 0, 5 );

v0 = z[ 0 ].toJSON();
// returns { 'x': 5, 'y': 'a' }

// Set a view property:
z[ 1 ].y = 'beep';

v1 = z[ 1 ].toJSON();
// returns { 'x': 2, 'y': 'beep' }

var v = y.get( 1 );
// returns 'beep'
```

The function supports the following parameters:

-   **arrays**: list of ndarrays to zip.
-   **labels**: list of labels.

Each element in the returned array is a class instance having prototype properties corresponding to the list of labels. As demonstrated in the example above, to convert an element to a regular object, invoke an element's `toJSON` method. Note, however, that the object returned by an element's `toJSON` method no longer shares the same memory as the provided input ndarrays.

</section>

<!-- /.usage -->

<section class="notes">

-   The function assumes that the list of ndarrays to be zipped all have the same length.
-   The list of provided labels should equal the number of ndarrays to be zipped.
-   Each view in the returned array shares the same memory as the corresponding elements in the input ndarrays. Accordingly, mutation of either an input ndarray or a view will mutate the other.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var array2ndarray = require( '@stdlib/ndarray/base/from-array' );
var zip2views1d = require( '@stdlib/ndarray/base/zip2views1d' );

var x = array2ndarray( zeroTo( 10 ), 'row-major' );
var y = array2ndarray( discreteUniform( x.length, -100, 100 ), 'row-major' );

var labels = [ 'x', 'y' ];

var out = zip2views1d( [ x, y ], labels );
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

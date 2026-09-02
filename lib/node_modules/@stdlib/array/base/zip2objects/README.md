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

# zip2objects

> Zip one or more arrays to an array of objects.

<section class="usage">

## Usage

```javascript
var zip2objects = require( '@stdlib/array/base/zip2objects' );
```

#### zip2objects( arrays, labels )

Zips one or more arrays to an array of objects.

```javascript
var x = [ 1, 2 ];
var y = [ 3, 4 ];

var labels = [ 'x', 'y' ];

var out = zip2objects( [ x, y ], labels );
// returns [ { 'x': 1, 'y': 3 }, { 'x': 2, 'y': 4 } ]
```

The function supports the following parameters:

-   **arrays**: list of arrays to zip.
-   **labels**: list of array labels.

</section>

<!-- /.usage -->

<section class="notes">

-   The function assumes that the list of arrays to be zipped all have the same length.
-   The number of provided array labels should equal the number of arrays to be zipped.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var zip2objects = require( '@stdlib/array/base/zip2objects' );

var x = zeroTo( 10 );
var y = discreteUniform( x.length, -100, 100 );

var labels = [ 'x', 'y' ];

var out = zip2objects( [ x, y ], labels );
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

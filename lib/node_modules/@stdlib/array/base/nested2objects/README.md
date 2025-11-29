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

# nested2objects

> Convert nested arrays to objects.

<section class="usage">

## Usage

```javascript
var nested2objects = require( '@stdlib/array/base/nested2objects' );
```

#### nested2objects( arr, fields )

Converts each nested array to an object.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var fields = [ 'x', 'y' ];

var out = nested2objects( x, fields );
// returns [ { 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 } ]
```

The function supports the following parameters:

-   **arr**: input array containing nested arrays.
-   **fields**: list of field names.

</section>

<!-- /.usage -->

<section class="notes">

-   The function assumes that all nested arrays have the same length.
-   The number of provided array labels should equal the length of each nested array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var nested2objects = require( '@stdlib/array/base/nested2objects' );

var x = filled2dBy( [ 10, 2 ], discreteUniform( -100, 100 ) );
var fields = [ 'x', 'y' ];

var out = nested2objects( x, fields );
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

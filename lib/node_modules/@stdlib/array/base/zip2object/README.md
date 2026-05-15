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

# zip2object

> Create an object from a provided list of properties and a provided list of corresponding values.

<section class="usage">

## Usage

```javascript
var zip2object = require( '@stdlib/array/base/zip2object' );
```

#### zip2object( properties, values )

Returns an object from a provided list of properties and a provided list of corresponding values.

```javascript
var properties = [ 'a', 'b' ];
var values = [ 1, 2 ];

var out = zip2object( properties, values );
// returns { 'a': 1, 'b': 2 }
```

The function supports the following parameters:

-   **properties**: list of properties.
-   **values**: list of values.

</section>

<!-- /.usage -->

<section class="notes">

-   The function assumes that both input arrays have the same length.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var zip2object = require( '@stdlib/array/base/zip2object' );

var x1 = zeroTo( 10 );
var x2 = discreteUniform( x1.length, -100, 100 );

var out = zip2object( x1, x2 );
// returns {...}
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

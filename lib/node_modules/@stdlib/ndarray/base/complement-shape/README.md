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

# complementShape

> Return the shape defined by the dimensions which are not included in a list of dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var complementShape = require( '@stdlib/ndarray/base/complement-shape' );
```

#### complementShape( shape, dims )

Returns the shape defined by the dimensions which are not included in a list of dimensions.

```javascript
var sh = complementShape( [ 3, 2 ], [ -1 ] );
// returns [ 3 ]
```

The function accepts the following parameters:

-   **shape**: array shape.
-   **dims**: list of dimensions.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zip = require( '@stdlib/array/base/zip' );
var filled = require( '@stdlib/array/base/filled' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var complementShape = require( '@stdlib/ndarray/base/complement-shape' );

var opts = {
    'dtype': 'int32'
};
var d1 = discreteUniform( 100, 1, 10, opts );
var d2 = discreteUniform( d1.length, 1, 10, opts );
var d3 = discreteUniform( d1.length, 1, 10, opts );
var d4 = discreteUniform( d1.length, 1, 10, opts );

var dims = discreteUniform( 2, -4, 3, opts );
var shapes = zip( [ d1, d2, d3, d4 ] );

logEachMap( 'shape: (%s). dims: (%s). complement: (%s).', shapes, filled( dims, d1.length ), complementShape );
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

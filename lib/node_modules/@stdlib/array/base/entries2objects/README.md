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

# entries2objects

> Convert array entries to an array of objects.

<section class="usage">

## Usage

```javascript
var entries2objects = require( '@stdlib/array/base/entries2objects' );
```

#### entries2objects( arr, fields )

Converts array entries to an array of objects.

```javascript
var x = [ 1, 2 ];

var fields = [ 'x', 'y' ];

var out = entries2objects( x, fields );
// returns [ { 'x': 0, 'y': 1 }, { 'x': 1, 'y': 2 } ]
```

The function supports the following parameters:

-   **arr**: input array.
-   **fields**: list of field names.

</section>

<!-- /.usage -->

<section class="notes">

-   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var entries2objects = require( '@stdlib/array/base/entries2objects' );

var x = discreteUniform( 10, -100, 100 );
var fields = [ 'x', 'y' ];

var out = entries2objects( x, fields );
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

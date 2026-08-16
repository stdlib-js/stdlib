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

# entries2views

> Convert array entries to an array of composite views.

<section class="usage">

## Usage

```javascript
var entries2views = require( '@stdlib/array/base/entries2views' );
```

#### entries2views( arr, fields )

Converts array entries to an array of composite views.

```javascript
var x = [ 1, 2, 3 ];
var fields = [ 'x', 'y' ];

var out = entries2views( x, fields );
// returns [ <Object>, <Object>, <Object> ]

var v0 = out[ 0 ].toJSON();
// returns { 'x': 0, 'y': 1 }

var v1 = out[ 1 ].toJSON();
// returns { 'x': 1, 'y': 2 }

var v2 = out[ 2 ].toJSON();
// returns { 'x': 2, 'y': 3 }

// Mutate the input array:
x[ 0 ] = 5;

v0 = out[ 0 ].toJSON();
// returns { 'x': 0, 'y': 5 }

// Set a view property:
out[ 1 ].y = 'beep';

v1 = out[ 1 ].toJSON();
// returns { 'x': 1, 'y': 'beep' }

var y = x.slice();
// returns [ 5, 'beep', 3 ]
```

The function supports the following parameters:

-   **arr**: input array.
-   **fields**: list of field names.

Each element in the returned array is a class instance having prototype properties corresponding to the list of field names. As demonstrated in the example above, to convert an element to a regular object, invoke an element's `toJSON` method. Note, however, that the object returned by an element's `toJSON` method no longer shares the same memory as the provided input array.

</section>

<!-- /.usage -->

<section class="notes">

-   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
-   For each element of the returned array, the index view field is read-only and cannot be mutated.
-   Each view in the returned array shares the same memory as the corresponding element in the input array. Accordingly, mutation of either the input array or a view will mutate the other.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var entries2views = require( '@stdlib/array/base/entries2views' );

var x = discreteUniform( 10, -100, 100 );
var fields = [ 'x', 'y' ];

var out = entries2views( x, fields );
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

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

# rekey

> Copy and rename specified keys for every element in a provided array.

<section class="usage">

## Usage

```javascript
var rekey = require( '@stdlib/array/base/rekey' );
```

#### rekey( arr, mapping )

Copies and renames specified keys for every element in a provided array.

```javascript
var x = [
    {
        'x': 1,
        'y': 2
    },
    {
        'x': 3,
        'y': 4
    }
];
var mapping = {
    'x': 'a',
    'y': 'b'
};

var out = rekey( x, mapping );
// returns [ { 'a': 1, 'b': 2 }, { 'a': 3, 'b': 4 } ]
```

The function has the following parameters:

-   **arr**: input array.
-   **mapping**: object mapping existing keys to new key names.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **only** copies and renames those keys which are present in a provided mapping object. Any keys which are **not** present in the provided mapping object, but are present in the original objects, are **omitted** during object creation.
-   The function assumes that each object has the keys specified in a provided mapping object.
-   The function performs **shallow** copies of key values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var rekey = require( '@stdlib/array/base/rekey' );

function clbk( idx ) {
    return {
        'x': idx,
        'y': discreteUniform( 0, 10 )
    };
}

var x = filledBy( 10, clbk );
var mapping = {
    'x': 'a',
    'y': 'b'
};

var out = rekey( x, mapping );
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

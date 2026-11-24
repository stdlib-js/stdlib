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

# groupValuesOnKey

> Group the elements of an array according to a specified property name.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var groupValuesOnKey = require( '@stdlib/array/base/group-values-on-key' );
```

#### groupValuesOnKey( x, key )

Groups the elements of an array according to a specified property name.

```javascript
var x = [
    {
        'x': 1,
        'y': 2
    },
    {
        'x': 1,
        'y': 3
    }
];

var out = groupValuesOnKey( x, 'y' );
// returns { '2': [ { 'x': 1, 'y': 2 } ], '3': [ { 'x': 1, 'y': 3 } ] }
```

The function supports the following parameters:

-   **x**: input array.
-   **key**: property name whose values are used to determine groups.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Each value associated with a specified `key` should resolve to a value which can be serialized as an object key. As a counterexample,

    ```javascript
    var x = [
        {
            'x': 1,
            'y': {}
        },
        {
            'x': 1,
            'y': {}
        }
    ];

    var out = groupValuesOnKey( x, 'y' );
    // returns { '[object Object]': [ { 'x': 1, 'y': {} }, { 'x': 1, 'y': {} } ] }
    ```

    while each "group" is unique, all input array elements resolve to the same group because each group identifier serializes to the same string.

-   If provided an empty array, the function returns an empty object.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var groupValuesOnKey = require( '@stdlib/array/base/group-values-on-key' );

function clbk( idx ) {
    return {
        'x': idx,
        'y': discreteUniform( 0, 10 )
    };
}

// Create an array of random objects:
var values = filledBy( 100, clbk );

// Group elements according to the values of `y`:
var out = groupValuesOnKey( values, 'y' );
// returns {...}

console.log( out );
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

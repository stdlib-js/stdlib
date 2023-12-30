<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# groupValues

> Group elements as arrays associated with distinct keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var groupValues = require( '@stdlib/array/base/group-values' );
```

#### groupValues( x, groups )

Groups elements as arrays associated with distinct keys.

```javascript
var x = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var out = groupValues( x, groups );
// returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Each value in `groups` should resolve to a value which can be serialized as an object key. As a counterexample,

    ```javascript
    var x = [ 'beep', 'boop', 'foo', 'bar' ];
    var groups = [ {}, {}, {}, {} ];

    var out = groupValues( x, groups );
    // returns { '[object Object]': [ 'beep', 'boop', 'foo', 'bar' ] }
    ```

    while each "group" is unique, all input array elements resolve to the same group because each group identifier serializes to the same string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var take = require( '@stdlib/array/base/take' );
var groupValues = require( '@stdlib/array/base/group-values' );

// Define an initial array of values:
var values = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Sample from the initial array to generate a random collection:
var indices = discreteUniform( 100, 0, values.length-1, {
    'dtype': 'generic'
});
var x = take( values, indices );
// returns [...]

// Randomly assign collection values to groups:
var groups = discreteUniform( x.length, 0, values.length, {
    'dtype': 'generic'
});

// Group the values:
var out = groupValues( x, groups );
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

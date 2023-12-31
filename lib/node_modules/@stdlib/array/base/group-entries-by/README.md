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

# groupEntriesBy

> Group element entries according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var groupEntriesBy = require( '@stdlib/array/base/group-entries-by' );
```

#### groupEntriesBy( x, indicator\[, thisArg] )

Groups element entries according to an indicator function.

```javascript
function indicator( v ) {
    return v[ 0 ];
}

var x = [ 'beep', 'boop', 'foo', 'bar' ];

var out = groupEntriesBy( x, indicator );
// returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
```

An `indicator` function is provided the following arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `indicator` function execution context, provide a `thisArg`.

```javascript
function indicator( v ) {
    this.count += 1;
    return v[ 0 ];
}

var x = [ 'beep', 'boop', 'foo', 'bar' ];

var context = {
    'count': 0
};
var out = groupEntriesBy( x, indicator, context );
// returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }

var cnt = context.count;
// returns 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The value returned by an `indicator` function should be a value which can be serialized as an object key. As a counterexample,

    ```javascript
    function indicator( v ) {
        return {};
    }
    var x = [ 'beep', 'boop', 'foo', 'bar' ];

    var out = groupEntriesBy( x, indicator );
    // returns { '[object Object]': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 2, 'foo' ], [ 3, 'bar' ] ] }
    ```

    while each group identifier is unique, all input array elements resolve to the same group because each group identifier serializes to the same string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var take = require( '@stdlib/array/base/take' );
var groupEntriesBy = require( '@stdlib/array/base/group-entries-by' );

function indicator( v ) {
    // Use the first letter of each element to define groups:
    return v[ 0 ];
}

// Define an initial array of values:
var values = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Sample from the initial array to generate a random collection:
var indices = discreteUniform( 100, 0, values.length-1, {
    'dtype': 'generic'
});
var x = take( values, indices );
// returns [...]

// Group the values:
var out = groupEntriesBy( x, indicator );
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

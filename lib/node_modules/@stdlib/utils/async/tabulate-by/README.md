<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# tabulateByAsync

> Generate a frequency table according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var tabulateByAsync = require( '@stdlib/utils/async/tabulate-by' );
```

#### tabulateByAsync( collection, \[options,] indicator, done )

Generates a frequency table according to an `indicator` function, i.e., a function which specifies how to categorize an element in the input `collection`.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000, 750 ];

tabulateByAsync( arr, indicator, done );
/* =>
    750
    1000
    2500
    3000
    [ [ false, 2, 0.5 ], [ true, 2, 0.5 ] ]
*/
```

The returned frequency table is an `array` of `arrays`. Each sub-array corresponds to a unique value in the input `collection` and is structured as follows:

-   `0`: unique value
-   `1`: value count
-   `2`: frequency percentage

The function accepts the following `options`:

-   `limit`: the maximum number of pending invocations at any one time. Default: `infinity`.
-   `series`: `boolean` indicating whether to sequentially invoke the `indicator` function for each `collection` element. If `true`, the function sets `options.limit=1`. Default: `false`.
-   `thisArg`: the execution context for `indicator`.

By default, all elements are processed concurrently, which means that the function does **not** guarantee completion order. To process each `collection` element sequentially, set the `series` option to `true`.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000, 750 ];

var opts = {
    'series': true
};

tabulateByAsync( arr, opts, indicator, done );
/* =>
    3000
    2500
    1000
    750
    [ [ true, 2, 0.5 ], [ false, 2, 0.5 ] ]
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000, 750 ];

var opts = {
    'limit': 2
};

tabulateByAsync( arr, opts, indicator, done );
/* =>
    2500
    3000
    1000
    750
    [ [ true, 2, 0.5 ], [ false, 2, 0.5 ] ]
*/
```

To set the execution context of the `indicator` function, set the `thisArg` option.

```javascript
function indicator( value, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, (value > 2000) );
    }
}

var arr = [ 3000, 2500, 1000, 750 ];

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

tabulateByAsync( arr, opts, indicator, done );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => [ [ false, 2, 0.5 ], [ true, 2, 0.5 ] ]

    console.log( context.count );
    // => 4
}
```

When invoked, the `indicator` function is provided a maximum of four arguments:

-   `value`: collection value.
-   `index`: collection index.
-   `collection`: the input `collection`.
-   `next`: a callback which should be called once the `indicator` function has finished processing a collection `value`.

The actual number of provided arguments depends on function `length`. If the `indicator` function accepts two arguments, the `indicator` function is provided `value` and `next`. If the `indicator` function accepts three arguments, the `indicator` function is provided `value`, `index`, and `next`. For every other `indicator` function signature, the `indicator` function is provided all four arguments.

```javascript
function indicator( value, i, collection, next ) {
    console.log( 'collection: %s. %d: %d', collection.join( ',' ), i, value );
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000, 750 ];

tabulateByAsync( arr, indicator, done );
/* =>
    collection: 3000,2500,1000,750. 0: 3000
    collection: 3000,2500,1000,750. 1: 2500
    collection: 3000,2500,1000,750. 2: 1000
    collection: 3000,2500,1000,750. 3: 750
    750
    1000
    2500
    3000
    [ [ false, 2, 0.5 ], [ true, 2, 0.5 ] ]
*/
```

#### tabulateByAsync.factory( \[options,] indicator )

Returns a `function` which invokes an `indicator` function once for each element in a `collection` and generates a frequency table.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var f = tabulateByAsync.factory( indicator );

var arr1 = [ 3000, 2500, 1000, 750 ];

f( arr1, done );
/* =>
    750
    1000
    2500
    3000
    [ [ false, 2, 0.5 ], [ true, 2, 0.5 ] ]
*/

var arr2 = [ 300, 250, 100 ];

f( arr2, done );
/* =>
    100
    250
    300
    [ [ false, 3, 1.0 ] ]
*/
```

The function accepts the same `options` as `tabulateByAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   The function does **not** support dynamic `collection` resizing.
-   The function does **not** skip `undefined` elements.
-   If provided an empty `collection`, the function calls the `done` callback with an empty `array` for the tabulated results.
-   **Neither** `tabulateByAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs/read-file' );
var tabulateByAsync = require( '@stdlib/utils/async/tabulate-by' );

var files = [
    resolve( __dirname, 'package.json' ),
    resolve( __dirname, 'README.md' ),
    resolve( __dirname, 'beep.boop.md' )
];

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

function indicator( file, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( file, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            return next( null, 'nonreadable' );
        }
        next( null, 'readable' );
    }
}

tabulateByAsync( files, indicator, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->

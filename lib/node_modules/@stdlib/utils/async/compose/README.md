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

# composeAsync

> [Function composition][function-composition].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var composeAsync = require( '@stdlib/utils/async/compose' );
```

#### composeAsync( ...fcn )

Returns a composite function. Starting from the right, the composite function evaluates each function and passes the result as the first argument to the next function. The result of the leftmost function is the result of the whole.

```javascript
function a( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, 2*x );
    }
}

function b( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x+3 );
    }
}

function c( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x/5 );
    }
}

var f = composeAsync( c, b, a );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 3
}

f( 6, done ); // ((2*x)+3)/5
```

The last argument provided to each composed function is a `next` callback which accepts two arguments:

-   `error`: error argument
-   `result`: function result

**Only** the rightmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as **binary** functions.

```javascript
function a( x, y, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, (x*5) + (y*3) );
    }
}

function b( r, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, r+12 );
    }
}

var f = composeAsync( b, a );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 50
}

f( 4, 6, done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function will throw if provided fewer than `2` input arguments.
-   If a composed function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var composeAsync = require( '@stdlib/utils/async/compose' );

function a( x, y, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x*y );
    }
}

function b( z, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, z+5 );
    }
}

function c( r, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, r/10 );
    }
}

var f = composeAsync( c, b, a );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 2
}

f( 5, 3, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[function-composition]: https://en.wikipedia.org/wiki/Function_composition_%28computer_science%29

</section>

<!-- /.links -->

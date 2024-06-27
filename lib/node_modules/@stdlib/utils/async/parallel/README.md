<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# parallel

> Execute functions in parallel and pass the results of all functions to a provided callback.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var parallel = require( '@stdlib/utils/async/parallel' );
```

#### parallel( fcns, \[options,] done )

Executes a set of functions in parallel and passes the results of all functions to a provided callback.

```javascript
function a( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 2 );
    }
}

function b( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4 );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => [ 2, 4 ]
}

var fcns = [ a, b ];

parallel( fcns, done );
```

The function accepts the following `options`:

-   **limit**: maximum number of functions to execute concurrently. Default: `infinity`.
-   **thisArg**: execution context for each function.

To limit the maximum number of functions executing in parallel, set the `limit` option.

```javascript
function a( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 2 );
    }
}

function b( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4 );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => [ 2, 4 ]
}

var fcns = [ a, b ];

var opts = {
    'limit': 1
};

parallel( fcns, opts, done );
```

To set the `this` context for **all** `functions` in the provided function array, set the `thisArg` option.

```javascript
function a( clbk ) {
    this.idx += 1;
    clbk( null, 2 );
}

function b( clbk ) {
    this.idx += 1;
    clbk( null, 4 );
}

var fcns = [ a, b ];
var ctx = {
    'idx': 0
};
var opts = {
    'thisArg': ctx
};

parallel( fcns, opts, done );

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( ctx.idx );
    // => 2
}
```

#### parallel.factory( fcns, \[options] )

Returns a reusable function which executes a set of functions in parallel.

```javascript
function a( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 2 );
    }
}

function b( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4 );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => [ 2, 4 ]
}

var fcns = [ a, b ];

var run = parallel.factory( fcns );

run( done );
run( done );
run( done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The order of the results provided to the `done` callback corresponds to the order of the provided functions.
-   When executed, each provided function is invoked with a single callback argument. The callback should be invoked upon function completion. The first argument is reserved as an `error` argument (which can be `null`). The second argument is reserved for any results which should be passed to the `done` callback upon completion of all provided functions.
-   If any function fails to invoke the callback argument, the `done` callback will never be invoked.
-   This implementation is intended to start asynchronous tasks so that execution of each task runs concurrently. If provided a function which does not perform asynchronous tasks, the function will execute synchronously. Hence, this implementation does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a `function` which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
-   The function executes provided functions in the same thread. Accordingly, the function does **not** spawn new threads.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parallel = require( '@stdlib/utils/async/parallel' );

function foo( clbk ) {
    setTimeout( onTimeout, 300 );
    function onTimeout() {
        clbk( null, 'one' );
    }
}

function bar( clbk ) {
    setTimeout( onTimeout, 100 );
    function onTimeout() {
        clbk( null, 'two' );
    }
}

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.log( results );
    // => [ 'one', 'two' ]
}

var fcns = [ foo, bar ];

parallel( fcns, done );
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

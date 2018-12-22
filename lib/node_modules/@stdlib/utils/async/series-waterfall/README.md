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

# Waterfall

> Execute functions in series, passing the results of one function as arguments to the next function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var waterfall = require( '@stdlib/utils/async/series-waterfall' );
```

#### waterfall( fcns, clbk\[, thisArg] )

Executes `functions` in series, passing the results of one `function` as arguments to the next `function`.

```javascript
function foo( next ) {
    next( null, 'beep' );
}

function bar( str, next ) {
    console.log( str );
    // => 'beep'

    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var fcns = [ foo, bar ];

waterfall( fcns, done );
```

To set the `this` context for **all** `functions` in the provided function array, provide a `thisArg`.

<!-- eslint-disable no-use-before-define -->

```javascript
function foo( next ) {
    this.idx = 0;
    next( null, 'beep' );
}

function bar( str, next ) {
    this.idx += 1;
    console.log( str );
    // => 'beep'

    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( ctx.idx );
    // => 1
}

var ctx = {};
var fcns = [ foo, bar ];

waterfall( fcns, done, ctx );
```

#### waterfall.factory( fcns, done\[, thisArg] )

Returns a reusable waterfall `function`.

```javascript
function foo( next ) {
    next( null, 'beep' );
}

function bar( str, next ) {
    console.log( str );
    // => 'beep'

    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

var fcns = [ foo, bar ];

var run = waterfall.factory( fcns, done );

run();
run();
run();
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The last argument applied to each waterfall `function` is a callback. The callback should be invoked upon a series `function` completion. The first argument is reserved as an `error` argument (which can be `null`). Any results which should be passed to the next `function` in the series should be provided beginning with the second argument.
-   If any `function` calls the provided callback with a truthy `error` argument, the waterfall suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   This implementation does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a `function` which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var replace = require( '@stdlib/string/replace' );
var waterfall = require( '@stdlib/utils/async/series-waterfall' );

function foo( next ) {
    next( null, 'beep' );
}

function bar( str, next ) {
    console.log( str );
    next( null, replace( str, 'e', 'o' ) );
}

function fun( str, next ) {
    console.log( str );
    next();
}

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'done' );
}

var fcns = [ foo, bar, fun ];

waterfall( fcns, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

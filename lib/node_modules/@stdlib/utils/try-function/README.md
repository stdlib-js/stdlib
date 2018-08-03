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

# Try Function

> Wrap a function in a try/catch block.

<section class="usage">

## Usage

```javascript
var wrap = require( '@stdlib/utils/try-function' );
```

#### wrap( fcn )

Wraps a `function` in a `try/catch` block.

```javascript
function fcn() {
    throw new Error( 'beep boop' );
}

var f = wrap( fcn );

var out = f();
if ( out instanceof Error ) {
    console.error( out.message );
    // => 'beep boop'
}
```

The returned `function` has the same signature as the wrapped `function`.

```javascript
function fcn( a, b, c, d ) {
    var sum = a + b + c + d;
    if ( sum < 10 ) {
        throw new Error( 'invalid arguments. Arguments must sum to a number greater than or equal to 10.' );
    }
    return sum;
}

var f = wrap( fcn );

var out = f( 5, 6, 7, 8 );
// returns 26

out = f( 1, 2, 3, 1 );
// returns <Error>
```

If provided an asynchronous `function`, the returned `function` only traps `errors` which occur during the current event loop tick.

<!-- run throws: true -->

```javascript
function fcn( a, b, clbk ) {
    if ( !a ) {
        throw new Error( 'invalid argument.' );
    }
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        if ( !b ) {
            throw new Error( 'invalid argument.' );
        }
        clbk();
    }
}

function done() {
    console.log( 'beep' );
}

var f = wrap( fcn );

var out = f( null, 5, done );
// returns <Error>

out = f( true, null, done );
// returns undefined
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Isolating `try/catch` blocks as separate wrapped `functions` prevents a parent scope from permanently entering optimization hell.
-   If a function throws a literal, the literal is serialized as a `string` and returned as an `Error` object.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- run throws: true -->

<!-- eslint no-undef: "error" -->

```javascript
var wrap = require( '@stdlib/utils/try-function' );

function beep( str ) {
    if ( typeof str !== 'string' ) {
        throw new TypeError( 'invalid argument. Must provide a string primitive. Value: `' + str + '`.' );
    }
    return 'beep ' + str;
}

function boop( str, clbk ) {
    if ( typeof str !== 'string' ) {
        throw new TypeError( 'invalid argument. Must provide a string primitive. Value: `' + str + '`.' );
    }
    setTimeout( done, 1000 );

    function done() {
        if ( str !== 'beep' ) {
            throw new Error( 'invalid argument. String must equal `beep`. Value: `' + str + '`.' );
        }
        clbk( str + ' boop' );
    }
}

function done( str ) {
    if ( str !== 'beep boop' ) {
        throw new Error( 'huh?' );
    }
}

var out;
var f;

// Synchronous...
f = wrap( beep );

out = f( 'boop' );
console.log( out );
// => 'beep boop'

out = f( null );
console.log( out.message );
// => '...'

// Asynchronous...
f = wrap( boop );

out = f( 'beep', done );
console.log( out );
// => undefined

out = f( 'foo', done );
console.log( out );
// => undefined
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->

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

# mapKeysAsync

> Map keys from one object to a new object having the same values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mapKeysAsync = require( '@stdlib/utils/async/map-keys' );
```

#### mapKeysAsync( obj, \[options,] transform, done )

Map keys from one `object` to a new `object` having the same values.

```javascript
function transform( key, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, key+':beep' );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => { 'a:beep': 1, 'b:beep': 2 }
}

var obj = {
    'a': 1,
    'b': 2
};

mapKeysAsync( obj, transform, done );
```

The `next` callback accepts two arguments: `error` and `key`. The second argument to the `next` callback is the transformed property name. If a `transform` function calls the `next` callback with a truthy error argument, the function stops processing any additional own properties and calls the `done` callback for error processing.

```javascript
function transform( key, value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        if ( value === 1 ) {
            return next( new Error( 'boop' ) );
        }
        next( null, key+':beep' );
    }
}

function done( error ) {
    if ( error ) {
        console.error( error.message );
        // => 'boop'
    }
}

var obj = {
    'a': 1,
    'b': 2
};

mapKeysAsync( obj, transform, done );
```

The function accepts the following `options`:

-   `limit`: the maximum number of pending invocations at any one time. Default: `infinity`.
-   `series`: `boolean` indicating whether to sequentially invoke the `transform` function for each own property. If `true`, the function sets `options.limit=1`. Default: `false`.
-   `thisArg`: the execution context for `fcn`.

By default, all properties are processed concurrently, which means that the function does **not** guarantee completion order. To process each property sequentially, set the `series` option to `true`.

```javascript
function transform( key, value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, key+':beep' );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => { 'a:beep': 1, 'b:beep': 2 }
}

var obj = {
    'a': 1,
    'b': 2
};

var opts = {
    'series': true
};

mapKeysAsync( obj, opts, transform, done );
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function transform( key, value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, key+':beep' );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => { 'a:beep': 1, 'b:beep': 2, 'c:beep': 3 }
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3
};

var opts = {
    'limit': 2
};

mapKeysAsync( obj, opts, transform, done );
```

To set the execution context of the `transform` function, set the `thisArg` option.

```javascript
function transform( key, value, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, key+':beep' );
    }
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3
};

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

mapKeysAsync( obj, opts, transform, done );

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => { 'a:beep': 1, 'b:beep': 2, 'c:beep': 3 }

    console.log( context.count );
    // => 3
}
```

When invoked, the `transform` function is provided a maximum of four arguments:

-   `key`: object key.
-   `value`: object value corresponding to `key`.
-   `obj`: source object.
-   `next`: a callback which should be called once the `transform` function has finished processing a property.

The actual number of provided arguments depends on function `length`. If the `transform` function accepts two arguments, the `transform` function is provided `key` and `next`. If the `transform` function accepts three arguments, the `transform` function is provided `key`, `value`, and `next`. For every other `transform` function signature, the `transform` function is provided all four arguments.

```javascript
function transform( key, value, obj, next ) {
    console.log( 'obj: %s. %s: %d', JSON.stringify( obj ), key, value );
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, key+':'+value );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
}

var obj = {
    'a': 1,
    'b': 2
};

mapKeysAsync( obj, transform, done );
/* => e.g.,
    obj: {"a": 1, "b": 2}. a: 1
    obj: {"a": 1, "b": 2}. b: 2
    { 'a:1': 1, 'b:2': 2 }
*/
```

#### mapKeysAsync.factory( \[options,] transform )

Returns a `function` which invokes a `transform` function once for each own property.

```javascript
function transform( key, value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, key+':beep' );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
}

var f = mapKeysAsync.factory( transform );

var obj1 = {
    'a': 1,
    'b': 2
};

f( obj1, done );
// => { 'a:beep': 1, 'b:beep': 2 }

var obj2 = {
    'c': 3,
    'd': 4
};

f( obj2, done );
// => { 'c:beep': 3, 'd:beep': 4 }
```

The function accepts the same `options` as `mapKeysAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   If provided an empty `object`, the function calls the `done` callback with an empty `object`.
-   Key iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for iteration order.
-   Key insertion order is **not** guaranteed.
-   The value returned by a `transform` function should be a value which can be serialized as an `object` key.
-   The function only maps **own** properties. Hence, the function does **not** map inherited properties.
-   The function **shallow** copies key values.
-   **Neither** `mapKeysAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs/read-file' );
var mapKeysAsync = require( '@stdlib/utils/async/map-keys' );

var files = {
    'file1': resolve( __dirname, 'package.json' ),
    'file2': resolve( __dirname, 'README.md' )
};

function read( key, value, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( value, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            return next( error, key+':unreadable' );
        }
        next( null, key+':readable' );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
}

mapKeysAsync( files, read, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->

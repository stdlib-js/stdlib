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

# stdin

> Read data from [`stdin`][@stdlib/streams/node/stdin].

<section class="usage">

## Usage

```javascript
var stdin = require( '@stdlib/process/read-stdin' );
```

#### stdin( \[encoding,] clbk )

Reads data from [`stdin`][@stdlib/streams/node/stdin].

<!-- run-disable -->

```javascript
function onRead( error, data ) {
    if ( error ) {
        return console.error( 'Error: %s', error.message );
    }
    console.log( data.toString() );
    // => '...'
}

stdin( onRead );
```

By default, returned `data` is a [`Buffer`][buffer]. To return a `string` of a specified encoding, provide an `encoding` parameter.

<!-- run-disable -->

```javascript
function onRead( error, data ) {
    if ( error ) {
        return console.error( 'Error: %s', error.message );
    }
    console.log( data );
    // => '...'
}

stdin( 'utf8', onRead );
```

When a file's calling Node.js process is running in a [TTY][tty] context (i.e., no [`stdin`][@stdlib/streams/node/stdin]), `data` will either be an empty [`Buffer`][buffer] (no encoding provided) or an empty `string` (encoding provided).

<!-- run-disable -->

```javascript
var stream = require( '@stdlib/streams/node/stdin' );

function onRead( error, data ) {
    if ( error ) {
        return console.error( 'Error: %s', error.message );
    }
    console.log( data );
    // => ''
}

stream.isTTY = true;

stdin( 'utf8', onRead );
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint no-undef: "error" -->

```javascript
var string2buffer = require( '@stdlib/buffer/from-string' );
var stream = require( '@stdlib/streams/node/stdin' );
var stdin = require( '@stdlib/process/read-stdin' );

function onRead( error, data ) {
    if ( error ) {
        console.error( 'Error: %s', error.message );
    } else {
        console.log( data.toString() );
        // => 'beep boop'
    }
}

// Fake not being in a terminal context:
stream.isTTY = false;

// Provide a callback to consume all data from `stdin`:
stdin( onRead );

// Push some data to `stdin`:
stream.push( string2buffer( 'beep' ) );
stream.push( string2buffer( ' ' ) );
stream.push( string2buffer( 'boop' ) );

// End the stream:
stream.push( null );
```

</section>

<!-- /.examples -->

<section class="links">

[buffer]: https://nodejs.org/api/buffer.html

[tty]: https://nodejs.org/api/tty.html#tty_tty

[@stdlib/streams/node/stdin]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->

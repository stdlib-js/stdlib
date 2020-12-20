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

# Standard Input

> [Standard input][standard-streams].

<section class="usage">

## Usage

```javascript
var stdin = require( '@stdlib/streams/node/stdin' );
```

#### stdin

[Standard input][standard-streams] as a [Readable stream][readable-stream].

<!-- run-disable -->

```javascript
var string2buffer = require( '@stdlib/buffer/from-string' );
var Buffer = require( '@stdlib/buffer/ctor' );

var data = [];
var len = 0;

stdin.on( 'readable', onReadable );
stdin.on( 'error', onError );
stdin.on( 'end', onEnd );

function onReadable() {
    var chunk;
    while ( true ) {
        chunk = stdin.read();
        if ( chunk === null ) {
            break;
        }
        if ( typeof chunk === 'string' ) {
            chunk = string2buffer( chunk );
        }
        data.push( chunk );
        len += chunk.length;
    }
}

function onError( error ) {
    if ( error ) {
        console.error( error.message );
    }
}

function onEnd() {
    data = Buffer.concat( data, len );
    console.log( data.toString() );
    // => '...'
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint no-undef: "error" -->

```javascript
var proc = require( 'process' );
var stdin = require( '@stdlib/streams/node/stdin' );
var stdout = require( '@stdlib/streams/node/stdout' );

// Set the encoding:
stdin.setEncoding( 'utf8' );

// Create an echo stream:
stdin.pipe( stdout );

// Push data to `stdin`:
stdin.push( 'beep' );
stdin.push( ' ' );
stdin.push( 'boop' );
stdin.push( '\n' );

// End the stream:
stdin.push( null );

// Ensure the process closes:
setTimeout( proc.exit, 1000 );
```

</section>

<!-- /.examples -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[readable-stream]: https://nodejs.org/api/stream.html#stream_class_stream_readable

</section>

<!-- /.links -->

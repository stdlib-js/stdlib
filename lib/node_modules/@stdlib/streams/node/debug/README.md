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

# Debug Stream

> [Transform stream][transform-stream] for [debugging][node-debug] stream pipelines.

<section class="usage">

## Usage

```javascript
var debugStream = require( '@stdlib/streams/node/debug' );
```

<a name="debug-stream"></a>

#### debugStream( \[options,] \[clbk] )

Creates a [transform stream][transform-stream] for [debugging][node-debug] stream pipelines.

```javascript
var ENV = require( '@stdlib/process/env' );

// Set the `DEBUG` environment variable...
ENV.DEBUG = '*';

var stream = debugStream({
    'name': 'my-stream'
});

stream.write( 'a' );
stream.write( 'b' );
stream.write( 'c' );
stream.end();
```

The function accepts the following `options`:

-   **name**: [debug][node-debug] namespace.
-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **allowHalfOpen**: specifies whether a [stream][stream] should remain open even if one side ends. Default: `false`.
-   **readableObjectMode**: specifies whether the readable side should be in [objectMode][object-mode]. Default: `false`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'name': 'my-app',
    'objectMode': true,
    'highWaterMark': 64,
    'allowHalfOpen': true,
    'readableObjectMode': false // overridden by `objectMode` option when `objectMode=true`
};

var stream = debugStream( opts );
```

By default, each `chunk` is logged as a JSON stringified `string`, along with the `chunk` index. For more control over logging behavior, provide a `callback`.

```javascript
function logger( debug, chunk, idx ) {
    debug( 'Received a new chunk...' );
    debug( 'Beep: %s', chunk.beep );
    debug( 'Boop: %s', chunk.boop );
}

var opts = {
    'name': 'my-pipeline'
};

var stream = debugStream( opts, logger );
```

#### debugStream.factory( \[options] )

Returns a `function` for creating [streams][transform-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'objectMode': true,
    'highWaterMark': 64
};

var factory = debugStream.factory( opts );
```

This method accepts the same `options` as [`debugStream()`](#debug-stream), **except** for `name`, which must be provided **explicitly**.

##### factory( name\[, clbk] )

Creates a [debug][node-debug] stream.

```javascript
var factory = debugStream.factory();

var streams = [];
var i;

// Assign each stream to a separate debug namespace...
for ( i = 0; i < 10; i++ ) {
    streams.push( factory( 'stream '+i ) );
}
```

#### debugStream.objectMode( \[options,] \[clbk] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var stream = debugStream.objectMode({
    'name': 'beep-boop'
});

stream.write({
    'value': 'a'
});
stream.write({
    'value': 'b'
});
stream.write({
    'value': 'c'
});
stream.end();
```

This method accepts the same `options` as [`debugStream()`](#debug-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the [`DEBUG`][node-debug] environment variable is **not** set, no data is logged.
-   Providing a `name` option is **strongly** encouraged, as the [`DEBUG`][node-debug] environment variable can be used to filter debuggers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );
var stdout = require( '@stdlib/streams/node/stdout' );
var transformFactory = require( '@stdlib/streams/node/transform' ).factory;
var debug = require( '@stdlib/streams/node/debug' ).objectMode;

function parse( chunk, enc, clbk ) {
    clbk( null, parseJSON( chunk ) );
}

function pluck( chunk, enc, clbk ) {
    clbk( null, chunk.value );
}

function square( chunk, enc, clbk ) {
    var v = +chunk;
    clbk( null, v*v );
}

function toStr( chunk, enc, clbk ) {
    clbk( null, chunk.toString() );
}

function join( chunk, enc, clbk ) {
    clbk( null, chunk+'\n' );
}

// Create a factory for generating streams running in `objectMode`:
var tStream = transformFactory({
    'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var d1 = debug({
    'name': 'parse'
});
var s2 = tStream( pluck );
var d2 = debug({
    'name': 'pluck'
});
var s3 = tStream( square );
var d3 = debug({
    'name': 'square'
});
var s4 = tStream( toStr );
var d4 = debug({
    'name': 'toString'
});
var s5 = tStream( join );
var d5 = debug({
    'name': 'join'
});

// Create the pipeline:
s1.pipe( d1 )
    .pipe( s2 )
    .pipe( d2 )
    .pipe( s3 )
    .pipe( d3 )
    .pipe( s4 )
    .pipe( d4 )
    .pipe( s5 )
    .pipe( d5 )
    .pipe( stdout );

// Write data to the pipeline...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = '{"value":'+i+'}';
    s1.write( v, 'utf8' );
}
s1.end();
```

</section>

<!-- /.examples -->

<section class="links">

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[transform-stream]: https://nodejs.org/api/stream.html

[node-debug]: https://www.npmjs.com/package/debug

</section>

<!-- /.links -->

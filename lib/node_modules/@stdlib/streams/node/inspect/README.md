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

# Inspect Stream

> [Transform stream][transform-stream] for inspecting streamed data.

<section class="usage">

## Usage

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect' );
```

<a name="inspect-stream"></a>

#### inspectStream( \[options,] clbk )

Creates a [transform stream][transform-stream] for inspecting streamed data.

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var stream = inspectStream( log );

stream.write( 'a' );
stream.write( 'b' );
stream.write( 'c' );

stream.end();
/* =>
'index: 0'
'a'
'index: 1'
'b'
'index: 2'
'c'
*/
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **allowHalfOpen**: specifies whether a [stream][stream] should remain open even if one side ends. Default: `false`.
-   **readableObjectMode**: specifies whether the readable side should be in [objectMode][object-mode]. Default: `false`.

To set [stream][stream] `options`,

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var opts = {
    'objectMode': true,
    'highWaterMark': 64,
    'allowHalfOpen': true,
    'readableObjectMode': false // overridden by `objectMode` option when `objectMode=true`
};

var stream = inspectStream( opts, log );
```

#### inspectStream.factory( \[options] )

Returns a `function` for creating [streams][transform-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'objectMode': true,
    'highWaterMark': 64
};

var factory = inspectStream.factory( opts );
```

This method accepts the same `options` as [`inspectStream()`](#inspect-stream).

##### factory( clbk )

Creates a [transform stream][transform-stream] for inspecting streamed data.

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var factory = inspectStream.factory();

// Create 10 identically configured streams...
var streams = [];
var i;
for ( i = 0; i < 10; i++ ) {
    streams.push( factory( log ) );
}
```

#### inspectStream.objectMode( \[options,] clbk )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

<!-- eslint-disable object-curly-newline -->

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var stream = inspectStream.objectMode( log );

stream.write( { 'value': 'a' } );
stream.write( { 'value': 'b' } );
stream.write( { 'value': 'c' } );

stream.end();
/* =>
'index: 0'
{'value': 'a'}
'index: 1'
{'value': 'b'}
'index: 2'
{'value': 'c'}
*/
```

This method accepts the same `options` as [`inspectStream()`](#inspect-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );
var stdout = require( '@stdlib/streams/node/stdout' );
var transformFactory = require( '@stdlib/streams/node/transform' ).factory;
var inspect = require( '@stdlib/streams/node/inspect' ).objectMode;

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

function logger( name ) {
    return log;

    function log( chunk, idx ) {
        console.log( 'name: %s', name );
        console.log( 'index: %d', idx );
        console.log( chunk );
    }
}

// Create a factory for generating streams running in `objectMode`:
var tStream = transformFactory({
    'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var i1 = inspect( logger( 'parse' ) );
var s2 = tStream( pluck );
var i2 = inspect( logger( 'pluck' ) );
var s3 = tStream( square );
var i3 = inspect( logger( 'square' ) );
var s4 = tStream( toStr );
var i4 = inspect( logger( 'toString' ) );
var s5 = tStream( join );
var i5 = inspect( logger( 'join' ) );

// Create the pipeline:
s1.pipe( i1 )
    .pipe( s2 )
    .pipe( i2 )
    .pipe( s3 )
    .pipe( i3 )
    .pipe( s4 )
    .pipe( i4 )
    .pipe( s5 )
    .pipe( i5 )
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

</section>

<!-- /.links -->

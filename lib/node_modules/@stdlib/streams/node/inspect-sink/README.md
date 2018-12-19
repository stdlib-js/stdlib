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

> [Writable stream][writable-stream] for inspecting streamed data.

<section class="usage">

## Usage

```javascript
var inspectSinkStream = require( '@stdlib/streams/node/inspect-sink' );
```

<a name="inspect-sink-stream"></a>

#### inspectSinkStream( \[options,] clbk )

Creates a [writable stream][writable-stream] for inspecting streamed data.

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var stream = inspectSinkStream( log );

stream.write( 'a' );
stream.write( 'b' );
stream.write( 'c' );

stream.end();

// prints: index: 0
// prints: a
// prints: index: 1
// prints: b
// prints: index: 2
// prints: c
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **decodeStrings**: specifies whether to encode strings as `Buffer` objects before writing data to a returned [stream][stream]. Default: `true`.
-   **defaultEncoding**: default encoding when not explicitly specified when writing data. Default: `'utf8'`.

To set [stream][stream] `options`,

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var opts = {
    'objectMode': true,
    'highWaterMark': 64,
    'decodeStrings': false,
    'defaultEncoding': 'utf8'
};

var stream = inspectSinkStream( opts, log );
```

#### inspectSinkStream.factory( \[options] )

Returns a `function` for creating [streams][writable-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'objectMode': true,
    'highWaterMark': 64
};

var factory = inspectSinkStream.factory( opts );
```

This method accepts the same `options` as [`inspectSinkStream()`](#inspect-sink-stream).

##### factory( clbk )

Creates a [writable stream][writable-stream] for inspecting streamed data.

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var factory = inspectSinkStream.factory();

// Create 10 identically configured streams...
var streams = [];
var i;
for ( i = 0; i < 10; i++ ) {
    streams.push( factory( log ) );
}
```

#### inspectSinkStream.objectMode( \[options,] clbk )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

<!-- eslint-disable object-curly-newline -->

```javascript
function log( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

var stream = inspectSinkStream.objectMode( log );

stream.write( { 'value': 'a' } );
stream.write( { 'value': 'b' } );
stream.write( { 'value': 'c' } );

stream.end();

// prints: index: 0
// prints: {'value': 'a'}
// prints: index: 1
// prints: {'value': 'b'}
// prints: index: 2
// prints: {'value': 'c'}
```

This method accepts the same `options` as [`inspectSinkStream()`](#inspect-sink-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );
var transformFactory = require( '@stdlib/streams/node/transform' ).factory;
var inspect = require( '@stdlib/streams/node/inspect-sink' ).objectMode;

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

function logger( chunk, idx ) {
    console.log( 'index: %d', idx );
    console.log( chunk );
}

// Create a factory for generating streams running in `objectMode`:
var tStream = transformFactory({
    'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var s2 = tStream( pluck );
var s3 = tStream( square );
var s4 = tStream( toStr );
var s5 = tStream( join );

// Create a writable stream for inspecting the result of the transformations:
var is = inspect( logger );

// Create the pipeline:
s1.pipe( s2 )
    .pipe( s3 )
    .pipe( s4 )
    .pipe( s5 )
    .pipe( is );

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

[writable-stream]: https://nodejs.org/api/stream.html

</section>

<!-- /.links -->

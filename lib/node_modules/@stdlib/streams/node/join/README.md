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

# Join Stream

> [Transform stream][transform-stream] which joins streamed data.

<section class="usage">

## Usage

```javascript
var joinStream = require( '@stdlib/streams/node/join' );
```

<a name="join-stream"></a>

#### joinStream( \[options] )

Creates a [transform stream][transform-stream] which joins streamed data.

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var stream = joinStream();

stream.pipe( stdout );

stream.write( '1' );
stream.write( '2' );
stream.write( '3' );

stream.end();

// prints: 1\n2\n3
```

The function accepts the following `options`:

-   **sep**: separator used to join streamed data. Default: `'\n'`.
-   **objectMode**: specifies whether a [stream][stream] should operate in object mode. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **allowHalfOpen**: specifies whether a [stream][stream] should remain open even if one side ends. Default: `false`.
-   **readableObjectMode**: specifies whether the readable side should be in object mode. Default: `false`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'sep': ',',
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64,
    'allowHalfOpen': true,
    'readableObjectMode': false // overridden by `objectMode` option when `objectMode=true`
};

var stream = joinStream( opts );
```

#### joinStream.factory( \[options] )

Returns a `function` for creating [streams][transform-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'sep': '\t',
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var factory = joinStream.factory( opts );

// Create 10 identically configured streams...
var streams = [];
var i;
for ( i = 0; i < 10; i++ ) {
    streams.push( factory() );
}
```

This method accepts the same `options` as [`joinStream()`](#join-stream).

#### joinStream.objectMode( \[options] )

This method is a convenience function to create [streams][stream] which **always** operate in `objectMode`.

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var stream = joinStream.objectMode({
    'sep': ','
});

stream.pipe( stdout );

stream.write( 'a' );
stream.write( 'b' );
stream.write( 'c' );

stream.end();

// prints: a,b,c
```

This method accepts the same `options` as [`joinStream()`](#join-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var splitStream = require( '@stdlib/streams/node/split' );
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var joinStream = require( '@stdlib/streams/node/join' );

var inspect;
var split;
var join;
var i;

function log( chunk ) {
    console.log( chunk.toString() );
}

// Create a split stream for tab delimited data:
split = splitStream({
    'sep': /\t/
});

// Create a stream to make newline delimited data:
join = joinStream({
    'sep': '\n'
});

// Create a stream to inspect joined output:
inspect = inspectStream( log );

// Create a stream pipeline:
split
    .pipe( join )
    .pipe( inspect );

// Write values to the split stream...
for ( i = 0; i < 10; i++ ) {
    split.write( i+'\t', 'utf8' );
}
split.end();
```

</section>

<!-- /.examples -->

<section class="links">

[stream]: https://nodejs.org/api/stream.html

[transform-stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

</section>

<!-- /.links -->

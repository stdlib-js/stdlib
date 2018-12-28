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

# Strided Array Stream

> Create a [readable stream][readable-stream] from a strided array-like object.

<section class="usage">

## Usage

```javascript
var stridedArrayStream = require( '@stdlib/streams/node/from-strided-array' );
```

<a name="strided-array-stream"></a>

#### stridedArrayStream( N, buffer, stride, offset\[, options] )

Returns a [readable stream][readable-stream] from a strided array-like `object`.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var stream = stridedArrayStream( 4, [ 1, 2, 3, 4 ], 1, 0 );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before pausing streaming.
-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.
-   **serialize**: custom serialization function. This option is only applicable when a stream is **not** in [objectMode][object-mode].

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = stridedArrayStream( 4, [ 1, 2, 3, 4 ], 1, 0, opts );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates individual values using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var stream = stridedArrayStream( 4, [ 1, 2, 3, 4 ], 1, 0, {
    'sep': ','
});

var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] serializes values as JSON strings. To specify custom serialization behavior (either to a `string` or `Buffer`), set the `serialize` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function serialize( v ) {
    return 'v::' + v.toString();
}

function log( chunk ) {
    console.log( chunk.toString() );
}

var stream = stridedArrayStream( 4, [ 1, 2, 3, 4 ], 1, 0, {
    'serialize': serialize
});

var iStream = inspectStream( log );

stream.pipe( iStream );
```

* * *

#### stridedArrayStream.factory( \[options] )

Returns a `function` for creating [readable streams][readable-stream] from strided array-like objects.

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = stridedArrayStream.factory( opts );

var stream1 = createStream( 2, [ 1, 2, 3, 4 ], 2, 1 );
var stream2 = createStream( 3, [ 5, 6, 7, 8 ], 1, 1 );
// ...
```

The method accepts the same `options` as [`stridedArrayStream()`](#strided-array-stream).

* * *

#### stridedArrayStream.objectMode( N, buffer, stride, offset\[, options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( v ) {
    console.log( v );
}

var stream = stridedArrayStream.objectMode( 4, [ 1, 2, 3, 4 ], 1, 0 );

var opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`stridedArrayStream()`](#strided-array-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   In [`objectMode`][object-mode], `null` is a reserved value. If an `array` contains `null` values (e.g., as a means to encode missing values), the stream will prematurely end. Consider an alternative encoding or filter `null` values prior to invocation.
-   In binary mode, if an `array` contains `undefined` values, the stream will emit an error. Consider providing a custom serialization function or filtering `undefined` values prior to invocation.

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var stridedArrayStream = require( '@stdlib/streams/node/from-strided-array' );

function log( v ) {
    console.log( v.toString() );
}

// Create an array containing uniformly distributed pseudorandom numbers:
var arr = new Float64Array( 20 );

var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu();
}

// Create a stream which iterates over every other element from right-to-left:
var opts = {
    'objectMode': true
};
var stream = stridedArrayStream( 10, arr, -2, arr.length-2, opts );

// Create a writable stream for inspecting stream data:
opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

// Begin data flow:
stream.pipe( iStream );
```

</section>

<!-- /.examples -->

<section class="links">

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

</section>

<!-- /.links -->

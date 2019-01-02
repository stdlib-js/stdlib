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

# Iterator Stream

> Create a [readable stream][readable-stream] from an [iterator][mdn-iterator-protocol].

<section class="usage">

## Usage

```javascript
var iteratorStream = require( '@stdlib/streams/node/from-iterator' );
```

<a name="iterator-stream"></a>

#### iteratorStream( iterator\[, options] )

Returns a [readable stream][readable-stream] from an [iterator][mdn-iterator-protocol].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/iter/randu' );

var iStream;
var stream;

function log( chunk, idx ) {
    console.log( chunk.toString() );
    if ( idx === 10 ) {
        stream.destroy();
    }
}

stream = iteratorStream( randu() );
iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before pausing iteration.
-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.
-   **serialize**: custom serialization function. This option is only applicable when a stream is **not** in [objectMode][object-mode].

To set [stream][stream] `options`,

```javascript
var randu = require( '@stdlib/random/iter/randu' );

var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = iteratorStream( randu(), opts );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates iterated values using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/iter/randu' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var it = randu({
    'iter': 10
});

var stream = iteratorStream( it, {
    'sep': ','
});

var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] serializes iterated values as JSON strings. To specify custom serialization behavior (either to a `string` or `Buffer`), set the `serialize` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/iter/randu' );

function serialize( v ) {
    return 'r::' + v.toString();
}

function log( chunk ) {
    console.log( chunk.toString() );
}

var it = randu({
    'iter': 10
});

var stream = iteratorStream( it, {
    'serialize': serialize
});

var iStream = inspectStream( log );

stream.pipe( iStream );
```

* * *

#### iteratorStream.factory( \[options] )

Returns a `function` for creating [readable streams][readable-stream] from [iterators][mdn-iterator-protocol].

```javascript
var randu = require( '@stdlib/random/iter/randu' );

var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = iteratorStream.factory( opts );

var stream1 = createStream( randu() );
var stream2 = createStream( randu() );
// ...
```

The method accepts the same `options` as [`iteratorStream()`](#iterator-stream).

* * *

#### iteratorStream.objectMode( iterator\[, options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/iter/randu' );

function log( v ) {
    console.log( v );
}

var opts = {
    'iter': 10
};
var stream = iteratorStream.objectMode( randu( opts ) );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`iteratorStream()`](#iterator-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   In [`objectMode`][object-mode], `null` is a reserved value. If an [iterator][mdn-iterator-protocol] generates `null` values (e.g., as a means to encode missing values), the stream will prematurely end. Consider an alternative encoding or explicitly map `null` values to a different value by wrapping the provided [iterator][mdn-iterator-protocol] with another [iterator][mdn-iterator-protocol].
-   In binary mode, if an [iterator][mdn-iterator-protocol] generates `undefined` values, the stream will emit an error. Consider providing a custom serialization function or explicitly map `undefined` values to a different value by wrapping the provided [iterator][mdn-iterator-protocol] with another [iterator][mdn-iterator-protocol].

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/iter/randu' );
var iteratorStream = require( '@stdlib/streams/node/from-iterator' );

function log( v ) {
    console.log( v.toString() );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 10
};
var it = randu( opts );

// Convert the iterator to a stream:
opts = {
    'objectMode': true
};
var stream = iteratorStream( it, opts );

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

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->

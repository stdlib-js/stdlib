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

# Constant Stream

> Create a [readable stream][readable-stream] which always streams the same value.

<section class="usage">

## Usage

```javascript
var constantStream = require( '@stdlib/streams/node/from-constant' );
```

<a name="constant-stream"></a>

#### constantStream( value\[, options] )

Returns a [readable stream][readable-stream] which **always** streams the **same** `value`.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

var iStream;
var stream;

function log( chunk, i ) {
    console.log( chunk.toString() );
    if ( i === 10 ) {
        stream.destroy();
    }
}

stream = constantStream( 'beep' );
iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before pausing streaming.
-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.
-   **iter**: number of iterations.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = constantStream( 'beep', opts );
```

By default, the function returns a [stream][stream] which streams an infinite number of values (i.e., the [stream][stream] will **never** end). To limit the number of streamed values, set the `iter` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10
};

var stream = constantStream( 'beep', opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates streamed values using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10,
    'sep': ','
};

var stream = constantStream( 'beep', opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

* * *

#### constantStream.factory( \[value, ]\[options] )

Returns a `function` for creating [readable streams][readable-stream] which **always** stream the **same** provided `value`.

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = constantStream.factory( opts );
```

If provided a `value` to stream, the returned function returns [readable streams][readable-stream] which **always** stream the **same** `value`.

```javascript
var createStream = constantStream.factory( 'beep' );

var stream1 = createStream();
var stream2 = createStream();
// ...
```

If not provided a `value` to stream, the returned function requires that a `value` be provided at each invocation.

```javascript
var createStream = constantStream.factory();

var stream1 = createStream( 'beep' );
var stream2 = createStream( 'boop' );
// ...
```

The method accepts the same `options` as [`constantStream()`](#constant-stream).

* * *

#### constantStream.objectMode( value\[, options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( v ) {
    console.log( v );
}

var value = {
    'beep': 'boop'
};
var opts = {
    'iter': 10
};
var stream = constantStream.objectMode( value, opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`constantStream()`](#constant-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   In binary mode, a provided `value` must be a `string`, `Buffer`, or `Uint8Array`.
-   In [`objectMode`][object-mode], `null` is a reserved value. If provided `null`, the returned [stream][stream] will prematurely end.
-   If provided an `object` reference, the `value` is **not** copied. To avoid unwanted mutation, copy the `value` **before** creating a [stream][stream].
-   In older Node.js environments, `Uint8Array` contents may be copied to a new `Buffer` object due to changes in the underlying Node.js APIs.
-   If the `factory` method is provided only one argument and that argument is an `object` (either empty or not containing any recognized `options` properties), the method treats the argument as a value to be streamed, **not** as an `options` argument.

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var constantStream = require( '@stdlib/streams/node/from-constant' );

function log( v ) {
    console.log( v.toString() );
}

var opts = {
    'objectMode': true,
    'iter': 10
};

var stream = constantStream( 3.14, opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: constant-stream [options] <value>

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
       --sep sep            Separator used to join streamed data. Default: '\n'.
  -n,  --iter iterations    Number of iterations.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   In accordance with POSIX convention, a trailing newline is **always** appended to generated output prior to exit.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ constant-stream 'beep' -n 10
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

</section>

<!-- /.links -->

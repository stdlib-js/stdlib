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

# Empty Stream

> Create an "empty" [readable stream][readable-stream].

<section class="usage">

## Usage

```javascript
var emptyStream = require( '@stdlib/streams/node/empty' );
```

<a name="empty-stream"></a>

#### emptyStream( \[options] )

Returns an "empty" [readable stream][readable-stream] (i.e., a [stream][stream] which never streams any values).

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    // This function should never be called...
    console.log( chunk.toString() );
}

var stream = emptyStream();
var iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true
};

var stream = emptyStream( opts );
```

* * *

#### emptyStream.factory( \[options] )

Returns a `function` for creating "empty" [readable streams][readable-stream].

```javascript
var opts = {
    'objectMode': true
};

var createStream = emptyStream.factory( opts );

var stream1 = createStream();
var stream2 = createStream();
// ...
```

The method accepts the same `options` as [`emptyStream()`](#empty-stream).

* * *

#### emptyStream.objectMode()

This method is a convenience function to create "empty" [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( v ) {
    console.log( v );
}

var stream = emptyStream.objectMode();

var opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var emptyStream = require( '@stdlib/streams/node/empty' );

function log( v ) {
    console.log( v.toString() );
}

var opts = {
    'objectMode': true
};
var stream = emptyStream( opts );

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
Usage: empty-stream [options]

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ empty-stream
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

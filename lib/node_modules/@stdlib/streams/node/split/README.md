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

# Split Stream

> [Transform stream][transform-stream] which splits streamed data.

<section class="usage">

## Usage

```javascript
var splitStream = require( '@stdlib/streams/node/split' );
```

<a name="split-stream"></a>

#### splitStream( \[options] )

Creates a [transform stream][transform-stream] which splits streamed data.

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var stream = splitStream();

stream.pipe( stdout );
stream.write( '1\n2\n3' );

stream.end();

// prints: 1 => 2 => 3
```

The function accepts the following `options`:

-   **sep**: separator used to split streamed data. Similar to [`String#split`][string-split], a separator may be either a [regular expression][regexp] or a `string`. Default: `/\r?\n/`.
-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **allowHalfOpen**: specifies whether a [stream][stream] should remain open even if one side ends. Default: `false`.
-   **writableObjectMode**: specifies whether the writable side should be in [objectMode][object-mode]. Default: `false`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'sep': ',',
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64,
    'allowHalfOpen': true,
    'writableObjectMode': false // overridden by `objectMode` option when `objectMode=true`
};

var stream = splitStream( opts );
```

#### splitStream.factory( \[options] )

Returns a `function` for creating [streams][transform-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'sep': '\t',
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var factory = splitStream.factory( opts );

// Create 10 identically configured streams...
var streams = [];
var i;
for ( i = 0; i < 10; i++ ) {
    streams.push( factory() );
}
```

This method accepts the same `options` as [`splitStream()`](#split-stream).

#### splitStream.objectMode( \[options] )

This method is a convenience function to create [streams][stream] which always operate in [objectMode][object-mode].

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var stream = splitStream.objectMode({
    'sep': ','
});

stream.pipe( stdout );
stream.write( 'a,b,c' );

stream.end();

// prints: a => b => c
```

This method accepts the same `options` as [`splitStream()`](#split-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Similar to [`String#split`][string-split], a separator which is a [regular expression][regexp] containing a matching group will result in the separator being retained in the output stream.

    ```javascript
    var stdout = require( '@stdlib/streams/node/stdout' );

    var stream = splitStream({
        'sep': /(,)/
    });

    stream.pipe( stdout );
    stream.write( '1,2,3' );

    stream.end();

    // prints: 1 => , => 2 => , => 3
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var transformStream = require( '@stdlib/streams/node/transform' );
var stdout = require( '@stdlib/streams/node/stdout' );
var splitStream = require( '@stdlib/streams/node/split' );

function append( chunk, enc, clbk ) {
    clbk( null, chunk.toString()+'\n' );
}

var newline;
var stream;
var i;

// Create a split stream to split tab delimited data:
stream = splitStream({
    'sep': /\t/
});

// Create a transform stream to make newline delimited data...
newline = transformStream({
    'transform': append,
    'objectMode': true
});

// Create a stream pipeline:
stream
    .pipe( newline )
    .pipe( stdout );

// Write data to the pipeline...
for ( i = 0; i < 10; i++ ) {
    stream.write( i+'\t', 'utf8' );
}
stream.end();
```

</section>

<!-- /.examples -->

<section class="links">

[stream]: https://nodejs.org/api/stream.html

[transform-stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[string-split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->

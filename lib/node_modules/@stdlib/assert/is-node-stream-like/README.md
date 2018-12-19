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

# Stream-like

> Test if a value is Node [stream][nodejs-stream]-like.

<section class="usage">

## Usage

```javascript
var isNodeStreamLike = require( '@stdlib/assert/is-node-stream-like' );
```

#### isNodeStreamLike( value )

Tests if a `value` is Node [stream][nodejs-stream]-like.

```javascript
var transformStream = require( '@stdlib/streams/node/transform' );

var bool = isNodeStreamLike( transformStream() );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var stream = require( 'stream' );
var transformStream = require( '@stdlib/streams/node/transform' );
var isNodeStreamLike = require( '@stdlib/assert/is-node-stream-like' );

var bool = isNodeStreamLike( new stream.Stream() );
// returns true

bool = isNodeStreamLike( new stream.Readable() );
// returns true

bool = isNodeStreamLike( new stream.Writable() );
// returns true

bool = isNodeStreamLike( new stream.Duplex() );
// returns true

bool = isNodeStreamLike( new stream.Transform() );
// returns true

bool = isNodeStreamLike( transformStream() );
// returns true

bool = isNodeStreamLike( {} );
// returns false

bool = isNodeStreamLike( [] );
// returns false

bool = isNodeStreamLike( null );
// returns false

function Stream() {
    return this;
}

bool = isNodeStreamLike( Stream );
// returns false

bool = isNodeStreamLike( new Stream() );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[nodejs-stream]: https://nodejs.org/api/stream.html

</section>

<!-- /.links -->

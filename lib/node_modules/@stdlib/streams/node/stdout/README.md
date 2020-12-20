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

# Standard Output

> [Standard output][standard-streams].

<section class="usage">

## Usage

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );
```

#### stdout

[Standard output][standard-streams] as a [Writable stream][writable-stream].

```javascript
// Write to the terminal...
stdout.write( 'beep', 'utf8' );
// e.g., => 'beep'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Unlike other streams, `stdout` can **never** be closed and, thus, never emits a `'finish'` event.
-   Although rare, writes can block when output is redirected to a file. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint no-undef: "error" -->

```javascript
var proc = require( 'process' );
var stdin = require( '@stdlib/streams/node/stdin' );
var stdout = require( '@stdlib/streams/node/stdout' );

// Set the encoding:
stdin.setEncoding( 'utf8' );

// Create an echo stream:
stdin.pipe( stdout );

// Push data to `stdin`:
stdin.push( 'beep' );
stdin.push( ' ' );
stdin.push( 'boop' );
stdin.push( '\n' );

// End the stream:
stdin.push( null );

// Ensure the process closes:
setTimeout( proc.exit, 1000 );
```

</section>

<!-- /.examples -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[writable-stream]: https://nodejs.org/api/stream.html#stream_class_stream_writable

</section>

<!-- /.links -->

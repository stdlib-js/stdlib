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

# Simple HTTP Server

> Create a simple HTTP server.

<section class="usage">

## Usage

```javascript
var httpServer = require( '@stdlib/net/simple-http-server' );
```

#### httpServer( \[options,] \[clbk] )

Creates a simple HTTP server.

<!-- run-disable -->

```javascript
// Serve from the current working directory of the calling process:
httpServer();
```

The function accepts the following options:

-   **dir**: directory from which to serve files.
-   **port**: server port. Default: `0` (i.e., randomly assigned).
-   **maxport**: max server port (used when port hunting). Default: `=port`.
-   **hostname**: server hostname.
-   **address**: server address. Default: `"0.0.0.0"`.
-   **open**: `boolean` indicating whether to launch a web browser.

By default, the server serves content from the current working directory of the calling process. To serve from an alternative directory (resolved relative to the current working directory), set the `dir` option.

<!-- run-disable -->

```javascript
var opts = {
    'dir': './examples'
};
httpServer( opts );
```

To obtain the `server` handle, provide a callback.

```javascript
var nextTick = require( '@stdlib/utils/next-tick' );

function onReady( error, server ) {
    if ( error ) {
        throw error;
    }
    nextTick( close );
    function close() {
        server.close();
    }
}
httpServer( onReady );
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var httpServer = require( '@stdlib/net/simple-http-server' );

var opts = {
    'dir': './',
    'port': 7331,
    'hostname': 'localhost',
    'open': false
};

httpServer( opts, clbk );

function clbk( error, server ) {
    if ( error ) {
        throw error;
    }
    // Give the user a few seconds to open her web browser before closing the server...
    setTimeout( onTimeout, 5000 );

    function onTimeout() {
        server.close();
    }
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: simple-http-server [options] [dirpath]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -p,    --port port           Server port. Default: 0.
         --maxport maxport     Max server port. Default: `port`.
         --hostname hostname   Server hostname.
         --address address     Server address. Default: 0.0.0.0.
         --open                Launch a browser once server is ready.
```

The application recognizes the following [environment variables][environment-variable]:

-   `DEBUG`: enable verbose logging.
-   `PORT`: server port.
-   `MAXPORT`: max server port.
-   `HOSTNAME`: server hostname.
-   `ADDRESS`: server address.

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Command-line arguments **always** take precedence over [environment variables][environment-variable].

</section>

<!-- /.notes -->

<section class="examples">

### Examples

To serve content from the current directory,

```bash
$ DEBUG=* simple-http-server
...
```

To serve content from an alternative directory,

```bash
$ DEBUG=* simple-http-server ./examples
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[environment-variable]: https://en.wikipedia.org/wiki/Environment_variable

</section>

<!-- /.links -->

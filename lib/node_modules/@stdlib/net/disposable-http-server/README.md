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

# Disposable HTTP Server

> Create a disposable HTTP server.

<section class="usage">

## Usage

<!-- run-disable -->

```javascript
var httpServer = require( '@stdlib/net/disposable-http-server' );
```

#### httpServer( options\[, clbk] )

Creates a disposable HTTP server; i.e., the server closes immediately after serving provided content.

<!-- run-disable -->

```javascript
var opts = {
    'html': '<script src="/bundle.js"></script>',
    'javascript': 'console.log( "Boop" );'
};

httpServer( opts );
```

The function supports the following parameters:

-   **options**: function options.
-   **clbk**: callback to invoke upon creating a server (_optional_).

The function accepts the following options:

-   **html**: Buffer or string to serve as HTML content.
-   **javascript**: Buffer or string to serve as JavaScript.
-   **port**: server port. Default: `0` (i.e., randomly assigned).
-   **maxport**: max server port (used when port hunting). Default: `=port`.
-   **hostname**: server hostname.
-   **address**: server address. Default: `"0.0.0.0"`.
-   **open**: boolean indicating whether to launch a web browser. Default: `false`.

To serve HTML content, set the `html` option. Once the content is requested, the server will close.

<!-- run-disable -->

```javascript
var opts = {
    'html': '<h1>Beep</h1>'
};

httpServer( opts );
```

To serve JavaScript, set the `javascript` option. If no HTML is provided, an HTML boilerplate is served and the JavaScript is served as `/bundle.js`. Once the content is requested, the server will close.

<!-- run-disable -->

```javascript
var opts = {
    'javascript': 'console.log( "Boop" );'
};

httpServer( opts );
```

If HTML and JavaScript are provided, in order for the JavaScript to be served, the HTML content should request the file `/bundle.js`.

<!-- run-disable -->

```javascript
var opts = {
    'html': '<script src="/bundle.js"></script>',
    'javascript': 'console.log( "Boop" );'
};

httpServer( opts );
```

To obtain the `server` handle, provide a callback.

<!-- run-disable -->

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

var opts = {
    'html': html,
    'javascript': 'console.log( "Boop" );'
};

httpServer( opts, onReady );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If neither the `html` nor `javascript` option is set, the server serves an HTML boilerplate and then closes.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var httpServer = require( '@stdlib/net/disposable-http-server' );

var html = join( __dirname, 'examples', 'fixtures', 'index.html' );
var js = join( __dirname, 'examples', 'fixtures', 'script.js' );

var opts = {
    'html': readFileSync( html ),
    'javascript': readFileSync( js ),
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
Usage: temp-http-server [options] (--html path | --js path | --stdin type)

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --html path           Serve HTML.
  --js,  --javascript path     Serve JavaScript.
         --stdin type          Type of content: html or javascript.
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
-   If either the `--html` or `--javascript` command-line flag is set, `stdin` is assumed to be of the other type. Accordingly, the `--stdin` flag may be omitted.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

To serve an HTML file,

```bash
$ DEBUG=* temp-http-server --html ./examples/fixtures/index.html
...
```

To serve a JavaScript file (and a default HTML boilerplate),

```bash
$ DEBUG=* temp-http-server --javascript ./examples/fixtures/script.js
...
```

In addition to file input, the application accepts [standard input][standard-streams]. To pipe HTML,

```bash
$ cat ./examples/fixtures/index.html | DEBUG=* temp-http-server --port 7331 --stdin html
...
```

To pipe HTML and load a JavaScript file,

```bash
$ cat ./examples/fixtures/index.html | DEBUG=* temp-http-server --port 7331 --javascript ./examples/fixtures/script.js
...
```

To pipe JavaScript (and serve a default HTML boilerplate),

```bash
$ cat ./examples/fixtures/script.js | DEBUG=* temp-http-server --address '127.0.0.1' --stdin javascript
...
```

To pipe JavaScript and serve custom HTML content which requests a `/bundle.js` file,

```bash
$ cat ./examples/fixtures/script.js | DEBUG=* temp-http-server --html ./examples/fixtures/index.html
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[environment-variable]: https://en.wikipedia.org/wiki/Environment_variable

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->

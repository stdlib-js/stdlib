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

# HTTP Server

> [HTTP][http] server.

<section class="usage">

## Usage

```javascript
var httpServer = require( '@stdlib/net/http-server' );
```

#### httpServer( \[options,] \[ requestListener] )

Returns a function to create an [HTTP][http] server.

```javascript
var createServer = httpServer();
```

To bind a request callback to a server, provide a `requestListener`.

```javascript
function requestListener( request, response ) {
    console.log( request.url );
    response.end( 'OK' );
}

var createServer = httpServer( requestListener );
```

The function accepts the following `options`:

-   **port**: server port. Default: `0` (i.e., randomly assigned).
-   **maxport**: max server port when port hunting. Default: `maxport=port`.
-   **hostname**: server hostname.
-   **address**: server address. Default: `127.0.0.1`.

To specify server options, provide an `options` object.

```javascript
var opts = {
    'port': 7331,
    'address': '0.0.0.0'
};

var createServer = httpServer( opts );
```

To specify a range of permissible ports, set the `maxport` option.

```javascript
var opts = {
    'maxport': 9999
};

var createServer = httpServer( opts );
```

When provided a `maxport` option, a created server will search for the first available `port` on which to listen, starting from `port`.

#### createServer( done )

Creates an [HTTP][http] server.

```javascript
function done( error, server ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
    server.close();
}

var createServer = httpServer();

createServer( done );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Port hunting can be useful in a microservice deployment. When a `port` is randomly assigned (`options.port=0`), if a server fails and is restarted, the server is unlikely to bind to its previous `port`. By allowing a constrained search, assuming no lower `ports` within a specified range have freed up in the meantime, the likelihood of listening on the same `port` is increased. A server can typically restart and bind to the same `port` faster than binding to a new `port` and re-registering with a microservice registry, thus minimizing possible service interruption and downtime.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable node/no-process-exit -->

<!-- eslint no-undef: "error" -->

```javascript
var proc = require( 'process' );
var http = require( 'http' );
var httpServer = require( '@stdlib/net/http-server' );

function done( error, server ) {
    if ( error ) {
        throw error;
    }
    http.get( 'http://127.0.0.1:7331/beep/boop', onResponse );
}

function onResponse() {
    console.log( 'Success!' );
    proc.exit( 0 );
}

function onRequest( request, response ) {
    console.log( request.url );
    response.end( 'OK' );
}

// Specify server options...
var opts = {
    'port': 7331,
    'maxport': 9999,
    'hostname': 'localhost'
};

// Create a function for creating an HTTP server...
var createServer = httpServer( opts, onRequest );

// Create a server:
createServer( done );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[http]: https://nodejs.org/api/http.html

</section>

<!-- /.links -->

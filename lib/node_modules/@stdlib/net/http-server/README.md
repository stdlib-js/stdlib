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

> [HTTP][nodejs-http] server.

<section class="usage">

## Usage

```javascript
var httpServerFactory = require( '@stdlib/net/http-server' );
```

#### httpServerFactory( \[options,] \[requestListener] )

Returns a function to create an [HTTP][nodejs-http] server.

```javascript
var httpServer = httpServerFactory();
```

The function supports the following parameters:

-   **options**: options (_optional_).
-   **requestListener**: callback to invoke upon receiving an HTTP request (_optional_).

To bind a request callback to a server, provide a `requestListener`.

```javascript
function requestListener( request, response ) {
    console.log( request.url );
    response.end( 'OK' );
}

var httpServer = httpServerFactory( requestListener );
```

In addition to the options supported by [`http.createServer`][nodejs-http-create-server], the function accepts the following options:

-   **port**: server port. Default: `0` (i.e., randomly assigned).
-   **maxport**: max server port when port hunting. Default: `maxport=port`.
-   **hostname**: server hostname.
-   **address**: server address. Default: `127.0.0.1`.

To specify server options, provide an options object.

```javascript
var opts = {
    'port': 7331,
    'address': '0.0.0.0'
};

var httpServer = httpServerFactory( opts );
```

To specify a range of permissible ports, set the `maxport` option.

```javascript
var opts = {
    'maxport': 9999
};

var httpServer = httpServerFactory( opts );
```

When provided a `maxport` option, a created server will search for the first available `port` on which to listen, starting from `port`.

#### httpServer( done )

Creates an [HTTP][nodejs-http] server.

```javascript
function done( error, server ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
    server.close();
}

var httpServer = httpServerFactory();

httpServer( done );
```

The function supports the following parameters:

-   **done**: callback to invoke once a server is listening and ready to handle requests.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Which server options are supported depends on the Node.js version. Older Node.js versions (e.g., &lt;= v8.12.0) do not support an options object when calling [`http.createServer`][nodejs-http-create-server], and, for those versions, any options supported by [`http.createServer`][nodejs-http-create-server] in later Node.js versions are ignored.
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
var httpServerFactory = require( '@stdlib/net/http-server' );

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
var httpServer = httpServerFactory( opts, onRequest );

// Create a server:
httpServer( done );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[nodejs-http]: https://nodejs.org/api/http.html

[nodejs-http-create-server]: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

</section>

<!-- /.links -->

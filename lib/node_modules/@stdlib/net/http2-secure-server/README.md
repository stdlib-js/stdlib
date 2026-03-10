<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# HTTP/2 Server

> [HTTP/2][nodejs-http2] server.

<section class="usage">

## Usage

```javascript
var http2ServerFactory = require( '@stdlib/net/http2-secure-server' );
```

#### http2ServerFactory( options\[, requestListener] )

Returns a function to create an [HTTP/2][nodejs-http2] server.

```javascript
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;

var opts = {
    'cert': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) ),
    'key': readFileSync( resolve( __dirname, 'examples', 'localhost-privkey.pem' ) )
};
var http2Server = http2ServerFactory( opts );
```

The function supports the following parameters:

-   **options**: options.
-   **requestListener**: callback to invoke upon receiving an HTTP request (_optional_).

To bind a request callback to a server, provide a `requestListener`.

```javascript
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;

function requestListener( request, response ) {
    console.log( request.url );
    response.end( 'OK' );
}

var opts = {
    'cert': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) ),
    'key': readFileSync( resolve( __dirname, 'examples', 'localhost-privkey.pem' ) )
};
var http2Server = http2ServerFactory( opts, requestListener );
```

In addition to the options supported by [`http2.createSecureServer`][nodejs-http2-create-secure-server], the function accepts the following options:

-   **port**: server port. Default: `0` (i.e., randomly assigned).
-   **maxport**: max server port when port hunting. Default: `maxport=port`.
-   **hostname**: server hostname.
-   **address**: server address. Default: `127.0.0.1`.

To specify server options, provide an options object.

```javascript
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;

var opts = {
    'port': 7331,
    'address': '0.0.0.0',
    'cert': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) ),
    'key': readFileSync( resolve( __dirname, 'examples', 'localhost-privkey.pem' ) )
};

var http2Server = http2ServerFactory( opts );
```

To specify a range of permissible ports, set the `maxport` option.

```javascript
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;

var opts = {
    'maxport': 9999,
    'cert': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) ),
    'key': readFileSync( resolve( __dirname, 'examples', 'localhost-privkey.pem' ) )
};

var http2Server = http2ServerFactory( opts );
```

When provided a `maxport` option, a created server will search for the first available `port` on which to listen, starting from `port`.

#### http2Server( done )

Creates an [HTTP/2][nodejs-http2] server.

```javascript
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;

function done( error, server ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
    server.close();
}

var opts = {
    'cert': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) ),
    'key': readFileSync( resolve( __dirname, 'examples', 'localhost-privkey.pem' ) )
};
var http2Server = http2ServerFactory( opts );

http2Server( done );
```

The function supports the following parameters:

-   **done**: callback to invoke once a server is listening and ready to handle requests.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function requires that either the `pfx` option is provided or a `cert`/`key` option pair is provided.
-   Which server options are supported depends on the Node.js version.
-   Port hunting can be useful in a microservice deployment. When a `port` is randomly assigned (`options.port=0`), if a server fails and is restarted, the server is unlikely to bind to its previous `port`. By allowing a constrained search, assuming no lower `ports` within a specified range have freed up in the meantime, the likelihood of listening on the same `port` is increased. A server can typically restart and bind to the same `port` faster than binding to a new `port` and re-registering with a microservice registry, thus minimizing possible service interruption and downtime.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable node/no-process-exit, node/no-unsupported-features/node-builtins -->

<!-- eslint no-undef: "error" -->

```javascript
var proc = require( 'process' );
var http2 = require( 'http2' );
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var http2ServerFactory = require( '@stdlib/net/http2-secure-server' );

function done( error ) {
    var client;
    var req;
    if ( error ) {
        throw error;
    }
    client = http2.connect( 'https://localhost:7331', {
        'ca': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) )
    });
    req = client.request({
        ':path': '/beep/boop'
    });
    req.on( 'response', onResponse );
    req.end();

    function onResponse() {
        console.log( 'Success!' );
        client.close();
        proc.exit( 0 );
    }
}

function onRequest( request, response ) {
    console.log( request.url );
    response.end( 'OK' );
}

// Specify server options...
var opts = {
    'port': 7331,
    'maxport': 9999,
    'hostname': 'localhost',
    'allowHTTP1': true,
    'cert': readFileSync( resolve( __dirname, 'examples', 'localhost-cert.pem' ) ),
    'key': readFileSync( resolve( __dirname, 'examples', 'localhost-privkey.pem' ) )
};

// Create a function for creating an HTTP/2 server...
var http2Server = http2ServerFactory( opts, onRequest );

// Create a server:
http2Server( done );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[nodejs-http2]: https://nodejs.org/api/http2.html

[nodejs-http2-create-secure-server]: https://nodejs.org/api/http2.html#http2createsecureserveroptions-onrequesthandler

</section>

<!-- /.links -->

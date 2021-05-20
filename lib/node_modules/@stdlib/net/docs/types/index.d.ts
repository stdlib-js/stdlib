/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import tempHttpServer = require( '@stdlib/net/disposable-http-server' );
import httpServer = require( '@stdlib/net/http-server' );
import simpleHttpServer = require( '@stdlib/net/simple-http-server' );

/**
* Interface describing the `net` namespace.
*/
interface Namespace {
	/**
	* Creates a disposable HTTP server.
	*
	* @param options - server options
	* @param options.html - HTML content to serve
	* @param options.javascript - JavaScript to serve
	* @param options.port - server port (default: 0)
	* @param options.maxport - max server port
	* @param options.hostname - server hostname
	* @param options.address - server address (default: '0.0.0.0')
	* @param options.open - boolean indicating whether to launch a web browser (default: false)
	* @param clbk - callback to invoke upon creating a server
	* @throws must provide valid options
	* @throws error encountered when starting server
	*
	* @example
	* var opts = {
	*     'html': '<h1>Beep</h1>'
	* };
	*
	* ns.tempHttpServer( opts, onReady );
	*
	* function onReady( error, server ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     server.close();
	* }
	*/
	tempHttpServer: typeof tempHttpServer;

	/**
	* Returns a function which creates an HTTP server.
	*
	* @param options - server options
	* @param options.port - server port (default: 0)
	* @param options.maxport - max server port
	* @param options.hostname - server hostname
	* @param options.address - server address (default: '127.0.0.1')
	* @param requestListener - callback invoked upon receiving an HTTP request
	* @throws must provide valid options
	* @returns function which creates an HTTP server
	*
	* @example
	* var opts = {
	*     'port': 7331,
	*     'address': '0.0.0.0'
	* };
	* var createServer = ns.httpServer( opts );
	*
	* @example
	* var opts = {
	*     'port': 7331,
	*     'address': '0.0.0.0'
	* };
	* function onRequest( request, response ) {
	*     console.log( request.url );
	*     response.end( 'OK' );
	* }
	* var createServer = ns.httpServer( opts, onRequest );
	*/
	httpServer: typeof httpServer;

	/**
	* Creates a simple HTTP server. The implementation takes inspiration from Python's [SimpleHTTPServer][python-simplehttpserver].
	*
	* [python-simplehttpserver]: https://docs.python.org/2/library/simplehttpserver.html
	*
	* @param options - server options
	* @param options.dir - directory from which to serve files
	* @param options.port - server port (default: 0)
	* @param options.maxport - max server port
	* @param options.hostname - server hostname
	* @param options.address - server address  (default: '0.0.0.0')
	* @param options.open - indicates whether to launch a web browser  (default: false)
	* @param clbk - callback to invoke upon creating a server
	* @throws must provide valid options
	* @throws error encountered when starting server
	*
	* @example
	* var opts = {
	*     'dir': './',
	*     'port': 7331,
	*     'hostname': 'localhost',
	*     'open': false
	* };
	* ns.simpleHttpServer( opts, onReady );
	*
	* function onReady( error, server ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     server.close();
	* }
	*/
	simpleHttpServer: typeof simpleHttpServer;
}

/**
* Standard library networking.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

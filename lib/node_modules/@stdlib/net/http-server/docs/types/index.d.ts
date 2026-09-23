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

// TypeScript Version: 4.1

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Server port (default: 0).
	*/
	port?: number;

	/**
	* Max server port.
	*/
	maxport?: number;

	/**
	* Server hostname.
	*/
	hostname?: string;

	/**
	* Server address (default: '127.0.0.1').
	*/
	address?: string;
}

/**
* Request callback.
*/
type NullaryListener = () => void;

/**
* Request callback.
*
* @param request - request object
*/
type UnaryListener = ( request: any ) => void;

/**
* Request callback.
*
* @param request - request object
* @param response - response object
*/
type BinaryListener = ( request: any, response: any ) => void;

/**
* Request callback.
*
* @param request - request object
* @param response - response object
*/
type RequestListener = NullaryListener | UnaryListener | BinaryListener;

/**
* Callback invoked after creating a server.
*/
type Nullary = () => void;

/**
* Callback invoked after creating a server.
*
* @param error - error object or null
*/
type Unary = ( error: Error | null ) => void;

/**
* Callback invoked after creating a server.
*
* @param error - error object or null
* @param server - server object
*/
type Binary = ( error: Error | null, server: any ) => void;

/**
* Callback invoked after creating a server.
*
* @param error - error object or null
* @param server - server object
*/
type Callback = Nullary | Unary | Binary;

/**
* Creates an HTTP server.
*
* @param done - callback to invoke after creating the server
*/
type httpServer = ( done: Callback ) => void;

/**
* Returns a function which creates an HTTP server.
*
* @param requestListener - callback invoked upon receiving an HTTP request
* @returns function which creates an HTTP server
*
* @example
* var httpServer = factory();
*
* @example
* function onRequest( request, response ) {
*     console.log( request.url );
*     response.end( 'OK' );
* }
* var httpServer = factory( onRequest );
*/
declare function factory( requestListener?: RequestListener ): httpServer;

/**
* Returns a function which creates an HTTP server.
*
* ## Notes
*
* -   In addition to options documented below, the function supports any options supported by `http.createServer`. Which server options are supported depends on the Node.js version. Older Node.js versions (e.g., <= v8.12.0) do not support an options object when calling `http.createServer`, and, for those versions, any options supported by `http.createServer` in later Node.js versions are ignored.
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
* var httpServer = factory( opts );
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
* var httpServer = factory( opts, onRequest );
*/
declare function factory<T extends Options>( options: T, requestListener?: RequestListener ): httpServer;


// EXPORTS //

export = factory;

/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Interface defining "base" function options.
*/
interface BaseOptions {
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
* Interface describing function options using PFX.
*/
interface OptionsWithPFX {
	/**
	* PFX or PKCS12 encoded private key and certificate chain.
	*/
	pfx: string | Array<string> | Buffer | Array<Buffer> | Array<Object>;
}

/**
* Interface describing function options using a cert/key pair.
*/
interface OptionsWithCertKey {
	/**
	* Cert chains in PEM format.
	*/
	cert: string | Array<string> | Buffer | Array<Buffer>;

	/**
	* Private keys in PEM format.
	*/
	key: string | Array<string> | Buffer | Array<Buffer> | Array<Object>;
}

/**
* Function options.
*/
type Options = OptionsWithPFX | OptionsWithCertKey;

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
* Creates an HTTP/2 server.
*
* @param done - callback to invoke after creating the server
*/
type http2Server = ( done: Callback ) => void;

/**
* Returns a function which creates an HTTP/2 server.
*
* ## Notes
*
* -   The function requires that either the PFX option is provided or a cert/key pair is provided.
* -   In addition to options documented below, the function supports any options supported by `http2.createSecureServer`. Which server options are supported depends on the Node.js version.
*
* @param options - server options
* @param options.port - server port (default: 0)
* @param options.maxport - max server port
* @param options.hostname - server hostname
* @param options.address - server address (default: '127.0.0.1')
* @param options.pfx - PFX or PKCS12 encoded private key and certificate chain
* @param options.cert - cert chains in PEM format
* @param options.key - private keys in PEM format
* @param requestListener - callback invoked upon receiving an HTTP request
* @throws must provide valid options
* @returns function which creates an HTTP/2 server
*
* @example
* var readFileSync = require( '@stdlib/fs/read-file' ).sync;
*
* var opts = {
*     'port': 7331,
*     'address': '0.0.0.0',
*     'cert': readFileSync( './path/to/cert.pem' ),
*     'key': readFileSync( './path/to/key.pem' )
* };
* var http2Server = factory( opts );
*
* @example
* var opts = {
*     'port': 7331,
*     'address': '0.0.0.0',
*     'cert': readFileSync( './path/to/cert.pem' ),
*     'key': readFileSync( './path/to/key.pem' )
* };
* function onRequest( request, response ) {
*     console.log( request.url );
*     response.end( 'OK' );
* }
* var http2Server = factory( opts, onRequest );
*/
declare function factory<T extends Options>( options: T, requestListener?: RequestListener ): http2Server;


// EXPORTS //

export = factory;

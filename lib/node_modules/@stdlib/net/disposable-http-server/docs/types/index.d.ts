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

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* HTML content to serve.
	*/
	html?: Buffer | string;

	/**
	* JavaScript to serve.
	*/
	javascript?: Buffer | string;

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
	* Server address (default: '0.0.0.0').
	*/
	address?: string;

	/**
	* Indicates whether to launch a web browser (default: false).
	*/
	open?: boolean;
}

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
* httpServer( opts, onReady );
*
* function onReady( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/
declare function httpServer( options: Options, clbk?: Callback ): void;


// EXPORTS //

export = httpServer;

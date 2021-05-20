/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var logger = require( 'debug' );
var readDir = require( '@stdlib/fs/read-dir' );
var notFound = require( './404.js' );


// VARIABLES //

var debug = logger( 'simple-http-server:request-listener' );


// MAIN //

/**
* Returns a request listener for serving a directory.
*
* @private
* @param {Options} opts - server options
* @param {string} opts.dir - directory to serve
* @returns {Function} request listener
*/
function requestListener( opts ) {
	return onRequest;

	/**
	* Callback invoked upon receiving an HTTP request when serving a directory.
	*
	* @private
	* @param {IncomingMessage} request - HTTP request object
	* @param {ServerResponse} response - HTTP response object
	*/
	function onRequest( request, response ) {
		var path;

		debug( 'Received a request for %s', request.url );

		// Resolve the directory path, making sure to guard against attempts to access parent directories...
		path = request.url.substring( 1 ); // remove leading `/`
		path = resolve( opts.dir, path );
		if ( path.substring( opts.dir.length ) === '' ) {
			path = opts.dir;
		}
		debug( 'Request resolved to path %s', path );
		debug( 'Reading directory' );
		readDir( path, onDir );

		/**
		* Callback invoked after reading a directory's contents.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {StringArray} contents - directory contents
		* @returns {void}
		*/
		function onDir( error, contents ) { // eslint-disable-line no-unused-vars
			if ( error ) {
				if (
					error.code === 'ENOENT' ||
					error.code === 'ENOTDIR'
				) {
					// Return a `404` response...
					return notFound( response );
				}
				// TODO
			}
			// TODO
		}
	}
}


// EXPORTS //

module.exports = requestListener;

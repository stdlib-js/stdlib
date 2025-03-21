/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var appendFile = require( 'fs' ).appendFileSync; // eslint-disable-line node/no-sync


// MAIN //

/**
* Synchronously append data to a file, creating the file if it does not yet exist.
*
* @param {(string|Buffer|integer)} path - file path or file descriptor
* @param {(string|Buffer)} data - data to append
* @param {(Object|string)} [options] - options
* @returns {(Error|null)} error object or null
*
* @example
* var err = appendFileSync( './beep/boop.txt', 'data to append\n' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
function appendFileSync( path, data, options ) {
	try {
		if ( arguments.length > 2 ) {
			appendFile( path, data, options );
		} else {
			appendFile( path, data );
		}
	} catch ( err ) {
		return err;
	}
	return null;
}


// EXPORTS //

module.exports = appendFileSync;

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

var writeFile = require( 'fs' ).writeFileSync; // eslint-disable-line node/no-sync


// MAIN //

/**
* Synchronously writes data to a file.
*
* @param {(string|Buffer|integer)} file - file path or file descriptor
* @param {(string|Buffer)} data - data to write
* @param {(Object|string)} [options] - options
* @returns {(Error|null)} error object or null
*
* @example
* var err = writeFileSync( './beep/boop.txt', 'beep boop\n' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
function writeFileSync( file, data, options ) {
	try {
		if ( arguments.length > 2 ) {
			writeFile( file, data, options );
		} else {
			writeFile( file, data );
		}
	} catch ( err ) {
		return err;
	}
	return null;
}


// EXPORTS //

module.exports = writeFileSync;

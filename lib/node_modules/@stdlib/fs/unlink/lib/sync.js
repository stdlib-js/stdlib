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

var unlink = require( 'fs' ).unlinkSync; // eslint-disable-line no-sync


// MAIN //

/**
* Synchronously removes a directory entry.
*
* @param {(string|Buffer|integer)} path - path
* @returns {(Error|null)} error object or null
*
* @example
* var err = unlinkSync( './beep/boop.txt' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
function unlinkSync( path ) {
	try {
		unlink( path );
	} catch ( err ) {
		return err;
	}
	return null;
}


// EXPORTS //

module.exports = unlinkSync;

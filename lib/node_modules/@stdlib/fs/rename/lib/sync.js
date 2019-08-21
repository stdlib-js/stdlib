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

var rename = require( 'fs' ).renameSync; // eslint-disable-line no-sync


// MAIN //

/**
* Synchronously renames a file.
*
* @param {(string|Buffer)} oldPath - old path
* @param {(string|Buffer)} newPath - new path
* @returns {(Error|null)} error object or null
*
* @example
* var err = renameSync( './beep/boop.txt', './beep/foo.txt' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
function renameSync( oldPath, newPath ) {
	try {
		rename( oldPath, newPath );
	} catch ( err ) {
		return err;
	}
	return null;
}


// EXPORTS //

module.exports = renameSync;

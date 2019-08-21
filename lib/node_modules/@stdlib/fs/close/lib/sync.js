/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var close = require( 'fs' ).closeSync; // eslint-disable-line no-sync, stdlib/no-redeclare
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Synchronously closes a file descriptor.
*
* @param {NonNegativeInteger} fd - file descriptor
* @throws {TypeError} must provide a valid file descriptor (nonnegative integer)
* @returns {(Error|void)} an error object or `undefined`
*
* @example
* var openSync = require( '@stdlib/fs/open' ).sync;
*
* var fd = openSync( __filename, 'r+' );
*
* if ( fd instanceof Error ) {
*     throw fd;
* }
*
* var err = closeSync( fd );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
function closeSync( fd ) {
	if ( !isNonNegativeInteger( fd ) ) {
		throw new TypeError( 'invalid argument. Must provide a valid file descriptor (nonnegative integer). Value: `' + fd + '`.' );
	}
	try {
		close( fd );
	} catch ( err ) {
		return err;
	}
}


// EXPORTS //

module.exports = closeSync;

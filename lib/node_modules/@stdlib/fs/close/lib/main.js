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

var native = require( 'fs' ).close;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Asynchronously closes a file descriptor.
*
* @param {NonNegativeInteger} fd - file descriptor
* @param {Function} clbk - callback to invoke after closing a file descriptor
* @throws {TypeError} first argument must be a valid file descriptor (nonnegative integer)
* @throws {TypeError} last argument must be a function
*
* @example
* var openSync = require( '@stdlib/fs/open' ).sync;
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* var fd = openSync( __filename, 'r+' );
* if ( fd instanceof Error ) {
*     throw fd;
* }
*
* close( fd, done );
*/
function close( fd, clbk ) { // eslint-disable-line stdlib/no-redeclare
	if ( !isNonNegativeInteger( fd ) ) {
		throw new TypeError( 'invalid argument. First argument must be a valid file descriptor (nonnegative integer). Value: `' + fd + '`.' );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. VAlue: `' + clbk + '`.' );
	}
	native( fd, clbk );
}


// EXPORTS //

module.exports = close;

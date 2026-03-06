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

var op = require( 'fs' ).open;
var defaults = require( './defaults.json' );


// MAIN //

/**
* Asynchronously opens a file.
*
* @param {(string|Buffer)} path - file path
* @param {(string|number)} [flags='r'] - file system flags
* @param {integer} [mode=0o666] - file mode
* @param {Function} clbk - callback to invoke after opening a file
* @returns {void}
*
* @example
* var closeSync = require( '@stdlib/fs/close' ).sync;
* var open = require( '@stdlib/fs/open' );
*
* function onOpen( error, fd ) {
*     if ( error ) {
*         throw error;
*     }
*     closeSync( fd );
* }
* open( __filename, onOpen );
*/
function open( path, flags, mode, clbk ) { // eslint-disable-line stdlib/no-redeclare
	var nargs = arguments.length;
	if ( nargs === 2 ) {
		return op( path, defaults.flags, defaults.mode, flags );
	}
	if ( nargs === 3 ) {
		return op( path, flags, defaults.mode, mode );
	}
	op( path, flags, mode, clbk );
}


// EXPORTS //

module.exports = open;

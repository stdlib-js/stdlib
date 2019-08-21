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

var open = require( 'fs' ).openSync; // eslint-disable-line no-sync, stdlib/no-redeclare
var defaults = require( './defaults.json' );


// MAIN //

/**
* Synchronously opens a file.
*
* @param {(string|Buffer)} path - file path
* @param {(string|number)} [flags='r'] - file system flags
* @param {integer} [mode=0o666] - file mode
* @returns {(integer|Error)} file descriptor or an error
*
* @example
* var closeSync = require( '@stdlib/fs/close' ).sync;
*
* var fd = openSync( __filename );
* if ( fd instanceof Error ) {
*     throw fd;
* }
* closeSync( fd );
*/
function openSync( path, flags, mode ) {
	var nargs;
	var fd;

	nargs = arguments.length;
	try {
		if ( nargs === 1 ) {
			fd = open( path, defaults.flags, defaults.mode );
		} else if ( nargs === 2 ) {
			fd = open( path, flags, defaults.mode );
		} else {
			fd = open( path, flags, mode );
		}
	} catch ( err ) {
		return err;
	}
	return fd;
}


// EXPORTS //

module.exports = openSync;

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

var readdirSync = require( 'fs' ).readdirSync; // eslint-disable-line no-sync


// MAIN //

/**
* Synchronously reads the contents of a directory.
*
* @param {(string|Buffer)} path - directory path
* @returns {(StringArray|Error)} directory contents or an error
*
* @example
* var out = readDirSync( __dirname );
* if ( out instanceof Error ) {
*     throw out;
* }
* console.log( out );
*/
function readDirSync( path ) {
	try {
		return readdirSync( path );
	} catch ( err ) {
		return err;
	}
}


// EXPORTS //

module.exports = readDirSync;

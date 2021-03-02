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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var RE_EXTNAME = require( '@stdlib/regexp/extname' ).REGEXP;


// MAIN //

/**
* Returns a filename extension.
*
* @param {string} filename - filename
* @throws {TypeError} must provide a string primitive
* @returns {string} filename extension
*
* @example
* var ext = extname( 'index.js' );
* // returns '.js'
*/
function extname( filename ) {
	if ( !isString( filename ) ) {
		throw new TypeError( 'invalid argument. Filename must be a primitive string. Value: `' + filename + '`.' );
	}
	return RE_EXTNAME.exec( filename )[ 1 ];
}


// EXPORTS //

module.exports = extname;

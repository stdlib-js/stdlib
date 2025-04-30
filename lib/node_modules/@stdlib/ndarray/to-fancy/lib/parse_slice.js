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

var str2slice = require( '@stdlib/slice/base/str2slice' );
var MultiSlice = require( '@stdlib/slice/multi' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Parses a serialized Slice object.
*
* @private
* @param {string} raw - original unprocessed input string
* @param {string} str - serialized Slice object
* @throws {Error} invalid slice operation
* @returns {MultiSlice} MultiSlice object
*
* @example
* var s = parseSlice( '  Slice(0,10,2)  ', 'Slice(0,10,2)' );
* // returns <MultiSlice>
*/
function parseSlice( raw, str ) {
	// Convert the string to a slice object:
	var s = str2slice( str );
	if ( s === null ) {
		throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', raw ) );
	}
	// Create a multi-slice:
	return new MultiSlice( s );
}


// EXPORTS //

module.exports = parseSlice;

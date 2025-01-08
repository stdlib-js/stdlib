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

var str2multislice = require( '@stdlib/slice/base/str2multislice' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Parses a serialized MultiSlice object.
*
* @private
* @param {string} raw - original unprocessed input string
* @param {string} str - serialized MultiSlice object
* @throws {Error} invalid slice operation
* @returns {MultiSlice} MultiSlice object
*
* @example
* var s = parseMultiSlice( '  MultiSlice(Slice(0,10,2),null,2,Slice(10,5,-1))  ', 'MultiSlice(Slice(0,10,2),null,2,Slice(10,5,-1))' );
* // returns <MultiSlice>
*/
function parseMultiSlice( raw, str ) {
	var s = str2multislice( str );
	if ( s === null ) {
		throw new Error( format( 'invalid operation. Unsupported slice operation. Value: `%s`.', raw ) );
	}
	return s;
}


// EXPORTS //

module.exports = parseMultiSlice;

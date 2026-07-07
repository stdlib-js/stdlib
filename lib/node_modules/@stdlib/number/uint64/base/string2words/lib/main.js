/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var assign = require( './assign.js' );


// MAIN //

/**
* Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words.
*
* @param {string} str - string representation of a 64-bit unsigned integer
* @param {PositiveInteger} radix - radix (base) to use for string conversion (2-36)
* @returns {Collection} output array
*
* @example
* var out = string2words( '1234', 10 );
* // returns [ 0, 1234 ]
*
* out = string2words( '18446744073709551615', 10 );
* // returns [ 4294967295, 4294967295 ]
*
* out = string2words( 'ffffffffffffffff', 16 );
* // returns [ 4294967295, 4294967295 ]
*
* out = string2words( '3w5e11264sgsf', 36 );
* // returns [ 4294967295, 4294967295 ]
*/
function string2words( str, radix ) {
	return assign( str, radix, [ 0, 0 ], 1, 0 );
}


// EXPORTS //

module.exports = string2words;

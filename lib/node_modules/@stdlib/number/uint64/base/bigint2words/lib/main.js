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
* Splits a bigint into the high and low 32-bit words of a 64-bit unsigned integer.
*
* @param {bigint} value - integer value in the range [0, 2^64-1]
* @returns {Array<integer>} high and low words as 32-bit unsigned integers
*
* @example
* var BigInt = require( '@stdlib/bigint/ctor' );
*
* var out = bigint2words( BigInt( 1234 ) );
* // returns [ 0, 1234 ]
*
* out = bigint2words( BigInt( 0x100000000 ) );
* // returns [ 1, 0 ]
*
* out = bigint2words( BigInt( '18446744073709551615' ) );
* // returns [ 4294967295, 4294967295 ]
*/
function bigint2words( value ) {
	return assign( value, [ 0, 0 ], 1, 0 );
}


// EXPORTS //

module.exports = bigint2words;

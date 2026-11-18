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

// MAIN //

/**
* Returns a 32-bit unsigned integer corresponding to the high 32-bit word of a 64-bit signed integer.
*
* @param {Int64} x - input value
* @returns {uinteger32} higher order word
*
* @example
* var Int64 = require( '@stdlib/number/int64/ctor' );
*
* var x = new Int64( 4294967296 );
* var w = getHighWord( x );
* // returns 1
*
* @example
* var Int64 = require( '@stdlib/number/int64/ctor' );
*
* var x = new Int64( -1 );
* var w = getHighWord( x );
* // returns 4294967295
*/
function getHighWord( x ) {
	return x.hi;
}


// EXPORTS //

module.exports = getHighWord;

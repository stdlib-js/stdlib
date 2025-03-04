/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns an integer corresponding to the significand of a single-precision floating-point number.
*
* @private
* @param {number} x - input value
* @returns {integer32} - significand
*
* @example
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var s = significandf( toFloat32( 3.14e34 ) ); // => 10000011000010001110111
* // returns 4293751
*
* s = significandf( toFloat32( 3.14e-34 ) ); // => 10100001011000001010101
* // returns 5288021
*
* s = significandf( toFloat32( -3.14 ) ); // => 10010001111010111000011
* // returns 4781507
*/
function significandf( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = significandf;

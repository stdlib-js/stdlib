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

var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Converts a float's fraction bit sequence to a numeric value.
*
* @private
* @param {BinaryString} frac - literal bit representation of a float's fraction bit sequence
* @returns {number} fraction value
*
* @example
* var v = toFrac( '10001100010111110011000' );
* // returns ~0.548
*
* @example
* var v = toFrac( '11110101000101011111111' );
* // returns ~0.957
*/
function toFrac( frac ) {
	var sum = 0;
	var i;
	for ( i = 0; i < frac.length; i++ ) {
		if ( frac[ i ] === '1' ) {
			sum += pow( 2.0, -(i+1) );
		}
	}
	return sum;
}


// EXPORTS //

module.exports = toFrac;

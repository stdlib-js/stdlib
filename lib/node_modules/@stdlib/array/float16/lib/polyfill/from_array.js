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

var f16 = require( '@stdlib/number/float64/base/to-float16' );
var toWord = require( '@stdlib/number/float16/base/to-word' );


// MAIN //

/**
* Fills an output array with unsigned 16-bit integers corresponding to the IEEE 754 binary representation of respective half-precision floating-point numbers.
*
* @private
* @param {Uint16Array} buf - output array
* @param {Array} arr - input array
* @returns {Uint16Array} output array
*/
function fromArray( buf, arr ) {
	var len;
	var i;

	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		buf[ i ] = toWord( f16( arr[ i ] ) );
	}
	return buf;
}


// EXPORTS //

module.exports = fromArray;

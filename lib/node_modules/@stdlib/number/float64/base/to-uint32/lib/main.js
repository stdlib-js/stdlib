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

// MAIN //

/**
* Converts a double-precision floating-point number to an unsigned 32-bit integer.
*
* @param {number} x - double-precision floating-point number
* @returns {uinteger32} unsigned 32-bit integer
*
* @example
* var y = float64ToUint32( 4294967297.0 );
* // returns 1
*
* @example
* var y = float64ToUint32( 3.14 );
* // returns 3
*
* @example
* var y = float64ToUint32( -3.14 );
* // returns 4294967293
*
* @example
* var y = float64ToUint32( NaN );
* // returns 0
*
* @example
* var y = float64ToUint32( Infinity );
* // returns 0
*
* @example
* var y = float64ToUint32( -Infinity );
* // returns 0
*/
function float64ToUint32( x ) {
	// NOTE: we could also use typed-arrays to achieve the same end.
	return x >>> 0;
}


// EXPORTS //

module.exports = float64ToUint32;

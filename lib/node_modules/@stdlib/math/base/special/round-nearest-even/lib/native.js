/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Rounds a double-precision floating-point number to the nearest integer value with ties rounding to the nearest even integer.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = roundNearestEven( -3.5 );
* // returns -4.0
*
* @example
* var v = roundNearestEven( -4.2 );
* // returns -4.0
*
* @example
* var v = roundNearestEven( -4.5 );
* // returns -4.0
*
* @example
* var v = roundNearestEven( -4.6 );
* // returns -5.0
*
* @example
* var v = roundNearestEven( 9.99999 );
* // returns 10.0
*
* @example
* var v = roundNearestEven( 8.5 );
* // returns 8.0
*
* @example
* var v = roundNearestEven( 9.5 );
* // returns 10.0
*
* @example
* var v = roundNearestEven( 9.2 );
* // returns 9.0
*
* @example
* var v = roundNearestEven( 0.0 );
* // returns 0.0
*
* @example
* var v = roundNearestEven( -0.0 );
* // returns -0.0
*
* @example
* var v = roundNearestEven( Infinity );
* // returns Infinity
*
* @example
* var v = roundNearestEven( -Infinity );
* // returns -Infinity
*
* @example
* var v = roundNearestEven( NaN );
* // returns NaN
*/
function roundNearestEven( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = roundNearestEven;

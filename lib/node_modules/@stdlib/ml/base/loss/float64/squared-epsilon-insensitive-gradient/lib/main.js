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

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the squared epsilon insensitive loss gradient with respect to a model parameter.
*
* @param {number} x - input value
* @param {number} e - insensitivity parameter
* @param {number} y - true target value
* @param {number} p - predicted value
* @returns {number} squared epsilon insensitive loss gradient
*
* @example
* var v = squaredEpsilonInsensitiveGradient( 3.0, 5.0, 10.2, 0.782 );
* // returns ~-26.508
*
* @example
* var v = squaredEpsilonInsensitiveGradient( 2.5, 2.0, 8.0, 0.202 );
* // returns ~-28.99
*
* @example
* var v = squaredEpsilonInsensitiveGradient( -1.3, 1.0, 23.2, -0.999 );
* // returns ~60.317
*
* @example
* var v = squaredEpsilonInsensitiveGradient( -2.0, 11.0, -12.2, 0.234 );
* // returns ~-5.736
*
* @example
* var v = squaredEpsilonInsensitiveGradient( -2.0, 2.0, -21.0, 0.2 );
* // returns -76.8
*
* @example
* var v = squaredEpsilonInsensitiveGradient( -1.3, 9.0, 4.0, -0.9 );
* // returns 0.0
*/
function squaredEpsilonInsensitiveGradient( x, e, y, p ) {
	var z;

	if ( isnan( x ) || isnan( e ) || isnan( y ) || isnan( p ) ) {
		return NaN;
	}
	z = y - p;
	if ( z > e ) {
		return -2.0 * ( z-e ) * x;
	}
	if ( z < -e ) {
		return -2.0 * ( z+e ) * x;
	}
	return 0.0;
}


// EXPORTS //

module.exports = squaredEpsilonInsensitiveGradient;

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
* Returns the excess kurtosis of a beta distribution.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 1.0, 1.0 );
* // returns -1.2
*
* @example
* var v = kurtosis( 4.0, 12.0 );
* // returns ~0.082
*
* @example
* var v = kurtosis( 8.0, 2.0 );
* // returns ~0.49
*
* @example
* var v = kurtosis( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = kurtosis( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 2.0, NaN );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 2.0 );
* // returns NaN
*/
function kurtosis( alpha, beta ) {
	var axb;
	var amb;
	var apb;
	var out;

	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return NaN;
	}
	axb = alpha * beta;
	amb = alpha - beta;
	apb = alpha + beta;
	out = amb * amb * ( apb+1.0 );
	out -= axb * ( apb+2.0 );
	out *= 6.0;
	out /= axb * ( apb+2.0 ) * ( apb+3.0 );
	return out;
}


// EXPORTS //

module.exports = kurtosis;

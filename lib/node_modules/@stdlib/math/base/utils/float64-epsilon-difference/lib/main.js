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

var reldiff = require( '@stdlib/math/base/utils/relative-difference' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var MAX_FLOAT64 = require( '@stdlib/constants/float64/max' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var MAX_DIFF = MAX_FLOAT64 * EPS;


// MAIN //

/**
* Computes the relative difference in units of double-precision floating-point epsilon.
*
* @param {number} x - first number
* @param {number} y - second number
* @param {(string|Function)} [scale='max-abs'] - scale function
* @returns {number} relative difference in units of double-precision floating-point epsilon
*
* @example
* var d = epsilonDifference( 12.15, 12.149999999999999 ); // => ~0.658ε
* // returns ~0.658
*
* @example
* var d = epsilonDifference( 2.4341309458983933, 2.4341309458633909, 'mean-abs' ); // => ~64761.5ε => ~1.438e-11
* // returns ~64761.5
*
* @example
* function scale( x, y ) {
*      // Return the minimum value:
*      return ( x > y ) ? y : x;
* }
*
* var d = epsilonDifference( 1.0000000000000002, 1.0000000000000100, scale ); // => ~44ε
* // returns ~44
*/
function epsilonDifference( x, y, scale ) {
	var d = reldiff( x, y, scale || 'max-abs' );

	// If `d` is `NaN` or `+infinity`, nothing we can do...
	if ( isnan( d ) || d === PINF ) {
		return d;
	}
	// If `d >= MAX_VALUE`, we will overflow, as `EPS <<< 1`. To prevent overflow, we cap out at the maximum double-precision floating-point number...
	if ( d >= MAX_DIFF ) {
		return MAX_FLOAT64;
	}
	// Return the answer to the question: how many EPS increments is the relative difference?
	return d / EPS;
}


// EXPORTS //

module.exports = epsilonDifference;

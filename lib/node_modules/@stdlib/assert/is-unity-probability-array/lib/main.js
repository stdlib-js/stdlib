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

var isTypedArray = require( '@stdlib/assert/is-typed-array' );
var isArray = require( '@stdlib/assert/is-array' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );
var FLOAT64_SQRT_EPS = require( '@stdlib/constants/math/float64-sqrt-eps' );


// MAIN //

/**
* Tests if a value is an array of probabilities that sum to one.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a probability array
*
* @example
* var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
* // returns true
*
* @example
* var bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
* // returns true
*
* @example
* var bool = isUnityProbabilityArray( [ 0.4, 0.4, 0.4 ] );
* // returns false
*
* @example
* var bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
* // returns false
*/
function isUnityProbabilityArray( v ) {
	var sum;
	var i;
	if ( isArray( v ) ) {
		sum = 0.0;
		for ( i = 0; i < v.length; i++ ) {
			if (
				!isNumber( v[ i ] ) ||
				v[ i ] > 1.0 ||
				v[ i ] < 0.0
			) {
				return false;
			}
			sum += v[ i ];
		}
		return ( absdiff( sum, 1.0 ) <= FLOAT64_SQRT_EPS );
	}
	if ( isTypedArray( v ) ) {
		sum = 0.0;
		for ( i = 0; i < v.length; i++ ) {
			if (
				v[ i ] > 1.0 ||
				v[ i ] < 0.0
			) {
				return false;
			}
			sum += v[ i ];
		}
		return ( absdiff( sum, 1.0 ) <= FLOAT64_SQRT_EPS );
	}
	return false;
}


// EXPORTS //

module.exports = isUnityProbabilityArray;

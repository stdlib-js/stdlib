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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the skewness of a Bradford distribution.
*
* @param {PositiveNumber} c - shape parameter
* @returns {PositiveNumber} skewness
*
* @example
* var v = skewness( 9.0 );
* // returns ~0.772
*
* @example
* var v = skewness( 1.0 );
* // returns ~0.239
*
* @example
* var v = skewness( -0.2 );
* // returns NaN
*
* @example
* var v = skewness( NaN );
* // returns NaN
*/
function skewness( c ) {
	var ans;
	var t1;
	var t2;
	var t3;
	var p;

	if ( isnan( c ) || c <= 0.0 ) {
		return NaN;
	}

	p = ln( 1.0 + c );

	t1 = 12.0 * ( c*c );
	t2 = 9.0 * c * p * ( c + 2.0 );
	t3 = 2.0 * ( p*p ) * ( ( c * ( c + 3.0 ) ) + 3.0 );
	ans = SQRT2 * ( t1 - t2 + t3 );

	t1 = c * ( ( c * ( p - 2.0 ) ) + ( 2.0 * p ) );
	t2 = ( 3.0 * c * ( p - 2.0 ) ) + ( 6.0 * p );
	ans /= sqrt( t1 ) * t2;
	return ans;
}


// EXPORTS //

module.exports = skewness;

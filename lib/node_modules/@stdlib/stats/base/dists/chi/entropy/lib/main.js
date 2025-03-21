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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var digamma = require( '@stdlib/math/base/special/digamma' );
var gammaln = require( '@stdlib/math/base/special/gammaln' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// MAIN //

/**
* Returns the differential entropy of a chi distribution.
*
* @param {PositiveNumber} k - degrees of freedom
* @returns {number} entropy
*
* @example
* var v = entropy( 9.0 );
* // returns ~1.052
*
* @example
* var v = entropy( 1.0 );
* // returns ~0.726
*
* @example
* var v = entropy( -0.2 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( k ) {
	var kh;
	if ( isnan( k ) || k <= 0.0 ) {
		return NaN;
	}
	kh = k / 2.0;
	return gammaln( kh ) + ( 0.5 * ( k - LN2 - ( ( k-1.0 )*digamma( kh ) ) ) );
}


// EXPORTS //

module.exports = entropy;

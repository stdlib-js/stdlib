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
var variance = require( '@stdlib/stats/base/dists/chi/variance' );
var mean = require( '@stdlib/stats/base/dists/chi/mean' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the skewness of a chi distribution.
*
* @param {PositiveNumber} k - degrees of freedom
* @returns {PositiveNumber} skewness
*
* @example
* var v = skewness( 9.0 );
* // returns ~0.252
*
* @example
* var v = skewness( 1.0 );
* // returns ~0.995
*
* @example
* var v = skewness( -0.2 );
* // returns NaN
*
* @example
* var v = skewness( NaN );
* // returns NaN
*/
function skewness( k ) {
	var sigma3;
	var sigma2;
	var sigma;
	var mu;
	if ( isnan( k ) || k <= 0.0 ) {
		return NaN;
	}
	mu = mean( k );
	sigma = sqrt( variance( k ) );
	sigma2 = sigma * sigma;
	sigma3 = sigma2 * sigma;
	return ( mu / sigma3 ) * ( 1.0 - ( 2.0*sigma2 ) );
}


// EXPORTS //

module.exports = skewness;

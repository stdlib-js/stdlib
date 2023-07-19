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
var skewness = require( '@stdlib/stats/base/dists/chi/skewness' );
var variance = require( '@stdlib/stats/base/dists/chi/variance' );
var mean = require( '@stdlib/stats/base/dists/chi/mean' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the excess kurtosis of a chi distribution.
*
* @param {PositiveNumber} k - degrees of freedom
* @returns {PositiveNumber} excess kurtosis
*
* @example
* var v = kurtosis( 9.0 );
* // returns ~0.011
*
* @example
* var v = kurtosis( 1.0 );
* // returns ~0.869
*
* @example
* var v = kurtosis( -0.2 );
* // returns NaN
*
* @example
* var v = kurtosis( NaN );
* // returns NaN
*/
function kurtosis( k ) {
	var sigma2;
	var sigma;
	var g1;
	var mu;
	if ( isnan( k ) || k <= 0.0 ) {
		return NaN;
	}
	sigma2 = variance( k );
	sigma = sqrt( sigma2 );
	mu = mean( k );
	g1 = skewness( k );
	return ( 2.0/sigma2 ) * ( 1.0 - ( mu*sigma*g1 ) - sigma2 );
}


// EXPORTS //

module.exports = kurtosis;

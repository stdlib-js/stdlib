/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the standard deviation of a Pareto (Type I) distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 4.0, 12.0 );
* // returns ~5.657
*
* @example
* var v = stdev( 8.0, 2.0 );
* // returns ~0.33
*
* @example
* var v = stdev( 1.0, 1.0 );
* // returns Infinity
*
* @example
* var v = stdev( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = stdev( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = stdev( 2.0, NaN );
* // returns NaN
*
* @example
* var v = stdev( NaN, 2.0 );
* // returns NaN
*/
function stdev( alpha, beta ) {
	var out;
	if (
		isnan( alpha ) ||
		alpha <= 0.0 ||
		isnan( beta ) ||
		beta <= 0.0
	) {
		return NaN;
	}
	if ( alpha < 2.0 ) {
		return PINF;
	}
	out = ( (beta*beta) * alpha ) / ( pow( alpha-1.0, 2.0 ) * ( alpha-2.0 ) );
	return sqrt( out );
}


// EXPORTS //

module.exports = stdev;

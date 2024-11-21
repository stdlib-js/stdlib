/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var gausslegdquad = require( './gausslegdquad.js' );
var prangeVInf = require( './prange_v_inf.js' );


// VARIABLES //

var PRECISION = 1e-10;


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a studentized range distribution.
*
* @param {number} r - sample size for range (same for each group)
* @param {number} v - degrees of freedom
* @param {number} [nranges=1] - number of groups whose maximum range is considered
* @returns {Function} CDF
*
* @example
* var cdf = factory( 3.0, 2.0 );
* var y = cdf( 3.0 );
* // returns ~0.712
*
* y = cdf( 1.0 );
* // returns ~0.216
*/
function factory( r, v, nranges ) {
	var ll;
	if ( isnan( v ) || isnan( r ) || r < 2.0 || v < 2.0 ) {
		return constantFunction( NaN );
	}
	if ( nranges === void 0 ) {
		nranges = 1;
	}
	else if ( !isPositiveInteger( nranges ) ) {
		return constantFunction( NaN );
	}
	if ( v === 1 ) {
		if ( r < 10 ) {
			ll = 1.0 + ( 1.0 / ( (2.0 * r) + 3.0 ) );
		} else if ( r <= 100 ) {
			ll = 1.0844 + ( (1.119 - 1.0844) / 90.0 * (r - 10.0) );
		} else {
			ll = 1.119 + ( 1.0 / r );
		}
	}
	else if ( v === 2 ) {
		ll = 0.968;
	}
	else if ( v <= 100 ) {
		ll = 1;
	}
	else if ( v <= 800 ) {
		ll = 1 / 2.0;
	}
	else if ( v <= 5000 ) {
		ll = 1 / 4.0;
	}
	else {
		ll = 1 / 8.0;
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a studentized range distribution.
	*
	* @private
	* @param {number} q - quantile of the studentized range
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2.0 );
	* // returns <number>
	*/
	function cdf( q ) {
		var probinic;
		var auxprob;
		var found;
		var a;
		if ( isnan( q ) ) {
			return NaN;
		}
		if ( q < 0.0 ) {
			return 0.0;
		}
		if ( q === PINF ) {
			return 1.0;
		}
		if (
			v > 25000 ||
			gausslegdquad( q, 0, r, nranges, -1.0, 1.0, 20, v, ll ) === 0
		) {
			return pow( prangeVInf( q, r ), nranges );
		}
		auxprob = 0;
		found = false;
		a = 0;
		probinic = 0;
		while ( !found ) {
			auxprob += gausslegdquad( q, a, r, nranges, -1.0, +1.0, 20, v, ll );
			if ( auxprob > 1.0 ) {
				return 1.0;
			}
			if ( abs(auxprob - probinic) / auxprob <= PRECISION ) {
				found = true;
			} else {
				probinic = auxprob;
			}
			a += 1;
		}
		return auxprob;
	}
}


// EXPORTS //

module.exports = factory;

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
* Evaluates the cumulative distribution function (CDF) of the studentized range distribution.
*
* ## References
*
* -   Ferreira, D. F., Demetrico, C. G. B., Manly, B. F. J., and Machado, A. de A. 2007. "Quantis da distribuição do máximo da amplitude estudentizada." _Rev. Mat. Est._, São Paulo, 25 (1): 117-135. <http://jaguar.fcav.unesp.br/RME/fasciculos/v25/v25_n1/A8_Daniel.pdf>.
*
* @param {number} q - quantile of the studentized range
* @param {number} r - sample size for range (same for each group)
* @param {number} v - degrees of freedom
* @param {number} [nranges=1] - number of groups whose maximum range is considered
* @returns {number} evaluated CDF
*
* @example
* var y = cdf( 0.5, 3.0, 2.0 );
* // returns ~0.0644
*
* @example
* var y = cdf( 12.1, 17.0, 2.0 );
* // returns ~0.913
*
* @example
* var y = cdf( 0.5, 3.0, 2.0, 2 );
* // returns ~0.01
*/
function cdf( q, r, v, nranges ) {
	var probinic;
	var auxprob;
	var found;
	var ll;
	var a;

	if ( isnan( q ) || isnan( r ) || isnan( v ) ) {
		return NaN;
	}
	if ( r < 2.0 || v < 2.0 ) {
		return NaN;
	}
	if ( nranges === void 0 ) {
		nranges = 1;
	}
	else if ( !isPositiveInteger( nranges ) ) {
		return NaN;
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


// EXPORTS //

module.exports = cdf;

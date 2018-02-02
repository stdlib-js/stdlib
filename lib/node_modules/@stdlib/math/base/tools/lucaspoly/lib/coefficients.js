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

var binomcoef = require( '@stdlib/math/base/special/binomcoef' );
var floor = require( '@stdlib/math/base/special/floor' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var cache = require( './cache.js' );


// MAIN //

/**
* Computes polynomial coefficients.
*
* ## Notes
*
* -   Coefficients are computed via a (1,2)-Pascal triangle (i.e., Lucas triangle). For more details, see [Lucas polynomials][oeis-lucas-polynomials] and [Lucas triangle][oeis-lucas-triangle].
*
* [oeis-lucas-polynomials]: https://oeis.org/wiki/Lucas_polynomials
* [oeis-lucas-triangle]: https://oeis.org/wiki/Lucas_triangle
*
* @private
* @param {NonNegativeInteger} n - Lucas polynomial for which to compute coefficients
* @returns {NonNegativeIntegerArray} polynomial coefficients
*/
function coefficients( n ) {
	var coefs;
	var half;
	var high;
	var low;
	var p;
	var a;
	var b;
	var m;
	var i;

	coefs = cache[ n ];
	if ( coefs === void 0 ) {
		m = n + 1;
		coefs = new Array( m );
		if ( n === 0 ) {
			coefs[ 0 ] = 2.0;
		} else {
			for ( i = 0; i < m; i++ ) {
				coefs[ i ] = 0.0;
			}
			half = n / 2;
			high = ceil( half );
			low = floor( half );
			for ( i = 0; i <= low; i++ ) {
				p = (2*i) + (n%2);
				a = 2.0 * binomcoef( high+i-1, low-i-1 );
				b = binomcoef( high+i-1, low-i );
				coefs[ p ] += a + b;
			}
		}
		// Memoize the coefficients:
		cache[ n ] = coefs;
	}
	return coefs;
}


// EXPORTS //

module.exports = coefficients;

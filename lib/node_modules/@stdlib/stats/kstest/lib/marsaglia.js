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

var floor = require( '@stdlib/math/base/special/floor' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var exp = require( '@stdlib/math/base/special/exp' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Evaluates the Kolmogorov distribution. This function is a JavaScript implementation of a procedure developed by Marsaglia & Tsang.
*
* ## References
*
* -   Marsaglia, George, Wai Wan Tsang, and Jingbo Wang. 2003. "Evaluating Kolmogorov's Distribution." _Journal of Statistical Software_ 8 (18): 1–4. doi:[10.18637/jss.v008.i18](https://doi.org/10.18637/jss.v008.i18).
*
* @private
* @param {number} d - the argument of the CDF of D_n
* @param {number} n - number of variates
* @returns {number} evaluated CDF, i.e. P( D_n < d )
*/
function pKolmogorov( d, n ) {
	var eH;
	var eQ;
	var h;
	var H;
	var Q;
	var g;
	var i;
	var j;
	var k;
	var m;
	var s;

	s = d * d * n;
	if ( s > 7.24 || ( s > 3.76 && n > 99 ) ) {
		return 1 - (2 * exp( -( 2.000071 + (0.331/sqrt(n)) + (1.409/n) ) * s ));
	}
	k = floor( n * d ) + 1;
	m = (2*k) - 1;
	h = k - (n*d);
	H = new Float64Array( m * m );
	Q = new Float64Array( m * m );
	for ( i = 0; i < m; i++ ) {
		for ( j = 0; j < m; j++ ) {
			if ( i - j + 1 < 0 ) {
				H[ (i*m) + j ] = 0;
			} else {
				H[ (i*m) + j ] = 1;
			}
		}
	}
	for ( i = 0; i < m; i++ ) {
		H[ i * m ] -= pow( h, i+1 );
		H[ ((m-1) * m) + i ] -= pow( h, (m-i) );
	}
	H[ (m-1) * m ] += ( ( (2*h)-1 > 0 ) ? pow( (2*h)-1, m ) : 0 );
	for ( i = 0; i < m; i++ ) {
		for ( j = 0; j < m; j++ ) {
			if ( i - j + 1 > 0 ) {
				for ( g = 1; g <= i - j + 1; g++ ) {
					H[ (i*m) + j ] /= g;
				}
			}
		}
	}
	eH = 0;
	mpow( H, eH, n );
	s = Q[ ((k-1) * m) + k - 1 ];
	for ( i = 1; i <= n; i++ ) {
		s = s * i / n;
		if ( s < 1e-140 ) {
			s *= 1e140;
			eQ -= 140;
		}
	}
	s *= pow( 10, eQ );
	return s;

	/**
	* Matrix exponentiation. Mutates Q matrix.
	*
	* @private
	* @param {Float64Array} A - input matrix
	* @param {number} eA - matrix power
	* @param {number} n - number of variates
	*/
	function mpow( A, eA, n ) {
		var eB;
		var B;
		var i;

		if ( n === 1 ) {
			for ( i = 0; i < m*m; i++ ) {
				Q[ i ] = A[ i ];
				eQ = eA;
			}
			return;
		}
		mpow( A, eA, floor( n/2 ) );
		B = mmult( Q, Q );
		eB = 2 * eQ;
		if ( n % 2 === 0 ) {
			for ( i = 0; i < m*m; i++ ) {
				Q[ i ] = B[ i ];
			}
			eQ = eB;
		} else {
			Q = mmult( A, B );
			eQ = eA + eB;
		}
		if ( Q[ (floor(m/2) * m) + floor(m/2) ] > 1e140 ) {
			for ( i = 0; i < m*m; i++ ) {
				Q[ i ] *= 1e-140;
			}
			eQ += 140;
		}
	}

	/**
	* Multiply matrices x and y.
	*
	* @private
	* @param {Float64Array} x - first input matrix
	* @param {Float64Array} y - second input matrix
	* @returns {Float64Array} matrix product
	*/
	function mmult( x, y ) {
		var i;
		var j;
		var k;
		var s;
		var z;

		z = new Float64Array( m * m );
		for ( i = 0; i < m; i++ ) {
			for ( j = 0; j < m; j++ ) {
				s = 0;
				for ( k = 0; k < m; k++ ) {
					s += x[ (i*m) + k ] * y[ (k*m) + j ];
					z[ (i*m) + j ] = s;
				}
			}
		}
		return z;
	}
}


// EXPORTS //

module.exports = pKolmogorov;

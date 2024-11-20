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

var binomcoefln = require( '@stdlib/math/base/special/binomcoefln' );
var floor = require( '@stdlib/math/base/special/floor' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Evaluates the CDF for the one-sided test statistics, i.e., the maximum by which the empirical CDF exceeds / is less than the hypothesized CDF.
*
* @private
* @param {number} d - the argument of the CDF of D_n^+ / D_n^-
* @param {PositiveInteger} n - number of variates
* @returns {number} evaluated CDF, i.e., P( D_n^+ < d )
*/
function pKolmogorov1( d, n ) {
	var len;
	var out;
	var tmp;
	var i;

	if ( d <= 0.0 ) {
		return 0.0;
	}
	if ( d >= 1.0 ) {
		return 1.0;
	}
	len = floor( n * (1.0-d) ) + 1;
	out = 0.0;
	for ( i = 0; i < len; i++ ) {
		tmp = binomcoefln( n, i );
		tmp += ( n - i ) * ln( 1.0 - d - (i/n) );
		tmp += ( i - 1.0 ) * ln( d + (i/n) );
		out += exp( tmp );
	}
	return 1.0 - (d * out);
}


// EXPORTS //

module.exports = pKolmogorov1;

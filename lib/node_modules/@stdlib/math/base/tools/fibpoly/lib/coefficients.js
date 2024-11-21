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
var cache = require( './cache.js' );


// MAIN //

/**
* Computes polynomial coefficients.
*
* @private
* @param {NonNegativeInteger} n - Fibonacci polynomial for which to compute coefficients
* @returns {NonNegativeIntegerArray} polynomial coefficients
*/
function coefficients( n ) {
	var coefs;
	var i;

	coefs = cache[ n ];
	if ( coefs === void 0 ) {
		coefs = [];
		for ( i = 0; i < n; i++ ) {
			coefs.push( 0.0 );
		}
		for ( i = n-1; i >= 0; i -= 2 ) {
			coefs[ i ] = binomcoef( (n+i-1)/2, i );
		}
		// Memoize the coefficients:
		cache[ n ] = coefs;
	}
	return coefs;
}


// EXPORTS //

module.exports = coefficients;

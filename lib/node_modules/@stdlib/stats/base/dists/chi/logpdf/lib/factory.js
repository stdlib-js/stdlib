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

var constantFunction = require( '@stdlib/utils/constant-function' );
var degenerate = require( '@stdlib/stats/base/dists/degenerate/logpdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var gammaln = require( '@stdlib/math/base/special/gammaln' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a chi distribution with degrees of freedom `k`.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 0.5 );
*
* var y = logpdf( 2.0 );
* // returns ~-3.115
*
* y = logpdf( 1.0 );
* // returns ~-1.268
*/
function factory( k ) {
	var km1;
	var kh;

	if ( isnan( k ) || k < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( k === 0.0 ) {
		return degenerate( 0.0 );
	}

	kh = k / 2.0;
	km1 = k - 1.0;
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a chi distribution with degrees of freedom `k`.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( 1.0 );
	* // returns <number>
	*/
	function logpdf( x ) {
		var out;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 || x === PINF ) {
			return NINF;
		}
		out = ( ( 1.0-kh ) * LN2 ) + ( km1 * ln( x ) ) - ( (x*x) / 2.0 );
		out -= gammaln( kh );
		return out;
	}
}


// EXPORTS //

module.exports = factory;

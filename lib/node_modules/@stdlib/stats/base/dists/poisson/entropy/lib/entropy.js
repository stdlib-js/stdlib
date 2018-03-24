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

var sumSeries = require( '@stdlib/math/base/tools/sum-series' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var factorialln = require( '@stdlib/math/base/special/factorialln' );
var factorial = require( '@stdlib/math/base/special/factorial' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );


// FUNCTIONS //

/**
* Returns a function to retrieve elements of the series \\( \sum_{k=0}^{\infty} \frac{ \lambda^k \log(k!) }{ k! } \\).
*
* @private
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {Function} function to retrieve series elements
*/
function seriesClosure( lambda ) {
	var lk;
	var k;
	k = 1;
	lk = lambda;
	return seriesElement;

	/**
	* Returns the current series element.
	*
	* @private
	* @returns {number} series element
	*/
	function seriesElement() {
		k += 1;
		lk *= lambda;
		return lk * factorialln( k ) / factorial( k );
	}
}


// MAIN //

/**
* Returns the entropy of a Poisson distribution.
*
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {PositiveNumber} entropy
*
* @example
* var v = entropy( 9.0 );
* // returns ~2.508
*
* @example
* var v = entropy( 1.0 );
* // returns ~1.305
*
* @example
* var v = entropy( -0.2 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( lambda ) {
	var gen;
	var out;
	if ( isnan( lambda ) || lambda < 0.0 ) {
		return NaN;
	}
	if ( lambda === 0.0 ) {
		return 0.0;
	}
	gen = seriesClosure( lambda );
	out = lambda * ( 1.0-ln(lambda) );
	out += exp( -lambda ) * sumSeries( gen );
	return out;
}


// EXPORTS //

module.exports = entropy;

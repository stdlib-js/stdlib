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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/pdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var gamma = require( '@stdlib/math/base/special/gamma' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a chi distribution with degrees of freedom `k`.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {Function} PDF
*
* @example
* var pdf = factory( 0.5 );
*
* var y = pdf( 2.0 );
* // returns ~0.04
*
* y = pdf( 1.0 );
* // returns ~0.281
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
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a chi distribution with degrees of freedom `k`.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( 1.0 );
	* // returns <number>
	*/
	function pdf( x ) {
		var out;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return 0.0;
		}
		out = pow( 2.0, 1.0-kh ) * pow( x, km1 ) * exp( -(x*x)/2.0 );
		out /= gamma( kh );
		return out;
	}
}


// EXPORTS //

module.exports = factory;

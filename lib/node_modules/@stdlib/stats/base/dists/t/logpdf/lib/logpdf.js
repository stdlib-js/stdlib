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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var betaln = require( '@stdlib/math/base/special/betaln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} v - degrees of freedom
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 0.3, 4.0 );
* // returns ~-1.036
*
* @example
* var y = logpdf( 2.0, 0.7 );
* // returns ~-2.841
*
* @example
* var y = logpdf( -1.0, 0.5 );
* // returns ~-2.134
*
* @example
* var y = logpdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = logpdf( NaN, 2.0 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, -1.0 );
* // returns NaN
*/
function logpdf( x, v ) {
	var betaTerm;
	if (
		isnan( x ) ||
		isnan( v ) ||
		v <= 0.0
	) {
		return NaN;
	}
	betaTerm = ln( sqrt( v ) ) + betaln( v/2.0, 0.5 );
	return ( ( (1.0+v) / 2.0 ) * ln( v / ( v + pow( x, 2.0 ) ) ) ) - betaTerm;
}


// EXPORTS //

module.exports = logpdf;

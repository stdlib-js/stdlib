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
var beta = require( '@stdlib/math/base/special/beta' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} v - degrees of freedom
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.3, 4.0 );
* // returns ~0.355
*
* @example
* var y = pdf( 2.0, 0.7 );
* // returns ~0.058
*
* @example
* var y = pdf( -1.0, 0.5 );
* // returns ~0.118
*
* @example
* var y = pdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pdf( NaN, 2.0 );
* // returns NaN
*
* @example
* var y = pdf( 2.0, -1.0 );
* // returns NaN
*/
function pdf( x, v ) {
	var betaTerm;
	if (
		isnan( x ) ||
		isnan( v ) ||
		v <= 0.0
	) {
		return NaN;
	}
	betaTerm = sqrt( v ) * beta( v/2.0, 0.5 );
	return pow( v / ( v + pow( x, 2.0 ) ), (1.0+v) / 2.0 ) / betaTerm;
}


// EXPORTS //

module.exports = pdf;

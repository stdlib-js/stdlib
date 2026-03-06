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

var logpdf = require( '@stdlib/stats/base/dists/frechet/logpdf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 10.0, 2.0, 3.0, 2.0 );
* // returns ~0.031
*
* @example
* var y = pdf( -2.0, 1.0, 3.0, -1.0 );
* // returns 0.0
*
* @example
* var y = pdf( 0.0, 2.0, 1.0, 1.0 );
* // returns 0.0
*
* @example
* var y = pdf( NaN, 2.0, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 2.0, NaN, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 2.0, 1.0, NaN );
* // returns NaN
*
* @example
* var y = pdf( 0.0, -1.0, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 1.0, -1.0, 0.0 );
* // returns NaN
*/
function pdf( x, alpha, s, m ) {
	if (
		isnan( x ) ||
		isnan( alpha ) ||
		isnan( s ) ||
		isnan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return NaN;
	}
	return exp( logpdf( x, alpha, s, m ) );
}


// EXPORTS //

module.exports = pdf;

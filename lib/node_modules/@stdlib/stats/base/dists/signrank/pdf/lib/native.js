/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the probability density function (PDF) of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param {number} x - input value
* @param {PositiveInteger} n - number of observations
* @returns {Probability} evaluated PDF
*
* @example
* var y = pdf( 7.0, 9 );
* // returns ~0.01
*
* @example
* var y = pdf( 7.0, 6 );
* // returns ~0.063
*
* @example
* var y = pdf( -1.0, 40 );
* // returns 0.0
*
* @example
* var y = pdf( NaN, 10 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pdf( 2.0, -1 );
* // returns NaN
*/
function pdf( x, n ) {
	return addon( x, n );
}


// EXPORTS //

module.exports = pdf;

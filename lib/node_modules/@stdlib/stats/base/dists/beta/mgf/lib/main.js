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
var mgf0 = require( './_mgf.js' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `t`.
*
* @param {number} t - input value
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.5, 1.0, 1.0 );
* // returns ~1.297
*
* @example
* var y = mgf( 0.5, 2.0, 4.0 );
* // returns ~1.186
*
* @example
* var y = mgf( 3.0, 2.0, 2.0 );
* // returns ~5.575
*
* @example
* var y = mgf( -0.8, 4.0, 4.0 );
* // returns ~0.676
*
* @example
* var y = mgf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 1.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( 2.0, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 2.0, 0.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 2.0, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = mgf( 2.0, 0.5, 0.0 );
* // returns NaN
*/
function mgf( t, alpha, beta ) {
	if (
		isnan( t ) ||
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return NaN;
	}
	return mgf0( t, alpha, beta );
}


// EXPORTS //

module.exports = mgf;

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

var expm1 = require( '@stdlib/math/base/special/expm1' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/math/float64-eps' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );


// VARIABLES //

var OVERFLOW_THRESHOLD = 7.09782712893383973096e+02; // 0x40862E42 0xFEFA39EF


// MAIN //

/**
* Computes the relative error exponential.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = expm1rel( 0.0 );
* // returns 1.0
*
* @example
* var v = expm1rel( 1.0 );
* // returns ~1.718
*
* @example
* var v = expm1rel( -1.0 );
* // returns ~0.632
*
* @example
* var v = expm1rel( NaN );
* // returns NaN
*/
function expm1rel( x ) {
	if ( abs( x ) <= EPS ) {
		return 1.0; // L'Hopital's Rule
	}
	if ( x >= OVERFLOW_THRESHOLD ) {
		return PINF; // L'Hopital's Rule
	}
	return expm1( x ) / x;
}


// EXPORTS //

module.exports = expm1rel;

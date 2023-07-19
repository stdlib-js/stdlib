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
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for an exponential distribution with rate parameter `lambda` at a value `t`.
*
* @param {number} t - input value
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated MGF
*
* @example
* var v = mgf( 2.0, 3.0 );
* // returns 3.0
*
* @example
* var v = mgf( 0.4, 1.2 );
* // returns 1.5
*
* @example
* var v = mgf( 0.8, 1.6 );
* // returns 2.0
*
* @example
* var v = mgf( 4.0, 3.0 );
* // returns NaN
*
* @example
* var v = mgf( NaN, 3.0 );
* // returns NaN
*
* @example
* var v = mgf( 2.0, NaN );
* // returns NaN
*/
function mgf( t, lambda ) {
	if (
		isnan( t ) ||
		isnan( lambda ) ||
		lambda <= 0.0 ||
		lambda === PINF ||
		t >= lambda
	) {
		return NaN;
	}
	return lambda / ( lambda - t );
}


// EXPORTS //

module.exports = mgf;

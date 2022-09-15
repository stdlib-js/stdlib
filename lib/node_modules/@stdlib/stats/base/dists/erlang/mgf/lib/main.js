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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `t`.
*
* @param {number} t - input value
* @param {NonNegativeInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.3, 1, 1.0 );
* // returns ~1.429
*
* @example
* var y = mgf( 2.0, 2, 3.0 );
* // returns ~9.0
*
* @example
* var y = mgf( -1.0, 2, 2.0 );
* // returns ~0.444
*
* @example
* var y = mgf( NaN, 1, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 1, NaN );
* // returns NaN
*
* @example
* var y = mgf( 0.2, -2, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.5, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 1, 0.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 1, -5.0 );
* // returns NaN
*/
function mgf( t, k, lambda ) {
	if (
		isnan( t ) ||
		!isNonNegativeInteger( k ) ||
		isnan( lambda )||
		lambda < 0.0 ||
		t >= lambda
	) {
		return NaN;
	}
	return pow( 1.0 - (t/lambda), -k );
}


// EXPORTS //

module.exports = mgf;

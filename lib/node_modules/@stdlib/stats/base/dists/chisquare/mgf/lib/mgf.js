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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a chi-squared distribution with degrees of freedom `k` at a value `t`.
*
* @param {number} t - input value
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.4, 2 );
* // returns ~5.0
*
* @example
* var y = mgf( -1.0, 5.0 );
* // returns ~0.0642
*
* @example
* var y = mgf( 0.0, 10.0 );
* // returns 1.0
*/
function mgf( t, k ) {
	if (
		isnan( t ) ||
		isnan( k ) ||
		k < 0.0 ||
		t >= 0.5
	) {
		return NaN;
	}
	return pow( 1-(2*t), -k/2 );
}


// EXPORTS //

module.exports = mgf;

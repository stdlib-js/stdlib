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

var exp = require( '@stdlib/math/base/special/exp' );
var gamma = require( '@stdlib/math/base/special/gamma' );
var ln = require( '@stdlib/math/base/special/ln' );
var FLOAT32_MAX = require( '@stdlib/constants/math/float32-max' );
var SQRT_TWO_PI = require( '@stdlib/constants/math/float64-sqrt-two-pi' );
var stirling = require( './stirling.js' );


// MAIN //

/**
* Computes the regulated gamma function.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/
function gamstar( x ) {
	if ( x >= 3.0 ) {
		return exp( stirling(x) );
	}
	if ( x > 0.0 ) {
		return gamma(x) / ( exp( -x + ( ( x-0.5 ) * ln(x) ) ) * SQRT_TWO_PI );
	}
	// Case: x <= 0.0
	return FLOAT32_MAX;
}


// EXPORTS //

module.exports = gamstar;

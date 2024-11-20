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

var isnan = require( '@stdlib/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var SQRT_TWO_PI = require( '@stdlib/constants/float64/sqrt-two-pi' );
var exp = require( '@stdlib/math/base/special/exp' );


// VARIABLES //

var INV_SQRT_TWO_PI = 1.0 / SQRT_TWO_PI;


// MAIN //

/**
* Computes the Gaussian kernel for a value.
*
* @private
* @param {number} u - input value
* @returns {number} the value for the Gaussian kernel at u
*
* @example
* var u = 5.0;
* var out = gaussian( u );
* // returns ~0.0
*/
function gaussian( u ) {
	if ( isnan( u ) ) {
		return NaN;
	}
	return INV_SQRT_TWO_PI * exp( -0.5 * pow( u, 2.0 ) );
}


// EXPORTS //

module.exports = gaussian;

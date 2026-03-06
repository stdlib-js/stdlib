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

var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/assert/is-nan' );
var FOURTH_PI = require( '@stdlib/constants/float64/fourth-pi' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );
var cos = require( '@stdlib/math/base/special/cos' );


// MAIN //

/**
* Computes the cosine kernel for a value.
*
* @private
* @param {number} u - value for which we wish to calculate the cosine kernel
* @returns {number} the value for the kernel at u
*
* @example
* var u = 5;
* var out = cosine( u );
* // returns 0.0
*/
function cosine( u ) {
	if ( isnan( u ) ) {
		return NaN;
	}
	if ( abs( u ) > 1.0 ) {
		return 0.0;
	}
	return FOURTH_PI * cos( HALF_PI * u );
}


// EXPORTS //

module.exports = cosine;

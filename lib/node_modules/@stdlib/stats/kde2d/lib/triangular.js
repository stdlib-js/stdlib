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


// MAIN //

/**
* Computes the triangular kernel for a value.
*
* @private
* @param {number} u - input value
* @returns {number} kernel value at u
*
* @example
* var u = 0.2;
* var out = triangular( u );
* // returns 0.8
*/
function triangular( u ) {
	var absU;
	if ( isnan( u ) ) {
		return NaN;
	}
	absU = abs( u );
	if ( absU > 1.0 ) {
		return 0.0;
	}
	return 1.0 - absU;
}


// EXPORTS //

module.exports = triangular;

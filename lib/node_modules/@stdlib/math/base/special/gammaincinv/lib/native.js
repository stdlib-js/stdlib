/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Inverts the lower gamma function; i.e., computes `xr` such that `P(a,xr) = p`.
*
* @private
* @param {Probability} p - probability value
* @param {number} a - scale parameter
* @param {boolean} [upper=false] - boolean indicating if the function should invert the upper tail of the incomplete gamma function instead; i.e., compute `xr` such that `Q(a,xr) = p`.
* @returns {number} function value of the inverse
*
* @example
* var v = gammaincinv( 0.5, 2.0 );
* // returns ~1.678
*/
function gammaincinv( p, a, upper ) {
	if ( arguments.length < 3 ) {
		upper = false;
	}
	return addon( p, a, upper );
}


// EXPORTS //

module.exports = gammaincinv;

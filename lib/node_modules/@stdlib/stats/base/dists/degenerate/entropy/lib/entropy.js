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


// MAIN //

/**
* Returns the entropy of a degenerate distribution.
*
* @param {number} mu - constant value of distribution
* @returns {NonNegativeNumber} entropy
*
* @example
* var v = entropy( 0.1 );
* // returns 0.0
*
* @example
* var v = entropy( 0.5 );
* // returns 0.0
*
* @example
* var v = entropy( 10.0 );
* // returns 0.0
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( mu ) {
	if ( isnan( mu ) ) {
		return NaN;
	}
	return 0.0;
}


// EXPORTS //

module.exports = entropy;

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
* Returns the median of a Student's t distribution.
*
* @param {NonNegativeNumber} v - degrees of freedom
* @returns {NonNegativeNumber} median
*
* @example
* var v = median( 9.0 );
* // returns 0.0
*
* @example
* var v = median( 2.0 );
* // returns 0.0
*
* @example
* var v = median( -0.2 );
* // returns NaN
*
* @example
* var v = median( NaN );
* // returns NaN
*/
function median( v ) {
	if ( isnan( v ) || v < 0.0 ) {
		return NaN;
	}
	return 0.0;
}


// EXPORTS //

module.exports = median;

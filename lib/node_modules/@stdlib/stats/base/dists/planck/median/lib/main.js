/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var ceil = require( '@stdlib/math/base/special/ceil' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the median of a Planck distribution.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {NonNegativeInteger} median
*
* @example
* var v = median( 0.1 );
* // returns 6
*
* @example
* var v = median( 1.5 );
* // returns 0
*
* @example
* var v = median( -1.1 );
* // returns NaN
*
* @example
* var v = median( NaN );
* // returns NaN
*/
function median( lambda ) {
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	return ceil( -ln( 0.5 ) / lambda ) - 1.0;
}


// EXPORTS //

module.exports = median;

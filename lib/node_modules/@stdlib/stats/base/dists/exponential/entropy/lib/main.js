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
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the differential entropy of an exponential distribution.
*
* @param {NonNegativeNumber} lambda - rate parameter
* @returns {number} differential entropy
*
* @example
* var v = entropy( 9.0 );
* // returns ~-1.197
*
* @example
* var v = entropy( 1.0 );
* // returns 1.0
*
* @example
* var v = entropy( -0.2 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( lambda ) {
	if ( isnan( lambda ) || lambda < 0.0 ) {
		return NaN;
	}
	return 1.0 - ln( lambda );
}


// EXPORTS //

module.exports = entropy;

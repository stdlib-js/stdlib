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
var ln = require( '@stdlib/math/base/special/ln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the standard deviation of a Bradford distribution.
*
* @param {PositiveNumber} c - shape parameter
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 0.1 );
* // returns ~0.289
*
* @example
* var v = stdev( 0.5 );
* // returns ~0.288
*
* @example
* var v = stdev( 10.0 );
* // returns ~0.276
*
* @example
* var v = stdev( 0.0 );
* // returns NaN
*
* @example
* var v = stdev( -1.0 );
* // returns NaN
*
* @example
* var v = stdev( NaN );
* // returns NaN
*/
function stdev( c ) {
	var k;
	if (
		isnan( c ) ||
		c <= 0.0
	) {
		return NaN;
	}
	k = ln( 1.0 + c );
	return sqrt( ( ( ( 2.0+c ) * k ) - ( 2.0*c ) ) / ( 2.0*c*k*k ) );
}


// EXPORTS //

module.exports = stdev;

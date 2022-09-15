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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the standard deviation of a Student's t distribution.
*
* @param {PositiveNumber} v - degrees of freedom
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 9.0 );
* // returns ~1.134
*
* @example
* var v = stdev( 2.0 );
* // returns Infinity
*
* @example
* var v = stdev( 0.5 );
* // returns NaN
*
* @example
* var v = stdev( -0.2 );
* // returns NaN
*
* @example
* var v = stdev( NaN );
* // returns NaN
*/
function stdev( v ) {
	if ( isnan( v ) || v <= 1.0 ) {
		return NaN;
	}
	if ( v <= 2.0 ) {
		return PINF;
	}
	return sqrt( v / ( v - 2.0 ) );
}


// EXPORTS //

module.exports = stdev;

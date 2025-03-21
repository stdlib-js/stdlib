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
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// VARIABLES //

var SQRT1O12 = sqrt( 1.0/12.0 );


// MAIN //

/**
* Returns the standard deviation of a discrete uniform distribution.
*
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 0, 1 );
* // returns ~0.5
*
* @example
* var v = stdev( 4, 12 );
* // returns ~2.582
*
* @example
* var v = stdev( -4, 4 );
* // returns ~2.582
*
* @example
* var v = stdev( 1, -0.1 );
* // returns NaN
*
* @example
* var v = stdev( 0.5, 1 );
* // returns NaN
*
* @example
* var v = stdev( 2, NaN );
* // returns NaN
*
* @example
* var v = stdev( NaN, 2 );
* // returns NaN
*/
function stdev( a, b ) {
	if (
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return NaN;
	}
	return SQRT1O12 * sqrt( ( pow( b-a+1, 2.0 ) - 1.0 ) );
}


// EXPORTS //

module.exports = stdev;

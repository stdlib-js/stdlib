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

var isPositiveInteger = require( '@stdlib/math/base/assert/is-positive-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var digamma = require( '@stdlib/math/base/special/digamma' );
var gamma = require( '@stdlib/math/base/special/gamma' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the differential entropy of an Erlang distribution.
*
* @param {PositiveInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} differential entropy
*
* @example
* var v = entropy( 1, 1.0 );
* // returns 1.0
*
* @example
* var v = entropy( 4, 12.0 );
* // returns ~-0.462
*
* @example
* var v = entropy( 8, 2.0 );
* // returns ~1.723
*
* @example
* var v = entropy( 1.5, 2.0 );
* // returns NaN
*
* @example
* var v = entropy( 1, -0.1 );
* // returns NaN
*
* @example
* var v = entropy( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = entropy( 2, NaN );
* // returns NaN
*
* @example
* var v = entropy( NaN, 2.0 );
* // returns NaN
*/
function entropy( k, lambda ) {
	if (
		!isPositiveInteger( k ) ||
		isnan( lambda ) ||
		lambda <= 0.0
	) {
		return NaN;
	}
	return ( ( 1-k ) * digamma( k ) ) + ln( gamma( k ) / lambda ) + k;
}


// EXPORTS //

module.exports = entropy;

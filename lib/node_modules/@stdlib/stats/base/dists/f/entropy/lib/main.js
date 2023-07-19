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

var digamma = require( '@stdlib/math/base/special/digamma' );
var gammaln = require( '@stdlib/math/base/special/gammaln' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the differential entropy of an F distribution.
*
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {number} entropy
*
* @example
* var v = entropy( 3.0, 7.0 );
* // returns ~1.298
*
* @example
* var v = entropy( 4.0, 12.0 );
* // returns ~1.12
*
* @example
* var v = entropy( 8.0, 7.0 );
* // returns ~1.193
*
* @example
* var v = entropy( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = entropy( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = entropy( 2.0, NaN );
* // returns NaN
*
* @example
* var v = entropy( NaN, 2.0 );
* // returns NaN
*/
function entropy( d1, d2 ) {
	var half;
	var hd1;
	var hd2;
	var out;

	if (
		isnan( d1 ) ||
		isnan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return NaN;
	}
	half = ( d1 + d2 ) / 2.0;
	hd1 = d1 / 2.0;
	hd2 = d2 / 2.0;
	out = ln( d2 / d1 ) + gammaln( hd1 ) + gammaln( hd2 ) - gammaln( half );
	out += ( 1.0-hd1 ) * digamma( hd1 );
	out += ( -1.0-hd2 ) * digamma( hd2 );
	out += half * digamma( half );
	return out;
}


// EXPORTS //

module.exports = entropy;

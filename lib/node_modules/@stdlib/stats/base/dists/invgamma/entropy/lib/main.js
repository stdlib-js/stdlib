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
var gamma = require( '@stdlib/math/base/special/gamma' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the differential entropy of an inverse gamma distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {number} entropy
*
* @example
* var v = entropy( 1.0, 1.0 );
* // returns ~2.154
*
* @example
* var v = entropy( 4.0, 12.0 );
* // returns ~1.996
*
* @example
* var v = entropy( 8.0, 2.0 );
* // returns ~-0.922
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
function entropy( alpha, beta ) {
	var out;
	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return NaN;
	}
	out = alpha + ln( beta*gamma( alpha ) );
	out -= ( 1.0+alpha ) * digamma( alpha );
	return out;
}


// EXPORTS //

module.exports = entropy;

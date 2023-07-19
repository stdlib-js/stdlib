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
var betaln = require( '@stdlib/math/base/special/betaln' );


// MAIN //

/**
* Returns the differential entropy of a beta distribution.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {NonPositiveNumber} differential entropy
*
* @example
* var v = entropy( 1.0, 1.0 );
* // returns 0.0
*
* @example
* var v = entropy( 4.0, 12.0 );
* // returns ~-0.869
*
* @example
* var v = entropy( 8.0, 2.0 );
* // returns ~-0.795
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
	out = betaln( alpha, beta );
	out -= ( alpha-1.0 ) * digamma( alpha );
	out -= ( beta-1.0 ) * digamma( beta );
	out += ( alpha+beta-2.0 ) * digamma( alpha+beta );
	return out;
}


// EXPORTS //

module.exports = entropy;

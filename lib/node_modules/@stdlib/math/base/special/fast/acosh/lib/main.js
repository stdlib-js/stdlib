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

var isinfinite = require( '@stdlib/math/base/assert/is-infinite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the hyperbolic arccosine of a number.
*
* @param {number} x - input value
* @returns {number} hyperbolic arccosine (in radians)
*
* @example
* var v = acosh( 1.0 );
* // returns 0.0
*
* @example
* var v = acosh( 2.0 );
* // returns ~1.317
*
* @example
* var v = acosh( NaN );
* // returns NaN
*/
function acosh( x ) {
	if ( x < 1.0 ) {
		return NaN;
	}
	if ( isnan( x ) || isinfinite( x ) ) {
		return x;
	}
	return ln( x + (sqrt( x+1.0 )*sqrt( x-1.0 )) );
}


// EXPORTS //

module.exports = acosh;

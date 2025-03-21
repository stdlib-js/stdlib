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
* Computes the hyperbolic arcsine of a number.
*
* @param {number} x - input value
* @returns {number} hyperbolic arcsine (in radians)
*
* @example
* var v = asinh( 0.0 );
* // returns 0.0
*
* @example
* var v = asinh( 2.0 );
* // returns ~1.444
*
* @example
* var v = asinh( -2.0 );
* // returns ~-1.444
*
* @example
* var v = asinh( NaN );
* // returns NaN
*/
function asinh( x ) {
	if (
		x === 0.0 || // +-0.0
		isnan( x ) ||
		isinfinite( x )
	) {
		return x;
	}
	if ( x > 0 ) {
		return ln( x + sqrt( (x*x) + 1 ) );
	}
	// Better precision for large negative `x`:
	return -ln( -x + sqrt( (x*x) + 1 ) );
}


// EXPORTS //

module.exports = asinh;

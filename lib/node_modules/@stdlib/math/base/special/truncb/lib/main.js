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
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
var pow = require( '@stdlib/math/base/special/pow' );
var trunc = require( '@stdlib/math/base/special/trunc' );
var truncn = require( '@stdlib/math/base/special/truncn' );


// MAIN //

/**
* Rounds a numeric value to the nearest multiple of \\(b^n\\) toward zero.
*
* @param {number} x - input value
* @param {integer} n - integer power
* @param {PositiveInteger} b - base
* @returns {number} rounded value
*
* @example
* // Round a value to 4 decimal places:
* var v = truncb( 3.141592653589793, -4, 10 );
* // returns 3.1415
*
* @example
* // If n = 0 or b = 1, `truncb` behaves like `trunc`:
* var v = truncb( 3.141592653589793, 0, 2 );
* // returns 3.0
*
* @example
* // Round a value to the nearest multiple of two toward zero:
* var v = truncb( 5.0, 1, 2 );
* // returns 4.0
*/
function truncb( x, n, b ) {
	var y;
	var s;
	if (
		isnan( x ) ||
		isnan( n ) ||
		isnan( b ) ||
		b <= 0 ||
		isInfinite( n ) ||
		isInfinite( b )
	) {
		return NaN;
	}
	if ( isInfinite( x ) || x === 0.0 ) {
		return x;
	}
	if ( b === 10 ) {
		return truncn( x, n );
	}
	if ( n === 0 || b === 1 ) {
		return trunc( x );
	}
	s = pow( b, -n );

	// Check for overflow:
	if ( isInfinite( s ) ) {
		return x;
	}
	y = trunc( x*s ) / s;

	// Check for overflow:
	if ( isInfinite( y ) ) {
		return x;
	}
	return y;
}


// EXPORTS //

module.exports = truncb;

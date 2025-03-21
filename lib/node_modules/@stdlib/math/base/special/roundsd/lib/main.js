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
var log10 = require( '@stdlib/math/base/special/log10' );
var ln = require( '@stdlib/math/base/special/ln' );
var abs = require( '@stdlib/math/base/special/abs' );
var floor = require( '@stdlib/math/base/special/floor' );
var exponent = require( '@stdlib/number/float64/base/exponent' );
var round = require( '@stdlib/math/base/special/round' );


// MAIN //

/**
* Rounds a numeric value to the nearest number with \\(n\\) significant figures.
*
* @param {number} x - input value
* @param {PositiveInteger} n - number of significant figures
* @param {PositiveInteger} [b=10] - base
* @returns {number} rounded value
*
* @example
* var v = roundsd( 3.141592653589793, 3 );
* // returns 3.14
*
* @example
* var v = roundsd( 3.141592653589793, 1 );
* // returns 3.0
*
* @example
* var v = roundsd( 12368.0, 2 );
* // returns 12000.0
*
* @example
* var v = roundsd( 0.0313, 2, 2 );
* // returns 0.03125
*/
function roundsd( x, n, b ) {
	var base;
	var exp;
	var s;
	var y;
	if (
		isnan( x ) ||
		isnan( n ) ||
		n < 1 ||
		isInfinite( n )
	) {
		return NaN;
	}
	if ( arguments.length > 2 ) {
		if (
			isnan( b ) ||
			b <= 0 ||
			isInfinite( b )
		) {
			return NaN;
		}
		base = b;
	} else {
		base = 10;
	}
	if ( isInfinite( x ) || x === 0.0 ) {
		return x;
	}
	if ( base === 10 ) {
		exp = log10( abs( x ) );
	}
	else if ( base === 2 ) {
		exp = exponent( abs( x ) );
	}
	else {
		exp = ln( abs(x) ) / ln( base );
	}
	exp = floor( exp - n + 1.0 );
	s = pow( base, abs( exp ) );

	// Check for overflow:
	if ( isInfinite( s ) ) {
		return x;
	}
	// To avoid numerical stability issues due to floating-point rounding error (e.g., 3.55/0.1-35.5 = -7.105427357601e-15 and 3.55*10-35.5 = 0), we must treat positive and negative exponents separately.
	if ( exp < 0 ) {
		y = round( x * s ) / s;
	} else {
		y = round( x / s ) * s;
	}
	// Check for overflow:
	if ( isInfinite( y ) ) {
		return x;
	}
	return y;
}


// EXPORTS //

module.exports = roundsd;

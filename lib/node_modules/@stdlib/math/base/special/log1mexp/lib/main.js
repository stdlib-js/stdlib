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
var expm1 = require( '@stdlib/math/base/special/expm1' );
var exp = require( '@stdlib/math/base/special/exp' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var ln = require( '@stdlib/math/base/special/ln' );
var abs = require( '@stdlib/math/base/special/abs' );
var LN2 = require( '@stdlib/constants/math/float64-ln-two' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );


// MAIN //

/**
* Computes the natural logarithm of \\( 1-\exp(-|x|) \\).
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = log1mexp( 1.1 );
* // returns ~-0.40477
*
* @example
* var v = log1mexp( 0.0 );
* // returns -Infinity
*
* @example
* var v = log1mexp( NaN );
* // returns NaN
*/
function log1mexp( x ) {
	var ax;
	if ( isnan( x ) ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		return NINF;
	}
	ax = abs( x );
	if ( 0.0 < ax && ax <= LN2 ) {
		return ln( -expm1( -ax ) );
	}
	// Case: |x| > ln(2)
	return log1p( -exp( -ax ) );
}


// EXPORTS //

module.exports = log1mexp;

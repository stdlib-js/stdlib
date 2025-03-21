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
var exp = require( '@stdlib/math/base/special/exp' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// MAIN //

/**
* Computes the natural logarithm of \\( \exp(x) + \exp(y) \\).
*
* @param {number} x - input value
* @param {number} y - input value
* @returns {number} natural logarithm of \\( \exp(x) + \exp(y) \\)
*
* @example
* var v = logaddexp( 90.0, 90.0 );
* // returns ~90.6931
*
* @example
* var v = logaddexp( -20.0, 90.0 );
* // returns 90.0
*
* @example
* var v = logaddexp( 0.0, -100 );
* // returns ~3.7201e-44
*/
function logaddexp( x, y ) {
	var d;
	if ( isnan( x ) || isnan( y ) ) {
		return NaN;
	}
	if ( x === y ) {
		return x + LN2;
	}
	d = x - y;
	if ( d > 0.0 ) {
		return x + log1p( exp( -d ) );
	}
	return y + log1p( exp( d ) );
}


// EXPORTS //

module.exports = logaddexp;

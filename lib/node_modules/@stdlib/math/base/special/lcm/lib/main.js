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
var gcd = require( '@stdlib/math/base/special/gcd' );


// MAIN //

/**
* Computes the least common multiple (lcm).
*
* @param {integer} a - integer
* @param {integer} b - integer
* @returns {integer} least common multiple
*
* @example
* var v = lcm( 21, 6 );
* // returns 42
*
* @example
* var v = lcm( 3.14, 6 );
* // returns NaN
*
* @example
* var v = lcm( NaN, 6 );
* // returns NaN
*/
function lcm( a, b ) {
	var d;
	if ( a === 0 || b === 0 ) {
		return 0;
	}
	if ( a < 0 ) {
		a = -a;
	}
	if ( b < 0 ) {
		b = -b;
	}
	// Note: we rely on `gcd` to perform further argument validation...
	d = gcd( a, b );
	if ( isnan( d ) ) {
		return d;
	}
	return (a/d) * b;
}


// EXPORTS //

module.exports = lcm;

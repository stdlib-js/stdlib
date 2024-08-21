/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.
*
* @private
* @param {Complex128} z - complex number
* @param {integer} n - integer power of 10
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var v = croundn( new Complex128( -3.141592653589793, 3.141592653589793 ), -2 );
* // returns <Complex128>
*
* var re = real( v );
* // returns -3.14
*
* var im = imag( v );
* // returns 3.14
*
* // If n = 0, `croundn` behaves like `cround`:
* v = croundn( new Complex128( 9.99999, 0.1 ), 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns 10.0
*
* im = imag( v );
* // returns 0.0
*
* // Round components to the nearest thousand:
* v = croundn( new Complex128( 12368.0, -12368.0 ), 3 );
* // returns <Complex128>
*
* re = real( v );
* // returns 12000.0
*
* im = imag( v );
* // returns -12000.0
*
* v = croundn( new Complex128( NaN, NaN ), 2 );
* // returns <Complex128>
*
* re = real( v );
* // returns NaN
*
* im = imag( v );
* // returns NaN
*/
function croundn( z, n ) {
	var v = addon( z, n );
	return new Complex128( v.re, v.im );
}


// EXPORTS //

module.exports = croundn;

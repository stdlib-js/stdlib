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
* Returns a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @private
* @param {Complex128} z - complex number
* @param {number} y - number from which to derive the sign
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var v = cflipsign( new Complex128( -4.2, 5.5 ), -55.0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 4.2
*
* var im = imag( v );
* // returns -5.5
*/
function cflipsign( z, y ) {
	var v = addon( z, y );
	return new Complex128( v.re, v.im );
}


// EXPORTS //

module.exports = cflipsign;

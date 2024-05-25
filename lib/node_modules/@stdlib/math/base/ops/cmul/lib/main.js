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

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );


// MAIN //

/**
* Multiplies two double-precision complex floating-point numbers.
*
* @param {Complex128} z1 - complex number
* @param {Complex128} z2 - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var z1 = new Complex128( 5.0, 3.0 );
* // returns <Complex128>
*
* var z2 = new Complex128( -2.0, 1.0 );
* // returns <Complex128>
*
* var out = cmul( z1, z2 );
* // returns <Complex128>
*
* var re = real( out );
* // returns -13.0
*
* var im = imag( out );
* // returns -1.0
*/
function cmul( z1, z2 ) {
	var re1 = real( z1 );
	var re2 = real( z2 );
	var im1 = imag( z1 );
	var im2 = imag( z2 );
	var re = (re1*re2) - (im1*im2);
	var im = (re1*im2) + (im1*re2);
	return new Complex128( re, im );
}


// EXPORTS //

module.exports = cmul;

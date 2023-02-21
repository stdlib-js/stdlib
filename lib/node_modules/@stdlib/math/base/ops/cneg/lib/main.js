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

var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var Complex128 = require( '@stdlib/complex/float64' );


// MAIN //

/**
* Negates a double-precision complex floating-point number.
*
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var z = new Complex128( -4.2, 5.5 );
* // returns <Complex128>
*
* var out = cneg( z );
* // returns <Complex128>
*
* var re = real( out );
* // returns 4.2
*
* var im = imag( out );
* // returns -5.5
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var z = new Complex128( 0.0, 0.0 );
* // returns <Complex128>
*
* var out = cneg( z );
* // returns <Complex128>
*
* var re = real( out );
* // returns -0.0
*
* var im = imag( out );
* // returns -0.0
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var z = new Complex128( NaN, NaN );
* // returns <Complex128>
*
* var out = cneg( z );
* // returns <Complex128>
*
* var re = real( out );
* // returns NaN
*
* var im = imag( out );
* // returns NaN
*/
function cneg( z ) {
	return new Complex128( -real( z ), -imag( z ) );
}


// EXPORTS //

module.exports = cneg;

/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a plane rotation with real cosine and complex sine.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - first input array
* @param {integer} strideCX - `cx` stride length
* @param {Complex64Array} cy - second input array
* @param {integer} strideCY - `cy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {Complex64} s - sine of the angle of rotation
* @returns {Complex64Array} `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex64( 0.3, 0.4 );
*
* crot( cx.length, cx, 1, cy, 1, 0.8, s );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-1.1
*
* var im = imagf( z );
* // returns ~-0.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*/
function crot( N, cx, strideCX, cy, strideCY, c, s ) {
	var ix = stride2offset( N, strideCX );
	var iy = stride2offset( N, strideCY );
	return ndarray( N, cx, strideCX, ix, cy, strideCY, iy, c, s );
}


// EXPORTS //

module.exports = crot;

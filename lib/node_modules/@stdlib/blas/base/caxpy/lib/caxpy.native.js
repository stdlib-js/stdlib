/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} ca - scalar constant
* @param {Complex64Array} cx - first input array
* @param {integer} strideX - `cx` stride length
* @param {Complex64Array} cy - second input array
* @param {integer} strideY - `cy` stride length
* @returns {Complex64Array} second input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var ca = new Complex64( 2.0, 2.0 );
*
* caxpy( 3, ca, cx, 1, cy, 1 );
* // cy => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*/
function caxpy( N, ca, cx, strideX, cy, strideY ) {
	var viewCX = reinterpret( cx, 0 );
	var viewCY = reinterpret( cy, 0 );
	addon( N, ca, viewCX, strideX, viewCY, strideY );
	return cy;
}


// EXPORTS //

module.exports = caxpy;

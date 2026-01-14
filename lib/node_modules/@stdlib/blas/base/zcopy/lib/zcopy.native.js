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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zcopy( x.length, x, 1, y, 1 );
* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/
function zcopy( N, x, strideX, y, strideY ) {
	var viewX = reinterpret( x, 0 );
	var viewY = reinterpret( y, 0 );
	addon( N, viewX, strideX, viewY, strideY );
	return y;
}


// EXPORTS //

module.exports = zcopy;

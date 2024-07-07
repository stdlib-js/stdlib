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

var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );
var offsetView = require( '@stdlib/strided/base/offset-view' );
var addon = require( './srotm.native.js' );


// MAIN //

/**
* Applies a modified Givens plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Float32Array} param - parameters for the modified Givens transformation
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
* var y = new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
* var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* srotm( 4, x, -1, 3, y, -2, 6, param );
* // x => <Float32Array>[ ~-0.9, ~-0.8, ~1.3, ~-1.6, ~0.9, ~-0.3, ~-0.4 ]
* // y => <Float32Array>[ ~1.7, ~-0.9, ~0.5, ~0.7, ~-1.6, ~0.2, ~2.4 ]
*/
function srotm( N, x, strideX, offsetX, y, strideY, offsetY, param ) {
	var viewX;
	var viewY;

	offsetX = minViewBufferIndex( N, strideX, offsetX );
	offsetY = minViewBufferIndex( N, strideY, offsetY );

	viewX = offsetView( x, offsetX );
	viewY = offsetView( y, offsetY );

	addon( N, viewX, strideX, viewY, strideY, param );
	return y;
}


// EXPORTS //

module.exports = srotm;

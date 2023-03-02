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

var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );
var offsetView = require( '@stdlib/strided/base/offset-view' );
var addon = require( './sdot.native.js' );


// MAIN //

/**
* Computes the dot product of `x` and `y`.
*
* @param {integer} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {number} dot product
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdot( x.length, x, 1, 0, y, 1, 0 );
* // returns -5.0
*/
function sdot( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;

	offsetX = minViewBufferIndex( N, strideX, offsetX );
	offsetY = minViewBufferIndex( N, strideY, offsetY );

	viewX = offsetView( x, offsetX );
	viewY = offsetView( y, offsetY );

	return addon( N, viewX, strideX, viewY, strideY );
}


// EXPORTS //

module.exports = sdot;

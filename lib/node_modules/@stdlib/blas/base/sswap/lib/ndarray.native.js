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
var addon = require( './sswap.native.js' );


// MAIN //

/**
* Interchanges two single-precision floating-point vectors.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* sswap( x.length, x, 1, 0, y, 1, 0 );
* // x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function sswap( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;

	offsetX = minViewBufferIndex( N, strideX, offsetX );
	offsetY = minViewBufferIndex( N, strideY, offsetY );

	viewX = offsetView( x, offsetX );
	viewY = offsetView( y, offsetY );

	addon( N, viewX, strideX, viewY, strideY );
	return y;
}


// EXPORTS //

module.exports = sswap;

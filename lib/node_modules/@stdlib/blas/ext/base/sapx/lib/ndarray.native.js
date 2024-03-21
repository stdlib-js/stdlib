/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var addon = require( './sapx.native.js' );


// MAIN //

/**
* Adds a constant to each element in a single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Float32Array} x - input array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
* var alpha = 5.0;
*
* sapx( 3, alpha, x, 1, x.length-3 );
* // x => <Float32Array>[ 1.0, -2.0, 3.0, 1.0, 10.0, -1.0 ]
*/
function sapx( N, alpha, x, stride, offset ) {
	var view;
	offset = minViewBufferIndex( N, stride, offset );
	view = offsetView( x, offset );
	addon( N, alpha, view, stride );
	return x;
}


// EXPORTS //

module.exports = sapx;

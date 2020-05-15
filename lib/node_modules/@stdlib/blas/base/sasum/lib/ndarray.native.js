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

var Float32Array = require( '@stdlib/array/float32' );
var addon = require( './sasum.native.js' );


// MAIN //

/**
* Computes the sum of absolute values.
*
* @param {PositiveInteger} N - number of values to sum
* @param {Float32Array} x - input array
* @param {integer} stride - `x` stride length
* @param {NonNegativeInteger} offset - starting `x` index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
*
* var s = sasum( x.length, x, 1, 0 );
* // returns 15.0
*/
function sasum( N, x, stride, offset ) {
	var view;
	if ( stride < 0 ) {
		stride *= -1;
		offset -= (N-1) * stride;
	}
	view = new Float32Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offset), x.length-offset ); // eslint-disable-line max-len
	return addon( N, view, stride );
}


// EXPORTS //

module.exports = sasum;

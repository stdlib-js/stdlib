/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Takes elements from one of two double-precision complex floating-point strided arrays depending on a condition using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {BooleanArray} condition - condition array
* @param {integer} strideC - stride length for `condition`
* @param {NonNegativeInteger} offsetC - starting index for `condition`
* @param {Complex128Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Complex128Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Complex128Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Complex128Array} output array
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
* var y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => <Complex128Array>[ 1.0, -1.0, 5.0, -5.0, 3.0, -3.0 ]
*/
function zwhere( N, condition, strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut ) { // eslint-disable-line max-len, max-params
	var cbuf = reinterpretBoolean( condition, 0 );
	var xbuf = reinterpret( x, 0 );
	var ybuf = reinterpret( y, 0 );
	var obuf = reinterpret( out, 0 );
	addon.ndarray( N, cbuf, strideC, offsetC, xbuf, strideX, offsetX, ybuf, strideY, offsetY, obuf, strideOut, offsetOut ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = zwhere;

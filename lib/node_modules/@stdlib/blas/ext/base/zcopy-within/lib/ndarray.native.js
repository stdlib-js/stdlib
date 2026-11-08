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
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Performs an in-place copy of elements within a double-precision complex floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} target - target index
* @param {NonNegativeInteger} start - source start index (inclusive)
* @param {NonNegativeInteger} end - source end index (exclusive)
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Complex128Array} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @param {NonNegativeInteger} offsetW - starting index for `workspace`
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var w = new Complex128Array( x.length );
*
* zcopyWithin( x.length, 2, 0, 2, x, 1, 0, w, 1, 0 );
* // x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function zcopyWithin( N, target, start, end, x, strideX, offsetX, workspace, strideW, offsetW ) { // eslint-disable-line max-len
	var viewX = reinterpret( x, 0 );
	var viewW = reinterpret( workspace, 0 );
	addon.ndarray( N, target, start, end, viewX, strideX, offsetX, viewW, strideW, offsetW ); // eslint-disable-line max-len
	return x;
}


// EXPORTS //

module.exports = zcopyWithin;

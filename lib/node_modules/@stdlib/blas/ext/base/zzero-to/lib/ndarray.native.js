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
* Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zzeroTo( x.length, x, 1, 0 );
* // x => <Complex128Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
*/
function zzeroTo( N, x, strideX, offsetX ) {
	var view = reinterpret( x, 0 );
	addon.ndarray( N, view, strideX, offsetX );
	return x;
}


// EXPORTS //

module.exports = zzeroTo;

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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Replicates each element in a double-precision complex floating-point strided array a specified number of times.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to replicate each element
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {Complex128Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Complex128Array( 6 );
*
* zreplicate( x.length, 2, x, 1, out, 1 );
* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 5.0, 6.0, 5.0, 6.0 ]
*/
function zreplicate( N, k, x, strideX, out, strideOut ) {
	var ox = stride2offset( N, strideX );
	var oo = stride2offset( N * k, strideOut );
	return ndarray( N, k, x, strideX, ox, out, strideOut, oo );
}


// EXPORTS //

module.exports = zreplicate;

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

var assign = require( './assign.js' );


// MAIN //

/**
* Adds two 64-bit unsigned integers stored in integer-valued strided array views and assigns results to a provided strided output array.
*
* @param {Collection} a - first 64-bit unsigned integer strided array view containing interleaved 32-bit unsigned integer high and low order words
* @param {integer} sa - stride length for `a`
* @param {NonNegativeInteger} oa - starting index for `a`
* @param {Collection} b - second 64-bit unsigned integer strided array view containing interleaved 32-bit unsigned integer high and low order words
* @param {integer} sb - stride length for `b`
* @param {NonNegativeInteger} ob - starting index for `b`
* @param {Collection} out - output array
* @param {integer} so - stride length for `out`
* @param {NonNegativeInteger} oo - starting index for `out`
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var a = new Uint32Array( [ 0, 5 ] );
* var b = new Uint32Array( [ 0, 10 ] );
*
* var out = strided( a, 1, 0, b, 1, 0, new Uint32Array( 2 ), 1, 0 );
* // returns <Uint32Array>[ 0, 15 ]
*/
function strided( a, sa, oa, b, sb, ob, out, so, oo ) {
	assign( a[ oa ], a[ oa+sa ], b[ ob ], b[ ob+sb ], out, so, oo );
	return out;
}


// EXPORTS //

module.exports = strided;

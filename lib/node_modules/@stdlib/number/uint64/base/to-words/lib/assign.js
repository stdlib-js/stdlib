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

// MAIN //

/**
* Splits a 64-bit unsigned integer into a higher order word (32-bit unsigned integer) and a lower order word (32-bit unsigned integer).
*
* @param {Uint64} a - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
*
* var out = new Uint32Array( 2 );
*
* var a = new Uint64( 4294967296 );
* var w = toWords( a, out, 1, 0 );
* // returns <Uint32Array>[ 1, 0 ]
*
* var bool = ( w === out );
* // returns true
*/
function toWords( a, out, stride, offset ) {
	out[ offset ] = a.hi;
	out[ offset + stride ] = a.lo;
	return out;
}


// EXPORTS //

module.exports = toWords;

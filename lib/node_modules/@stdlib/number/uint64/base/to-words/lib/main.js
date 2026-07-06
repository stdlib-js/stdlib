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

var fcn = require( './assign.js' );


// MAIN //

/**
* Splits a 64-bit unsigned integer into a higher order word (32-bit unsigned integer) and a lower order word (32-bit unsigned integer).
*
* @param {Uint64} a - input value
* @returns {Array<number>} output array
*
* @example
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
*
* var a = new Uint64( 4294967296 );
* var w = toWords( a );
* // returns [ 1, 0 ]
*/
function toWords( a ) {
	return fcn( a, [ 0>>>0, 0>>>0 ], 1, 0 );
}


// EXPORTS //

module.exports = toWords;

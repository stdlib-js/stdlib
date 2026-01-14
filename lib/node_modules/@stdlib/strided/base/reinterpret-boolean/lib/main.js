/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var Uint8Array = require( '@stdlib/array/uint8' );


// MAIN //

/**
* Reinterprets a `BooleanArray` as a `Uint8Array`.
*
* @param {BooleanArray} x - input array
* @param {NonNegativeInteger} offset - starting index
* @returns {Uint8Array} `Uint8Array` view
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Uint8Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/
function reinterpret( x, offset ) {
	return new Uint8Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offset), x.length-offset ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = reinterpret;

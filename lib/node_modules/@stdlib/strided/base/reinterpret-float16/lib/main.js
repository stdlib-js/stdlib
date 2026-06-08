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

/* eslint-disable stdlib/jsdoc-typedef-typos */

'use strict';

// MODULES //

var Uint16Array = require( '@stdlib/array/uint16' );


// MAIN //

/**
* Reinterprets a `Float16Array` as a `Uint16Array`.
*
* @param {Float16Array} x - input array
* @param {NonNegativeInteger} offset - starting index
* @returns {Uint16Array} `Uint16Array` view
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
*
* var x = new Float16Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Uint16Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/
function reinterpret( x, offset ) {
	return new Uint16Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offset), x.length-offset ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = reinterpret;

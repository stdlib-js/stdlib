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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var BYTES_PER_ELEMENT = require( './bytes_per_element.json' );


// MAIN //

/**
* Returns the number of bytes per element for a provided underlying ndarray data type.
*
* @param {*} dtype - data type
* @returns {(PositiveInteger|null)} number of bytes per element
*
* @example
* var nbytes = bytesPerElement( 'float64' );
* // returns 8
*
* nbytes = bytesPerElement( 'generic' );
* // returns null
*
* @example
* var structFactory = require( '@stdlib/dstructs/struct' );
*
* var schema = [
*     {
*         'name': 'value',
*         'type': 'float64'
*     }
* ];
* var Struct = structFactory( schema );
* // returns <Function>
*
* var nbytes = bytesPerElement( Struct );
* // returns 8
*/
function bytesPerElement( dtype ) {
	var v;
	if ( isString( dtype ) ) {
		return BYTES_PER_ELEMENT[ dtype ] || null;
	}
	if ( dtype ) {
		v = dtype.byteLength;
		if ( isPositiveInteger( v ) ) {
			return v;
		}
	}
	return null;
}


// EXPORTS //

module.exports = bytesPerElement;

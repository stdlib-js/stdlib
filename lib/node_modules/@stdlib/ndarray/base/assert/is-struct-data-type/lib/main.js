/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Tests whether an input value is a supported ndarray struct data type.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether an input value is a supported ndarray struct data type
*
* @example
* var structFactory = require( '@stdlib/dstructs/struct' );
*
* var Struct = structFactory([
*     {
*         'name': 'foo',
*         'type': 'float64'
*     }
* ]);
*
* var bool = isStructDataType( Struct );
* // returns true
*
* bool = isStructDataType( 'binary' );
* // returns false
*
* bool = isStructDataType( 'float32' );
* // returns false
*
* bool = isStructDataType( 'float64' );
* // returns false
*
* bool = isStructDataType( 'generic' );
* // returns false
*
* bool = isStructDataType( 'int16' );
* // returns false
*
* bool = isStructDataType( 'int32' );
* // returns false
*
* bool = isStructDataType( 'int8' );
* // returns false
*
* bool = isStructDataType( 'uint16' );
* // returns false
*
* bool = isStructDataType( 'uint32' );
* // returns false
*
* bool = isStructDataType( 'uint8' );
* // returns false
*
* bool = isStructDataType( 'uint8c' );
* // returns false
*
* bool = isStructDataType( 'foo' );
* // returns false
*/
function isStructDataType( value ) {
	return (
		isFunction( value ) &&
		isPositiveInteger( value.alignment ) &&
		isPositiveInteger( value.byteLength ) &&
		isFunction( value.byteLengthOf ) &&
		isFunction( value.byteOffsetOf ) &&
		isFunction( value.bufferOf ) &&
		isFunction( value.viewOf )
	);
}


// EXPORTS //

module.exports = isStructDataType;

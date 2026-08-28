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

var contains = require( '@stdlib/array/base/assert/contains' ).factory;


// VARIABLES //

var isDataType = contains( [ 'generic' ] );


// MAIN //

/**
* Tests whether an input value is a supported ndarray generic data type.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported ndarray generic data type
*
* @example
* var bool = isGenericDataType( 'binary' );
* // returns false
*
* bool = isGenericDataType( 'bool' );
* // returns false
*
* bool = isGenericDataType( 'float32' );
* // returns false
*
* bool = isGenericDataType( 'float64' );
* // returns false
*
* bool = isGenericDataType( 'generic' );
* // returns true
*
* bool = isGenericDataType( 'int16' );
* // returns false
*
* bool = isGenericDataType( 'int32' );
* // returns false
*
* bool = isGenericDataType( 'int8' );
* // returns false
*
* bool = isGenericDataType( 'uint16' );
* // returns false
*
* bool = isGenericDataType( 'uint32' );
* // returns false
*
* bool = isGenericDataType( 'uint8' );
* // returns false
*
* bool = isGenericDataType( 'uint8c' );
* // returns false
*
* bool = isGenericDataType( 'foo' );
* // returns false
*/
function isGenericDataType( v ) {
	return isDataType( String( v ) );
}


// EXPORTS //

module.exports = isGenericDataType;

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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var isRealFloatingPointDataType = require( '@stdlib/array/base/assert/is-real-floating-point-data-type' ); // eslint-disable-line id-length
var isSignedIntegerDataType = require( '@stdlib/array/base/assert/is-signed-integer-data-type' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isBigInt = require( '@stdlib/assert/is-bigint' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
var minDataType = require( '@stdlib/array/min-dtype' );
var minSignedIntegerDataType = require( '@stdlib/array/base/min-signed-integer-dtype' );
var complexDType = require( '@stdlib/complex/dtype' );
var format = require( '@stdlib/string/format' );
var boolean2number = require( './boolean2number.js' );
var bigint2number = require( './bigint2number.js' );
var PRIVATE_BUFFER = require( './private_buffer.js' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Returns a function for writing field data.
*
* @private
* @param {Object} obj - field object
* @param {string} method - data view method name
* @returns {Function} function for writing field data
*/
function setNumber( obj, method ) {
	return setter;

	/**
	* Writes a number value to an underlying byte buffer.
	*
	* @private
	* @param {*} value - value to set
	* @throws {TypeError} cannot cast provided values to field data type
	*/
	function setter( value ) {
		var view;
		var dt;
		var v;
		if ( isNumber( value ) ) {
			if ( isRealFloatingPointDataType( obj.type ) ) {
				dt = obj.type;
			} else if ( !isInteger( value ) ) {
				dt = defaults.dtypes.real;
			} else if ( isSignedIntegerDataType( obj.type ) ) {
				dt = minSignedIntegerDataType( value );
			} else {
				dt = minDataType( value );
			}
			v = value;
		} else if ( isComplexLike( value ) ) {
			dt = complexDType( value ) || ( ( obj.type === 'float32' ) ? 'complex64' : 'complex128' );
			v = value.re; // discard imaginary component
		} else if ( isBoolean( value ) ) {
			dt = 'bool';
			v = boolean2number( value );
		} else if ( isBigInt( value ) ) {
			dt = 'int64'; // note: the specific integer data type (int64 vs uint64) should not matter here
			v = bigint2number( value );
		} else {
			dt = 'generic';
			v = value;
		}
		if ( !isAllowedCast( dt, obj.type, obj.castingMode ) ) {
			throw new TypeError( format( 'invalid assignment. Assigned value cannot be cast to the data type of `%s`. Data types: [%s, %s].', obj.name, obj.type, dt ) );
		}
		view = this[ PRIVATE_BUFFER ];
		view[ method ]( obj.byteOffset, v, IS_LITTLE_ENDIAN );
	}
}


// EXPORTS //

module.exports = setNumber;

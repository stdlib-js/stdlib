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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isBigInt = require( '@stdlib/assert/is-bigint' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
var minDataType = require( '@stdlib/array/min-dtype' );
var complexDType = require( '@stdlib/complex/dtype' );
var BigInt = require( '@stdlib/bigint/ctor' );
var Number = require( '@stdlib/number/ctor' );
var floor = require( '@stdlib/math/base/special/floor' );
var format = require( '@stdlib/string/format' );
var PRIVATE_BUFFER = require( './private_buffer.js' );
var boolean2bigint = require( './boolean2bigint.js' );
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
function setBigInt( obj, method ) {
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
		if ( isBigInt( value ) ) {
			dt = 'int64'; // FIXME: support both int64 and uint64
			v = value;
		} else if ( isNumber( value ) ) {
			if ( isInteger( value ) ) {
				dt = minDataType( value );
				v = BigInt( value );
			} else {
				dt = defaults.dtypes.real;
				v = BigInt( floor( value ) );
			}
		} else if ( isBoolean( value ) ) {
			dt = 'bool';
			v = boolean2bigint( value );
		} else if ( isComplexLike( value ) ) {
			dt = complexDType( value ) || defaults.dtypes.complex;
			v = BigInt( floor( value.re ) ); // discard imaginary component
		} else {
			dt = 'generic';
			v = BigInt( floor( Number( v ) ) );
		}
		if ( !isAllowedCast( dt, obj.type, obj.castingMode ) ) {
			throw new TypeError( format( 'invalid assignment. Assigned value cannot be cast to the data type of `%s`. Data types: [%s, %s].', obj.name, obj.type, dt ) );
		}
		view = this[ PRIVATE_BUFFER ];
		view[ method ]( obj.byteOffset, v, IS_LITTLE_ENDIAN );
	}
}


// EXPORTS //

module.exports = setBigInt;

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
var isBigInt = require( '@stdlib/assert/is-bigint' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
var complexDType = require( '@stdlib/complex/dtype' );
var Boolean = require( '@stdlib/boolean/ctor' );
var format = require( '@stdlib/string/format' );
var PRIVATE_BUFFER = require( './private_buffer.js' );
var boolean2number = require( './boolean2number.js' );
var number2boolean = require( './number2boolean.js' );
var complex2boolean = require( './complex2boolean.js' );
var bigint2boolean = require( './bigint2boolean.js' );
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
function setBoolean( obj, method ) {
	return setter;

	/**
	* Writes a boolean value to an underlying byte buffer.
	*
	* @private
	* @param {*} value - value to set
	* @throws {TypeError} cannot cast provided values to field data type
	*/
	function setter( value ) {
		var dt;
		var v;
		if ( isBoolean( value ) ) {
			dt = 'bool';
			v = boolean2number( value );
		} else if ( isNumber( value ) ) {
			dt = defaults.dtypes.real;
			v = boolean2number( number2boolean( value ) );
		} else if ( isBigInt( value ) ) {
			dt = 'int64'; // note: the specific integer data type (int64 vs uint64) should not matter here
			v = boolean2number( bigint2boolean( value ) );
		} else if ( isComplexLike( value ) ) {
			dt = complexDType( value ) || defaults.dtypes.complex;
			v = boolean2number( complex2boolean( value ) );
		} else {
			dt = 'generic';
			v = Boolean( value );
		}
		if ( !isAllowedCast( dt, obj.type, obj.castingMode ) ) {
			throw new TypeError( format( 'invalid assignment. Assigned value cannot be cast to the data type of `%s`. Data types: [%s, %s].', obj.name, obj.type, dt ) );
		}
		this[ PRIVATE_BUFFER ][ method ]( obj.byteOffset, v, IS_LITTLE_ENDIAN );
	}
}


// EXPORTS //

module.exports = setBoolean;

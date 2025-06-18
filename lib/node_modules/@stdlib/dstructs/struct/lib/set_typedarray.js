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

/* eslint-disable no-invalid-this, max-len */

'use strict';

// MODULES //

var isCollection = require( '@stdlib/assert/is-collection' );
var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
var isComplexDataType = require( '@stdlib/array/base/assert/is-complex-floating-point-data-type' );
var isBooleanDataType = require( '@stdlib/array/base/assert/is-boolean-data-type' );
var isRealDataType = require( '@stdlib/array/base/assert/is-real-data-type' );
var typedarray = require( '@stdlib/array/typed' );
var dtype = require( '@stdlib/array/dtype' );
var reinterpretComplex = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var gfill = require( '@stdlib/blas/ext/base/gfill' );
var map = require( '@stdlib/array/base/map' );
var format = require( '@stdlib/string/format' );
var PRIVATE_BUFFER = require( './private_buffer.js' );
var isStruct = require( './is_struct.js' );
var number2boolean = require( './number2boolean.js' );
var complex2boolean = require( './complex2boolean.js' );
var complex2number = require( './complex2number.js' );


// MAIN //

/**
* Returns a function for writing field data.
*
* @private
* @param {Object} obj - field object
* @returns {Function} function for writing field data
*/
function setTypedArray( obj ) {
	return setter;

	/**
	* Writes a list of values to a typed array view of an underlying byte buffer.
	*
	* @private
	* @param {Collection} value - value to set
	* @throws {TypeError} must provide an array-like object
	* @throws {RangeError} must provide an array-like object having an expected length
	* @throws {TypeError} cannot cast provided values to field data type
	*/
	function setter( value ) {
		var view;
		var dt;
		if ( !isCollection( value ) || isStruct( value ) ) {
			throw new TypeError( format( 'invalid assignment. `%s` must be an array-like object. Value: `%s`.', obj.name, value ) );
		}
		if ( value.length !== obj.length ) {
			throw new RangeError( format( 'invalid assignment. `%s` must be an array-like object having length %u.', obj.name, obj.length ) );
		}
		dt = dtype( value );
		if ( !isAllowedCast( dt, obj.type, obj.castingMode ) ) {
			throw new TypeError( format( 'invalid assignment. Assigned value cannot be cast to the data type of `%s`. Data types: [%s, %s].', obj.name, obj.type, dt ) );
		}
		view = typedarray( this[ PRIVATE_BUFFER ].buffer, obj.byteOffset, obj.length, obj.type );
		if ( dt === obj.type ) {
			// Case: complex => complex
			if ( isComplexDataType( dt ) ) {
				gcopy( obj.length*2, reinterpretComplex( value, 0 ), 1, reinterpretComplex( view, 0 ), 1 );
				return;
			}
			// Case: boolean => boolean
			if ( isBooleanDataType( dt ) ) {
				gcopy( obj.length, reinterpretBoolean( value, 0 ), 1, reinterpretBoolean( view, 0 ), 1 );
				return;
			}
			// Case: real => real
			gcopy( obj.length, value, 1, view, 1 );
			return;
		}
		// Case: real => ???
		if ( isRealDataType( dt ) ) {
			// Case: real => real
			if ( isRealDataType( obj.type ) ) {
				gcopy( obj.length, value, 1, view, 1 );
				return;
			}
			// Case: real => complex
			if ( isComplexDataType( obj.type ) ) {
				view = reinterpretComplex( view, 0 );

				// TODO: consider refactoring to avoid two-passes; may require creating a separate strided utility explicitly aimed at casting real-valued arrays to complex arrays
				gcopy( obj.length, view, 2, value, 1 ); // assign to only real-components
				gfill.ndarray( obj.length, 0.0, view, 2, 1 ); // fill imaginary components with zeros
				return;
			}
			// Case: real => boolean
			map.assign( value, view, 1, 0, number2boolean );
			return;
		}
		// Case: complex => ???
		if ( isComplexDataType( dt ) ) {
			// Case: complex => real
			if ( isRealDataType( obj.type ) ) {
				map.assign( value, view, 1, 0, complex2number ); // discard imaginary components
				return;
			}
			// Case: complex => complex
			if ( isComplexDataType( obj.type ) ) {
				gcopy( obj.length*2, reinterpretComplex( value, 0 ), 1, reinterpretComplex( view, 0 ), 1 );
				return;
			}
			// Case: complex => boolean
			map.assign( value, view, 1, 0, complex2boolean );
			return;
		}
		// Case: boolean => ???

		// Case: boolean => real
		if ( isRealDataType( obj.type ) ) {
			gcopy( obj.length, reinterpretBoolean( value, 0 ), 1, view, 1 );
			return;
		}
		// Case: boolean => complex
		view = reinterpretComplex( view, 0 );

		// TODO: consider refactoring to avoid two-passes; may require creating a separate strided utility explicitly aimed at casting real-valued arrays to complex arrays
		gcopy( obj.length, view, 2, reinterpretBoolean( value, 0 ), 1 ); // assign to only real-components
		gfill.ndarray( obj.length, 0.0, view, 2, 1 ); // fill imaginary components with zeros
	}
}


// EXPORTS //

module.exports = setTypedArray;

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

var Uint8Array = require( '@stdlib/array/uint8' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var format = require( '@stdlib/string/format' );
var PRIVATE_BUFFER = require( './private_buffer.js' );
var isStructInstance = require( './is_struct_instance.js' );


// MAIN //

/**
* Returns a function for writing field data.
*
* @private
* @param {Object} obj - field object
* @returns {Function} function for writing field data
*/
function setStruct( obj ) {
	return setter;

	/**
	* Writes `struct` data to an underlying byte buffer.
	*
	* @private
	* @param {Object} value - value to set
	* @throws {TypeError} must be a `struct` instance
	* @throws {RangeError} must be a `struct` instance having the same byte length
	* @throws {TypeError} cannot cast provided values to field data type
	*/
	function setter( value ) {
		var view;
		var dest;
		var src;
		var buf;
		var nb;
		if ( !isStructInstance( value ) ) {
			throw new TypeError( format( 'invalid assignment. `%s` must be a `struct` instance. Value: `%s`.', obj.name, value ) );
		}
		if ( obj.casting === 'none' && !( value instanceof obj.type ) ) {
			throw new TypeError( format( 'invalid assignment. Assigned value cannot be cast to the data type of `%s`. Value: `%s`.', obj.name, value ) );
		}
		nb = obj.byteLength;

		buf = this.constructor.viewOf( value );
		if ( buf.byteLength !== nb ) {
			throw new RangeError( format( 'invalid assignment. `%s` must be a `struct` instance having the same byte length.', obj.name ) );
		}
		src = new Uint8Array( buf.buffer, buf.byteOffset, nb );

		view = this[ PRIVATE_BUFFER ];
		dest = new Uint8Array( view.buffer, view.byteOffset+obj.byteOffset, nb ); // eslint-disable-line max-len

		gcopy( obj.length, src, 1, dest, 1 );
	}
}


// EXPORTS //

module.exports = setStruct;

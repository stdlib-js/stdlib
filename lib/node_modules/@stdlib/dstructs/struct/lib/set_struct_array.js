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

var isCollection = require( '@stdlib/assert/is-collection' );
var Uint8Array = require( '@stdlib/array/uint8' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var format = require( '@stdlib/string/format' );
var PRIVATE_BUFFER = require( './private_buffer.js' );


// MAIN //

/**
* Returns a function for writing field data.
*
* @private
* @param {Object} obj - field object
* @returns {Function} function for writing field data
*/
function setStructArray( obj ) {
	return setter;

	/**
	* Writes a list of `struct` instances to an underlying byte buffer.
	*
	* @private
	* @param {Collection<Object>} values - list of `struct` instances
	* @throws {TypeError} must provide an array-like object
	* @throws {RangeError} must provide an array-like object having an expected length
	* @throws {TypeError} cannot cast provided values to field data type
	*/
	function setter( values ) {
		var offset;
		var views;
		var view;
		var dest;
		var src;
		var buf;
		var nb;
		var i;

		if ( !isCollection( values ) ) {
			throw new TypeError( format( 'invalid assignment. `%s` must be an array-like object. Value: `%s`.', obj.name, values ) );
		}
		if ( values.length !== obj.length ) {
			throw new RangeError( format( 'invalid assignment. `%s` must be an array-like object having length %u.', obj.name, obj.length ) );
		}
		if ( obj.casting === 'none' ) {
			for ( i = 0; i < values.length; i++ ) {
				if ( !( values[ i ] instanceof obj.type ) ) { // note: this check will fail for cross-realm `struct` instances
					throw new TypeError( format( 'invalid assignment. Assigned value cannot be cast to the data type of `%s`. Value: `%s`.', obj.name, values[ i ] ) );
				}
			}
		}
		// Compute the expected number of bytes per struct view:
		nb = obj.byteLength / obj.length; // note: as a field is expected to have a homogeneous data type, the byte length should be evenly divisible by the number of elements

		// Check that all struct instances have the same byte length...
		views = [];
		for ( i = 0; i < values.length; i++ ) {
			buf = this.constructor.viewOf( values[ i ] );
			if ( buf.byteLength !== nb ) {
				throw new RangeError( format( 'invalid assignment. `%s` must be an array-like object containing `struct` instances having the same byte length.', obj.name ) );
			}
			src = new Uint8Array( buf.buffer, buf.byteOffset, nb );
			views.push( src );
		}
		// Write the data for each `struct` to the underlying byte buffer...
		view = this[ PRIVATE_BUFFER ];
		offset = view.byteOffset + obj.byteOffset;
		for ( i = 0; i < values.length; i++ ) {
			dest = new Uint8Array( view.buffer, offset, nb );
			gcopy( obj.length, views[ i ], 1, dest, 1 );
			offset += nb;
		}
	}
}


// EXPORTS //

module.exports = setStructArray;

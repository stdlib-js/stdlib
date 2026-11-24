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

var format = require( '@stdlib/string/format' );
var DATA_VIEW_METHODS = require( './data_view_methods.js' );
var setNumber = require( './set_number.js' );
var setComplex = require( './set_complex.js' );
var setBoolean = require( './set_boolean.js' );
var setBigInt = require( './set_bigint.js' );
var setStruct = require( './set_struct.js' );
var setTypedArray = require( './set_typedarray.js' );
var setStructArray = require( './set_struct_array.js' );


// MAIN //

/**
* Returns a function for setting field data.
*
* @private
* @param {Object} obj - field object
* @throws {Error} unexpected error
* @returns {Function} function for setting field data
*/
function setter( obj ) {
	if ( obj.length ) {
		if ( obj.isStructType ) {
			return setStructArray( obj );
		}
		return setTypedArray( obj );
	}
	switch ( obj.type ) {
	case 'float64':
	case 'float32':
	case 'float16':
	case 'int8':
	case 'int16':
	case 'int32':
	case 'uint8':
	case 'uint16':
	case 'uint32':
		return setNumber( obj, DATA_VIEW_METHODS[ obj.type ].set );

	case 'int64':
	case 'uint64':
		return setBigInt( obj, DATA_VIEW_METHODS[ obj.type ].set );

	case 'bool':
		return setBoolean( obj, DATA_VIEW_METHODS[ obj.type ].set );

	case 'complex128':
	case 'complex64':
	case 'complex32':
		return setComplex( obj, DATA_VIEW_METHODS[ obj.type ].set );

	default:
		if ( obj.isStructType ) {
			return setStruct( obj );
		}
		// Ensure that we fail loudly if we have failed to add support for newly added data types:
		throw new Error( format( 'unexpected error. Unrecognized data type. Value: `%s`.', obj.type ) );
	}
}


// EXPORTS //

module.exports = setter;

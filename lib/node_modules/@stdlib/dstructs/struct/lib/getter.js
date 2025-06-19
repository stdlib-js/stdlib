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
var getNumber = require( './get_number.js' );
var getBoolean = require( './get_boolean.js' );
var getComplex = require( './get_complex.js' );
var getBigInt = require( './get_bigint.js' );
var getStruct = require( './get_struct.js' );
var getTypedArray = require( './get_typedarray.js' );
var getStructArray = require( './get_struct_array.js' );


// MAIN //

/**
* Returns a function for resolving field data.
*
* @private
* @param {Object} obj - field object
* @throws {Error} unexpected error
* @returns {Function} function for resolving field data
*/
function getter( obj ) {
	if ( obj.length ) {
		if ( obj.isStructType ) {
			return getStructArray( obj );
		}
		return getTypedArray( obj );
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
		return getNumber( obj, DATA_VIEW_METHODS[ obj.type ].get );

	case 'int64':
	case 'uint64':
		return getBigInt( obj, DATA_VIEW_METHODS[ obj.type ].get );

	case 'bool':
		return getBoolean( obj, DATA_VIEW_METHODS[ obj.type ].get );

	case 'complex128':
	case 'complex64':
	case 'complex32':
		return getComplex( obj, DATA_VIEW_METHODS[ obj.type ].get );

	default:
		if ( obj.isStructType ) {
			return getStruct( obj );
		}
		// Ensure that we fail loudly if we have failed to add support for newly added data types:
		throw new Error( format( 'unexpected error. Unrecognized data type. Value: `%s`.', obj.type ) );
	}
}


// EXPORTS //

module.exports = getter;

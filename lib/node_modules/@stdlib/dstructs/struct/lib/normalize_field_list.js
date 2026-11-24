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

var isObject = require( '@stdlib/assert/is-object' );
var format = require( '@stdlib/string/format' );
var FIELD_PROPERTIES = require( './field_properties.js' );
var isUnionType = require( './is_union_type.js' );
var normalizeField = require( './normalize_field.js' );
var normalizeUnion = require( './normalize_union.js' );


// MAIN //

/**
* Normalizes a list of field objects.
*
* @private
* @param {Array} fields - input fields
* @returns {(Array<Object>|Error)} normalized field objects or an error
*/
function normalize( fields ) {
	var out;
	var tmp;
	var o;
	var i;

	out = [];
	for ( i = 0; i < fields.length; i++ ) {
		o = fields[ i ];
		if ( !isObject( o ) ) {
			return new TypeError( format( 'invalid argument. First argument must be an array of objects. Value: `%s`. Index: `%d`.', o, i ) );
		}
		// Check for a union type which is a collection of nested field objects which all have the same byte length...
		if ( isUnionType( o ) ) {
			tmp = normalizeUnion( o );
			if ( tmp === null ) {
				return new TypeError( format( 'invalid argument. Union types must be an array of objects. Value: `%s`. Index: `%d`.', JSON.stringify( o ), i ) );
			}
			if ( tmp instanceof Error ) {
				return tmp;
			}
		} else {
			tmp = normalizeField( o, FIELD_PROPERTIES );
			if ( tmp instanceof Error ) {
				return tmp;
			}
		}
		out.push( tmp );
	}
	return out;
}


// EXPORTS //

module.exports = normalize;

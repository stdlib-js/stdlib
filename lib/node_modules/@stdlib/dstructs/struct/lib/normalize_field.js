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

var isStructConstructorLike = require( '@stdlib/assert/is-struct-constructor-like' );
var hasProp = require( '@stdlib/assert/has-property' );
var join = require( '@stdlib/array/base/join' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var format = require( '@stdlib/string/format' );
var hasProperties = require( './has_properties.js' );
var isValidNonEmptyString = require( './is_valid_nonempty_string.js' );
var isValidString = require( './is_valid_string.js' );
var isValidPositiveInteger = require( './is_valid_positive_integer.js' );
var isValidBoolean = require( './is_valid_boolean.js' );
var isValidType = require( './is_valid_type.js' );
var isValidOneOf = require( './is_valid_one_of.js' );
var initFieldObject = require( './init_field_object.js' );
var byteLength = require( './byte_length.js' );
var CASTING_MODES = require( './casting_modes.js' );
var ALIGNMENTS = require( './alignments.js' );


// VARIABLES //

var MANDATORY_FIELD_NAMES = [
	'name',
	'type'
];

var VALIDATORS = {
	'name': isValidNonEmptyString,
	'type': isValidType,
	'description': isValidString,
	'length': isValidPositiveInteger,
	'enumerable': isValidBoolean,
	'writable': isValidBoolean,
	'default': constantFunction( null ),
	'castingMode': isValidOneOf( CASTING_MODES )
};


// MAIN //

/**
* Normalizes a provided field object.
*
* @private
* @param {Object} obj - input field object
* @param {Array<string>} keys - list of keys to standardize
* @returns {(Object|Error)} output object or an error
*/
function normalize( obj, keys ) {
	var out;
	var err;
	var v;
	var k;
	var i;

	out = initFieldObject();
	for ( i = 0; i < keys.length; i++ ) {
		k = keys[ i ];
		if ( hasProp( obj, k ) ) {
			v = obj[ k ];
			err = VALIDATORS[ k ]( v, k );
			if ( err ) {
				return err;
			}
			out[ k ] = v;
		}
	}
	if ( !hasProperties( out, MANDATORY_FIELD_NAMES ) ) {
		return new TypeError( format( 'invalid argument. Field objects must have the following properties: "%s". Value: `%s`.', join( MANDATORY_FIELD_NAMES, ', ' ), JSON.stringify( obj ) ) );
	}
	out.isStructType = isStructConstructorLike( out.type );
	out.byteLength = byteLength( out );
	if ( out.isStructType ) {
		out.alignment = out.type.alignment;
	} else {
		out.alignment = ALIGNMENTS[ out.type ];
	}
	return out;
}


// EXPORTS //

module.exports = normalize;

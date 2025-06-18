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

var isCollection = require( '@stdlib/assert/is-collection' );
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var typedarray2json = require( '@stdlib/array/to-json' );
var isStruct = require( './is_struct.js' );


// MAIN //

/**
* Serializes a `struct` instance to JSON.
*
* @private
* @param {Struct} struct - struct instance
* @param {Array<Object>} fields - list of normalized fields
* @returns {Object} JSON representation
*/
function toJSON( struct, fields ) {
	var out;
	var o;
	var v;
	var i;

	out = {};
	for ( i = 0; i < fields.length; i++ ) {
		o = fields[ i ];
		v = struct[ o.name ];
		if ( isCollection( v ) ) {
			v = typedarray2json( v );
		} else if ( isStruct( v ) ) {
			v = v.toJSON();
		} else if ( isComplexLike( v ) && isFunction( v.toJSON ) ) {
			v = v.toJSON();
		}
		out[ o.name ] = v;
	}
	return out;
}


// EXPORTS //

module.exports = toJSON;

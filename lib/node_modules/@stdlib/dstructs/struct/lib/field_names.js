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
var isUnionType = require( './is_union_type.js' );


// MAIN //

/**
* Resolves a list of field names.
*
* @private
* @param {Array<Object>} fields - list of field objects
* @returns {(Array<string>|Error)} list of field names or an error
*/
function fieldNames( fields ) {
	var hash;
	var out;
	var o1;
	var o2;
	var i;
	var j;
	var k;

	hash = {};
	out = [];
	for ( i = 0; i < fields.length; i++ ) {
		o1 = fields[ i ];
		k = o1.name;
		if ( isUnionType( o1 ) ) {
			for ( j = 0; j < o1.fields.length; j++ ) {
				o2 = o1.fields[ j ];
				k = o2.name;
				if ( hash[ k ] === true ) {
					return new TypeError( format( 'invalid argument. First argument must be an array of objects having unique field names. Value: `%s`.', JSON.stringify( fields ) ) );
				}
				hash[ k ] = true;
				out.push( k );
			}
		} else if ( hash[ k ] === true ) {
			return new TypeError( format( 'invalid argument. First argument must be an array of objects having unique field names. Value: `%s`.', JSON.stringify( fields ) ) );
		} else {
			hash[ k ] = true;
			out.push( k );
		}
	}
	return out;
}


// EXPORTS //

module.exports = fieldNames;

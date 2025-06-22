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

var isUnionType = require( './is_union_type.js' );


// MAIN //

/**
* Flattens a list of field objects.
*
* @private
* @param {Array<Object>} fields - list of field objects
* @returns {Array<Object>} new list
*/
function flatten( fields ) {
	var out;
	var o;
	var i;
	var j;

	out = [];
	for ( i = 0; i < fields.length; i++ ) {
		o = fields[ i ];
		if ( isUnionType( o ) ) {
			for ( j = 0; j < o.fields.length; j++ ) {
				out.push( o.fields[ j ] );
			}
		} else {
			out.push( o );
		}
	}
	return out;
}


// EXPORTS //

module.exports = flatten;

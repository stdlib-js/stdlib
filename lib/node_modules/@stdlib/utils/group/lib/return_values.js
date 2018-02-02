/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Groups values as arrays associated with distinct keys and outputs element values.
*
* ## Notes
*
* -   Checking for an "own" property is necessary to guard against the edge case where a group identifier which matches a method or property on the `Object` prototype.
*
*
* @private
* @param {Collection} collection - collection to group
* @param {Collection} groups - collection defining which group an element in the input collection belongs to
* @returns {Object} group results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var out = group( arr, groups );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*/
function group( collection, groups ) {
	var out;
	var len;
	var g;
	var i;

	len = collection.length;
	out = {};
	for ( i = 0; i < len; i++ ) {
		g = groups[ i ].toString();
		if ( hasOwnProp( out, g ) ) {
			out[ g ].push( collection[ i ] );
		} else {
			out[ g ] = [ collection[ i ] ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = group;

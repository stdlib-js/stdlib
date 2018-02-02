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

// MAIN //

/**
* Splits values into two groups and outputs element indices.
*
* @private
* @param {Collection} collection - input collection
* @param {Collection} filter - collection indicating which group an element in the input collection belongs to
* @returns {(Array|Array<Array>)} results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var out = bifurcate( arr, filter );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*/
function bifurcate( collection, filter ) {
	var out;
	var len;
	var i;
	len = collection.length;
	if ( len === 0 ) {
		return [];
	}
	out = [ [], [] ];
	for ( i = 0; i < len; i++ ) {
		if ( filter[ i ] ) {
			out[ 0 ].push( i );
		} else {
			out[ 1 ].push( i );
		}
	}
	return out;
}


// EXPORTS //

module.exports = bifurcate;

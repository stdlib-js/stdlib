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

// MAIN //

/**
* Returns a list of partition indices.
*
* ## Notes
*
* -   This function partitions field objects according to whether a field object represents a unique "view" over an underlying byte buffer. Field objects within a union belong to the same partition.
*
* @private
* @param {Array<Object>} fields - list of normalized field objects
* @returns {NonNegativeIntegerArray} list of indices
*/
function partitions( fields ) {
	var out;
	var N;
	var o;
	var i;
	var j;

	N = fields.length;

	out = [];
	j = 0;
	for ( i = 0; i < N-1; i++ ) {
		o = fields[ i ];

		// Check for the start of a union...
		if ( o.byteOffset === fields[ i+1 ].byteOffset ) {
			out.push( j );
			continue;
		}
		out.push( j );
		j += 1;
	}
	// Set the partition for the last field object:
	out.push( j );

	return out;
}


// EXPORTS //

module.exports = partitions;

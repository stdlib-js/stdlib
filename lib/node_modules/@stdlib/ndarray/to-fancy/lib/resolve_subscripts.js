/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var resolveIndex = require( './resolve_index.js' );


// MAIN //

/**
* Resolves a list of subscripts from a serialized string of Cartesian indices.
*
* ## Notes
*
* -   In non-strict mode, if provided an out-of-bounds subscript, the function returns `undefined`.
*
* @private
* @param {string} str - Cartesian indices string
* @param {NonNegativeIntegerArray} shape - dimensions
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {RangeError} index exceeds ndarray bounds
* @throws {RangeError} number of indices must match the number of ndarray dimensions
* @returns {(NonNegativeIntegerArray|void)} result
*/
function resolveSubscripts( str, shape, strict ) {
	var ndims;
	var out;
	var idx;
	var i;

	ndims = shape.length;

	// TODO: add support for serialized CartesianIndex instances: 'CartesianIndex(i,j,k)' => str2cartesian (similar to str2slice)

	out = str.split( /\s*,\s*/ );
	if ( out.length !== ndims ) {
		throw new RangeError( format( 'invalid operation. Number of indices does not match the number of array dimensions. Array shape: (%s). Index dimensions: %u.', shape.join( ',' ), out.length ) );
	}
	// Normalize each subscript...
	for ( i = 0; i < ndims; i++ ) {
		idx = resolveIndex( out[ i ], shape[ i ], strict );
		if ( idx === -1 ) {
			// In non-strict mode, match normal object behavior by returning `undefined` for undefined/non-existent properties...
			return;
		}
		out[ i ] = idx;
	}
	return out;
}


// EXPORTS //

module.exports = resolveSubscripts;

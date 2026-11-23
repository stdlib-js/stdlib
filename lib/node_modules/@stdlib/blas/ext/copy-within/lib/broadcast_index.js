/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var getDefault = require( '@stdlib/ndarray/defaults' ).get;


// VARIABLES //

var DEFAULT_DTYPE = getDefault( 'dtypes.integer_index' );


// MAIN //

/**
* Broadcasts an index argument to match the shape of the non-core dimensions.
*
* @private
* @param {(ndarray|NonNegativeInteger)} idx - index argument
* @param {NonNegativeIntegerArray} shape - shape of the non-core dimensions
* @param {string} order - memory layout order
* @returns {ndarray} ndarray containing index values
*/
function broadcastIndex( idx, shape, order ) {
	if ( isInteger( idx ) ) {
		return broadcastScalar( idx, DEFAULT_DTYPE, shape, order );
	}
	return maybeBroadcastArray( idx, shape );
}


// EXPORTS //

module.exports = broadcastIndex;

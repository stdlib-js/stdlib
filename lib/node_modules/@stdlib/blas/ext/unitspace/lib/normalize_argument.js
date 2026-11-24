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

var isMostlySafeCast = require( '@stdlib/ndarray/base/assert/is-mostly-safe-data-type-cast' );
var isEqualDataType = require( '@stdlib/ndarray/base/assert/is-equal-data-type' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var getOrder = require( '@stdlib/ndarray/base/order' );
var getShape = require( '@stdlib/ndarray/base/shape' );
var baseEmpty = require( '@stdlib/ndarray/base/empty' );
var assign = require( '@stdlib/ndarray/base/assign' );
var format = require( '@stdlib/string/format' );
var ENUMS = require( './type_enums.js' );


// MAIN //

/**
* Normalizes a `start` argument to an ndarray.
*
* @private
* @param {*} start - starting value
* @param {NonNegativeInteger} type - argument type
* @param {Array} dtypes - argument data types
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - array order
* @throws {TypeError} only (mostly) safe casts are supported
* @returns {ndarray} starting value as an ndarray
*/
function normalizeArgument( start, type, dtypes, shape, order ) {
	var odt;
	var out;
	var v;

	odt = dtypes[ 1 ];

	// Case: start === <number>
	if ( type === ENUMS.NUMBER ) {
		// A number primitive should be able to cast to any supported output data type (real or complex):
		out = broadcastScalar( start, odt, shape, order );
	}
	// Case: start === <ndarray>
	else if ( type === ENUMS.NDARRAY ) {
		// Case: start has the same dtype as the output dtype
		if ( isEqualDataType( dtypes[ 0 ], odt ) ) {
			out = maybeBroadcastArray( start, shape );
		}
		// Case: start has a different dtype than the output dtype
		else if ( isMostlySafeCast( dtypes[ 0 ], odt ) ) {
			// If we have unequal data types, we need to perform a copy...
			v = baseEmpty( odt, getShape( start, false ), getOrder( start ) );
			assign( [ start, v ] );
			out = maybeBroadcastArray( v, shape );
		}
		// Case: disallowed complex-to-real data type cast
		else {
			throw new TypeError( format( 'invalid argument. Second argument cannot be safely cast to the desired output data type. Output data type: %s. Argument data type: %s.', String( odt ), String( dtypes[ 0 ] ) ) );
		}
	}
	// Case: start === <complex>
	else {
		// Complex number scalars should only be able to cast to complex data types...
		if ( !isMostlySafeCast( dtypes[ 0 ], odt ) ) {
			throw new TypeError( format( 'invalid argument. Second argument cannot be safely cast to the desired output data type. Output data type: %s. Argument data type: %s.', String( odt ), String( dtypes[ 0 ] ) ) );
		}
		out = broadcastScalar( start, odt, shape, order );
	}
	return out;
}


// EXPORTS //

module.exports = normalizeArgument;

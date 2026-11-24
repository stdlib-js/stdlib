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
* Normalizes a list of arguments to a list of ndarrays.
*
* @private
* @param {Array} args - list of arguments
* @param {Array} types - argument types
* @param {Array} dtypes - argument data types
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - array order
* @throws {TypeError} only (mostly) safe casts are supported
* @returns {Array<ndarray>} list of ndarrays
*/
function normalizeArguments( args, types, dtypes, shape, order ) {
	var odt;
	var out;
	var N;
	var t;
	var v;
	var i;

	N = args.length;
	out = [ null, null, null ]; // [ start, stop, endpoint ]
	odt = dtypes[ 3 ];
	for ( i = 0; i < N; i++ ) {
		t = types[ i ];

		// Case: args[ i ] === endpoint
		if ( t === ENUMS.BOOLEAN ) {
			out[ i ] = broadcastScalar( args[ i ], dtypes[ i ], shape, order );
		}
		// Case: args[ i ] === <number>
		else if ( t === ENUMS.NUMBER ) {
			// A number primitive should be able to cast to any supported output data type (real or complex):
			out[ i ] = broadcastScalar( args[ i ], odt, shape, order );
		}
		// Case: args[ i ] === <ndarray>
		else if ( t === ENUMS.NDARRAY ) {
			// Case: args[ i ] === endpoint || start/stop which have the same dtype as the output dtype
			if ( i === 2 || isEqualDataType( dtypes[ i ], odt ) ) {
				out[ i ] = maybeBroadcastArray( args[ i ], shape );
			}
			// Case: args[ i ] === start/stop which have different dtype than output dtype
			else if ( isMostlySafeCast( dtypes[ i ], odt ) ) {
				// If we have unequal data types, we need to perform a copy...
				v = baseEmpty( odt, getShape( args[ i ], false ), getOrder( args[ i ] ) ); // eslint-disable-line max-len
				assign( [ args[ i ], v ] );
				out[ i ] = maybeBroadcastArray( v, shape );
			}
			// Case: disallowed complex-to-real data type cast
			else {
				throw new TypeError( format( 'invalid argument. Argument %d cannot be safely cast to the desired output data type. Output data type: %s. Argument data type: %s.', i+1, String( odt ), String( dtypes[ i ] ) ) );
			}
		}
		// Case: args[ i ] === <complex>
		else {
			// Complex number scalars should only be able to cast to complex data types...
			if ( !isMostlySafeCast( dtypes[ i ], odt ) ) {
				throw new TypeError( format( 'invalid argument. Argument %d cannot be safely cast to the desired output data type. Output data type: %s. Argument data type: %s.', i+1, String( odt ), String( dtypes[ i ] ) ) );
			}
			out[ i ] = broadcastScalar( args[ i ], odt, shape, order );
		}
	}
	return out;
}


// EXPORTS //

module.exports = normalizeArguments;

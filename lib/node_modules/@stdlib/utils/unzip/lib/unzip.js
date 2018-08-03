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

var isInteger = require( '@stdlib/assert/is-integer' );
var isArray = require( '@stdlib/assert/is-array' );


// MAIN //

/**
* Unzips a zipped array (i.e., a nested array of tuples).
*
* @param {Array} arr - zipped array
* @param {Array} [idx] - array of indices specifying which tuple elements to unzip
* @throws {TypeError} first argument must be a zipped array
* @throws {TypeError} second argument must be an array of integer indices
* @throws {Error} indices must be on the interval from zero to the tuple length
* @returns {Array} array of unzipped arrays
*
* @example
* var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
*
* var out = unzip( arr );
* // returns [ [ 1, 2 ], [ 'a', 'b' ], [ 3, 4 ] ]
*
* @example
* var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
*
* var out = unzip( arr, [ 0, 2 ] );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
function unzip( arr, idx ) {
	var numVals;
	var len;
	var out;
	var tmp;
	var i;
	var j;
	var k;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'invalid argument. Must provide a zipped array.' );
	}
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		if ( !isArray( arr[i] ) ) {
			throw new TypeError( 'invalid argument. Array must only contain arrays.' );
		}
	}
	// Assume that the first tuple is representative of all tuples...
	numVals = arr[ 0 ].length;
	if ( arguments.length > 1 ) {
		if ( !isArray( idx ) ) {
			throw new TypeError( 'invalid argument. Indices must be specified as an array.' );
		}
		for ( i = 0; i < idx.length; i++ ) {
			k = idx[ i ];
			if ( !isInteger( k ) ) {
				throw new TypeError( 'invalid argument. All indices must be integers.' );
			}
			if ( k < 0 || k > numVals ) {
				throw new Error( 'invalid argument. Must provide valid indices; i.e., an index must be on the interval [0,len], where len is the tuple length.' );
			}
		}
		numVals = idx.length;
	} else {
		idx = new Array( numVals );
		for ( i = 0; i < numVals; i++ ) {
			idx[ i ] = i;
		}
	}
	out = new Array( numVals );
	for ( j = 0; j < numVals; j++ ) {
		tmp = new Array( len );
		k = idx[ j ];
		for ( i = 0; i < len; i++ ) {
			tmp[ i ] = arr[ i ][ k ];
		}
		out[ j ] = tmp;
	}
	return out;
}


// EXPORTS //

module.exports = unzip;

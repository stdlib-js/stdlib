/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isArray = require( '@stdlib/assert/is-array' );


// MAIN //

/**
* Strided array function.
*
* @private
* @param {Array<Collection>} arrays - strided arrays
* @param {IntegerArray} shape - array containing the number of indexed elements
* @param {IntegerArray} strides - strides
* @param {NonNegativeIntegerArray} [offsets] - offsets
* @param {Function} fcn - callback
* @param {Function} clbk - callback
* @param {*} [thisArg] - callback execution context
*/
function forEach( arrays, shape, strides, offsets, fcn, clbk, thisArg ) {
	var args;
	var idx;
	var ctx;
	var cb;
	var M;
	var N;
	var f;
	var s;
	var o;
	var v;
	var i;
	var j;

	if ( isArray( offsets ) ) {
		o = offsets;
		f = fcn;
		cb = clbk;
		ctx = thisArg;
	} else {
		f = offsets;
		cb = fcn;
		ctx = clbk;
	}
	N = shape[ 0 ];
	M = arrays.length;
	idx = [];
	if ( o ) {
		for ( j = 0; j < M; j++ ) {
			idx.push( o[ j ] );
		}
	} else {
		for ( j = 0; j < M; j++ ) {
			s = strides[ j ];
			if ( s < 0 ) {
				idx.push( (1-N)*s );
			} else {
				idx.push( 0 );
			}
		}
	}
	args = [];
	for ( j = 0; j < M; j++ ) {
		args.push( 0 );
	}
	for ( i = 0; i < N; i++ ) {
		for ( j = 0; j < M; j++ ) {
			args[ j ] = arrays[ j ][ idx[ j ] ];
		}
		v = cb.call( ctx, args.slice().concat( [ i, idx, arrays ] ) );
		if ( v !== void 0 ) {
			f.apply( null, v );
		}
		for ( j = 0; j < M; j++ ) {
			idx[ j ] += strides[ j ];
		}
	}
}


// EXPORTS //

module.exports = forEach;

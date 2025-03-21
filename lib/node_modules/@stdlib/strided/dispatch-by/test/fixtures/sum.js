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
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Return a strided array function which computes the sum across one or more strided arrays.
*
* @private
* @param {Object} ctx - context
* @param {number} ctx.sum - initial sum
* @returns {Function} strided array function
*/
function wrapper( ctx ) {
	return strided;

	/**
	* Strided array function.
	*
	* @private
	* @param {Array<Collection>} arrays - strided arrays
	* @param {IntegerArray} shape - array containing the number of indexed elements
	* @param {IntegerArray} strides - strides
	* @param {NonNegativeIntegerArray} [offsets] - offsets
	* @param {Function} [fcn] - callback
	* @param {Function} clbk - callback
	* @param {*} [thisArg] - callback execution context
	*/
	function strided( arrays, shape, strides, offsets, fcn, clbk, thisArg ) {
		var nargs;
		var args;
		var fctx;
		var idx;
		var cb;
		var M;
		var N;
		var f;
		var s;
		var o;
		var v;
		var i;
		var j;

		nargs = arguments.length;
		if ( nargs === 7 ) {
			o = offsets;
			f = fcn;
			cb = clbk;
			fctx = thisArg;
		} else if ( nargs === 4 ) {
			cb = offsets;
		} else if ( nargs === 5 ) {
			if ( isArray( offsets ) ) {
				o = offsets;
				cb = fcn;
			} else if ( isFunction( offsets ) && isFunction( fcn ) ) {
				f = offsets;
				cb = fcn;
			} else {
				cb = offsets;
				fctx = fcn;
			}
		} else if ( nargs === 6 ) {
			if ( isArray( offsets ) ) {
				o = offsets;
				if ( isFunction( fcn ) && isFunction( clbk ) ) {
					f = fcn;
					cb = clbk;
				} else {
					cb = fcn;
					fctx = clbk;
				}
			} else {
				f = offsets;
				cb = fcn;
				fctx = clbk;
			}
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
		if ( f ) {
			for ( i = 0; i < N; i++ ) {
				for ( j = 0; j < M; j++ ) {
					args[ j ] = arrays[ j ][ idx[ j ] ];
				}
				v = cb.call( fctx, args, i, idx, arrays );
				if ( v !== void 0 ) {
					ctx.sum += f.apply( null, v );
				}
				for ( j = 0; j < M; j++ ) {
					idx[ j ] += strides[ j ];
				}
			}
		} else {
			for ( i = 0; i < N; i++ ) {
				for ( j = 0; j < M; j++ ) {
					args[ j ] = arrays[ j ][ idx[ j ] ];
				}
				v = cb.call( fctx, args, i, idx, arrays );
				if ( v !== void 0 ) {
					for ( j = 0; j < M; j++ ) {
						ctx.sum += v[ j ];
					}
				}
				for ( j = 0; j < M; j++ ) {
					idx[ j ] += strides[ j ];
				}
			}
		}
	}
}


// EXPORTS //

module.exports = wrapper;

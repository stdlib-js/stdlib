/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var broadcast = require( '@stdlib/ndarray/base/broadcast-array' );
var ndarrayFcn = require( './ndarray.js' );
var arrayFcn = require( './array.js' );


// MAIN //

/**
* Applies a function to each element in an array and assigns the result to an element in an output array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* @param {(ArrayLikeObject|ndarray)} arr - input array
* @param {(ArrayLikeObject|ndarray)} out - output array
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be an array-like object or an ndarray
* @throws {TypeError} second argument must be an array-like object or an ndarray
* @throws {TypeError} third argument must be a function
* @throws {TypeError} input and output arrays must be either both array-like objects or both ndarrays
* @throws {RangeError} input and output arrays must have the same length
* @throws {Error} input and output ndarrays must be broadcast compatible
* @returns {(ArrayLikeObject|ndarray)} output array
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* map( arr, out, naryFunction( abs, 1 ) );
*
* console.log( out );
* // => [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic',
*     'shape': [ 2, 3 ]
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
* var out = array( opts );
*
* map( arr, out, naryFunction( abs, 1 ) );
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
function map( arr, out, fcn, thisArg ) {
	var ndims;
	var xsh;
	var ysh;
	var x;
	var y;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( isndarrayLike( arr ) ) { // note: assertion order matters here, as an ndarray-like object is also array-like
		if ( !isndarrayLike( out ) ) {
			throw new TypeError( 'invalid argument. If the input array is an ndarray, the output array must also be an ndarray. Value: `' + out + '`.' );
		}
		x = ndarraylike2object( arr );
		xsh = x.shape;
		ndims = xsh.length;

		// Check for an empty input array...
		if ( x.length === 0 && ndims > 0 ) {
			return out;
		}
		y = ndarraylike2object( out );
		ysh = y.shape;

		// Check whether we need to broadcast `x`...
		if ( ndims === ysh.length ) {
			for ( i = 0; i < ndims; i++ ) {
				// Check whether dimensions match...
				if ( xsh[ i ] !== ysh[ i ] ) {
					// We found a mismatched dimension; delegate to `broadcast` to ensure that `x` is broadcast compatible with the output array shape...
					x = ndarraylike2object( broadcast( x.ref, ysh ) );
					break;
				}
			}
		} else {
			// If we are provided arrays with different ranks (i.e., number of dimensions), assume we need to broadcast, delegating to `broadcast` to ensure that `x` is broadcast compatible with the output array shape...
			x = ndarraylike2object( broadcast( x.ref, ysh ) );
		}
		ndarrayFcn( x, y, fcn, thisArg );
		return out;
	}
	if ( isArrayLikeObject( arr ) ) {
		if ( !isArrayLikeObject( out ) || isndarrayLike( out ) ) {
			throw new TypeError( 'invalid argument. If the input array is an array-like object, the output array must also be an array-like object. Value: `' + out + '`.' );
		}
		if ( arr.length !== out.length ) {
			throw new RangeError( 'invalid arguments. Input and output arrays must have the same length.' );
		}
		arrayFcn( arraylike2object( arr ), arraylike2object( out ), fcn, thisArg ); // eslint-disable-line max-len
		return out;
	}
	throw new TypeError( 'invalid argument. First argument must be an array-like object or an ndarray. Value: `' + arr + '`.' );
}


// EXPORTS //

module.exports = map;

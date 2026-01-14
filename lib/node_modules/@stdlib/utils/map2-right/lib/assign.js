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

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var broadcast = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var isReadOnly = require( '@stdlib/ndarray/base/assert/is-read-only' );
var format = require( '@stdlib/string/format' );
var ndarrayFcn = require( './ndarray.js' );
var arrayFcn = require( './array.js' );


// MAIN //

/**
* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to an output array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **v1**: element from first input array.
*     -   **v2**: element from second input array.
*     -   **idx**: element index.
*     -   **arrays**: input arrays.
*
* @param {(ArrayLikeObject|ndarray)} x - first input array
* @param {(ArrayLikeObject|ndarray)} y - second input array
* @param {(ArrayLikeObject|ndarray)} out - output array
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be an array-like object or an ndarray
* @throws {TypeError} second argument must be an array-like object or an ndarray
* @throws {TypeError} third argument must be an array-like object or an ndarray
* @throws {TypeError} fourth argument must be a function
* @throws {TypeError} input and output arrays must be either all array-like objects or all ndarrays
* @throws {RangeError} input and output arrays must have the same length
* @throws {Error} input and output ndarrays must be broadcast compatible
* @throws {Error} cannot write to a read-only ndarray
* @returns {(ArrayLikeObject|ndarray)} output array
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
* var y = [ 1, 1, 1, 1, 1, 1 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* map2Right( x, y, out, naryFunction( add, 2 ) );
*
* console.log( out );
* // => [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic',
*     'shape': [ 2, 3 ]
* };
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
* var out = array( opts );
*
* map2Right( x, y, out, naryFunction( add, 2 ) );
*
* var data = out.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*/
function map2Right( x, y, out, fcn, thisArg ) {
	var isxnd;
	var isynd;
	var isznd;
	var tmp;
	var sh;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', fcn ) );
	}
	isxnd = isndarrayLike( x );
	isynd = isndarrayLike( y );
	isznd = isndarrayLike( out );
	if ( isxnd ) { // note: assertion order matters here, as an ndarray-like object is also array-like
		if ( !isynd ) {
			throw new TypeError( format( 'invalid argument. If the first input array is an ndarray, the second input array must also be an ndarray. Value: `%s`.', y ) );
		}
		if ( !isznd ) {
			throw new TypeError( format( 'invalid argument. If the input arrays are ndarrays, the output array must also be an ndarray. Value: `%s`.', out ) );
		}
		if ( isReadOnly( out ) ) {
			throw new Error( 'invalid argument. The output ndarray must be writable. Cannot write to a read-only ndarray.' );
		}
		out = ndarraylike2object( out );
		sh = out.shape;

		// Broadcast and wrap the input arrays and ensure that the `ref` properties point to the original input arrays...
		tmp = ndarraylike2object( broadcast( x, sh ) );
		tmp.ref = x;
		x = tmp;

		tmp = ndarraylike2object( broadcast( y, sh ) );
		tmp.ref = y;
		y = tmp;

		ndarrayFcn( x, y, out, fcn, thisArg );
		return out.ref;
	}
	if ( isArrayLikeObject( x ) ) {
		if ( isynd || !isArrayLikeObject( y ) ) {
			throw new TypeError( format( 'invalid argument. If the first input array is an array-like object, the second input array must also be an array-like object. Value: `%s`.', y ) );
		}
		if ( isznd || !isArrayLikeObject( out ) ) {
			throw new TypeError( format( 'invalid argument. If the input arrays are array-like objects, the output array must also be an array-like object. Value: `%s`.', out ) );
		}
		if ( x.length !== y.length || y.length !== out.length ) {
			throw new RangeError( 'invalid arguments. Input and output arrays must have the same length.' );
		}
		arrayFcn( arraylike2object( x ), arraylike2object( y ), arraylike2object( out ), fcn, thisArg ); // eslint-disable-line max-len
		return out;
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = map2Right;

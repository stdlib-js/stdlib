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
var zeros = require( '@stdlib/array/base/zeros' );
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var broadcastShapes = require( '@stdlib/ndarray/base/broadcast-shapes' );
var broadcast = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var format = require( '@stdlib/string/format' );
var ndarrayFcn = require( './ndarray.js' );
var arrayFcn = require( './array.js' );


// MAIN //

/**
* Applies a function to elements in two input arrays and assigns the results to a new array.
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
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be an array-like object or an ndarray
* @throws {TypeError} second argument must be an array-like object or an ndarray
* @throws {TypeError} input arrays must be either both array-like objects or both ndarrays
* @throws {RangeError} input arrays must have the same length
* @throws {Error} input ndarrays must be broadcast compatible
* @throws {TypeError} third argument must be a function
* @returns {(Array|ndarray)} output array
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
* var y = [ 1, 1, 1, 1, 1, 1 ];
*
* var out = map2( x, y, naryFunction( add, 2 ) );
* // returns [ 2, 3, 4, 5, 6, 7 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
* var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
*
* var out = map2( x, y, naryFunction( add, 2 ) );
* // returns <ndarray>
*
* var data = out.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*/
function map2( x, y, fcn, thisArg ) {
	var isxnd;
	var isynd;
	var out;
	var tmp;
	var sh;

	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fcn ) );
	}
	isxnd = isndarrayLike( x );
	isynd = isndarrayLike( y );
	if ( isxnd ) { // note: assertion order matters here, as an ndarray-like object is also array-like
		if ( !isynd ) {
			throw new TypeError( format( 'invalid argument. If the first input array is an ndarray, the second input array must also be an ndarray. Value: `%s`.', y ) );
		}
		// Broadcast `x` and `y` to a common shape:
		sh = broadcastShapes( [ x.shape, y.shape ] );
		if ( sh === null ) {
			throw new Error( 'invalid arguments. Input ndarrays must be broadcast compatible.' );
		}
		// Broadcast and wrap the input arrays and ensure that the `ref` properties point to the original input arrays...
		tmp = ndarraylike2object( broadcast( x, sh ) );
		tmp.ref = x;
		x = tmp;

		tmp = ndarraylike2object( broadcast( y, sh ) );
		tmp.ref = y;
		y = tmp;

		// Create an output array:
		out = ndzeros( sh, {
			'dtype': 'generic',
			'order': x.order
		});

		// Apply the function to the input arrays:
		ndarrayFcn( x, y, ndarraylike2object( out ), fcn, thisArg );
		return out;
	}
	if ( isArrayLikeObject( x ) ) {
		if ( isynd || !isArrayLikeObject( y ) ) {
			throw new TypeError( format( 'invalid argument. If the first input array is an array-like object, the second input array must also be an array-like object. Value: `%s`.', y ) );
		}
		if ( y.length !== x.length ) {
			throw new RangeError( 'invalid arguments. Input arrays must have the same length.' );
		}
		out = zeros( x.length );
		arrayFcn( arraylike2object( x ), arraylike2object( y ), arraylike2object( out ), fcn, thisArg ); // eslint-disable-line max-len
		return out;
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = map2;

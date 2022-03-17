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
var broadcast = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var isReadOnly = require( '@stdlib/ndarray/base/assert/is-read-only' );
var format = require( '@stdlib/string/format' );
var ndarrayFcn = require( './ndarray.js' );
var arrayFcn = require( './array.js' );


// MAIN //

/**
* Applies a function to each element in an array and assigns the result to an element in an output array, iterating from right to left.
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
* @throws {Error} input and output ndarrays must have be broadcast compatible
* @throws {Error} cannot write to a read-only ndarray
* @returns {(ArrayLikeObject|ndarray)} output array
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* mapRight( arr, out, naryFunction( abs, 1 ) );
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
* mapRight( arr, out, naryFunction( abs, 1 ) );
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
function mapRight( arr, out, fcn, thisArg ) {
	var tmp;
	var sh;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( isndarrayLike( arr ) ) { // note: assertion order matters here, as an ndarray-like object is also array-like
		if ( !isndarrayLike( out ) ) {
			throw new TypeError( format( 'invalid argument. If the input array is an ndarray, the output array must also be an ndarray. Value: `%s`.', out ) );
		}
		if ( isReadOnly( out ) ) {
			throw new Error( 'invalid argument. The output ndarray must be writable. Cannot write to a read-only ndarray.' );
		}
		out = ndarraylike2object( out );
		sh = out.shape;

		tmp = ndarraylike2object( broadcast( arr, sh ) );
		tmp.ref = arr;
		arr = tmp;

		ndarrayFcn( arr, out, fcn, thisArg );
		return out.ref;
	}
	if ( isArrayLikeObject( arr ) ) {
		if ( !isArrayLikeObject( out ) || isndarrayLike( out ) ) {
			throw new TypeError( format( 'invalid argument. If the input array is an array-like object, the output array must also be an array-like object. Value: `%s`.', out ) );
		}
		if ( arr.length !== out.length ) {
			throw new RangeError( 'invalid arguments. Input and output arrays must have the same length.' );
		}
		arrayFcn( arraylike2object( arr ), arraylike2object( out ), fcn, thisArg ); // eslint-disable-line max-len
		return out;
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.', arr ) );
}


// EXPORTS //

module.exports = mapRight;

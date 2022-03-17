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
var zeros = require( '@stdlib/array/base/zeros' );
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var format = require( '@stdlib/string/format' );
var ndarrayFcn = require( './ndarray.js' );
var arrayFcn = require( './array.js' );


// MAIN //

/**
* Applies a function to each element in an array and assigns the result to an element in a new array, iterating from right to left.
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
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be an array-like object or an ndarray
* @throws {TypeError} second argument must be a function
* @returns {(Array|ndarray)} output array
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
*
* var out = mapRight( arr, naryFunction( abs, 1 ) );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
*
* var out = mapRight( arr, naryFunction( abs, 1 ) );
* // returns <ndarray>
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
function mapRight( arr, fcn, thisArg ) {
	var out;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( isndarrayLike( arr ) ) { // note: assertion order matters here, as an ndarray-like object is also array-like
		arr = ndarraylike2object( arr );
		out = ndzeros( arr.shape, {
			'dtype': 'generic',
			'order': arr.order
		});
		ndarrayFcn( arr, ndarraylike2object( out ), fcn, thisArg );
		return out;
	}
	if ( isArrayLikeObject( arr ) ) {
		out = zeros( arr.length );
		arrayFcn( arraylike2object( arr ), arraylike2object( out ), fcn, thisArg ); // eslint-disable-line max-len
		return out;
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.', arr ) );
}


// EXPORTS //

module.exports = mapRight;

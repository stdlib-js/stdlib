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

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var ndarraylike2object = require( '@stdlib/ndarray/base/ndarraylike2object' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var format = require( '@stdlib/string/format' );
var ndarrayFcn = require( './ndarray.js' );
var arrayFcn = require( './array.js' );


// MAIN //

/**
* Applies a function against an accumulator and each element in an array and returns the accumulated result.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* @param {(ArrayLikeObject|ndarray)} arr - input array
* @param {*} initial - initial value
* @param {Function} reducer - reduction function
* @param {*} [thisArg] - reduction function execution context
* @throws {TypeError} first argument must be an array-like object or an ndarray
* @throws {TypeError} third argument must be a function
* @returns {*} accumulated result
*
* @example
* function sum( acc, value ) {
*     return acc + value;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = reduce( arr, 0, sum );
* // returns 10
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
*
* var out = reduce( arr, 0, naryFunction( add, 2 ) );
* // returns 21
*/
function reduce( arr, initial, reducer, thisArg ) {
	if ( !isFunction( reducer ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', reducer ) );
	}
	if ( isndarrayLike( arr ) ) { // note: assertion order matters here, as an ndarray-like object is also array-like
		return ndarrayFcn( ndarraylike2object( arr ), initial, reducer, thisArg ); // eslint-disable-line max-len
	}
	if ( isArrayLikeObject( arr ) ) {
		return arrayFcn( arraylike2object( arr ), initial, reducer, thisArg );
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.', arr ) );
}


// EXPORTS //

module.exports = reduce;

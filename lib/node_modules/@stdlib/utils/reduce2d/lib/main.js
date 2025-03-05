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
var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Reduces the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     -   **arr**: input array.
*
* @param {ArrayLikeObject<Collection>} arr - array of arrays
* @param {ArrayLikeObject} initial - initial values
* @param {Function} reducer - reduction function
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be an array of arrays
* @throws {TypeError} second argument must be an array-like object
* @throws {RangeError} second argument must have a length equal to the size of the outermost input array dimension
* @throws {TypeError} third argument must be a function
* @returns {Array} results
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var arr = [
*     [ 1, 2, 3 ],
*     [ 4, 5, 6 ]
* ];
*
* var out = reduce2d( arr, [ 0, 0 ], naryFunction( add, 2 ) );
* // returns [ 6, 15 ]
*/
function reduce2d( arr, initial, reducer, thisArg ) {
	var out;
	var acc;
	var M;
	var N;
	var a;
	var i;
	var j;

	if ( !isArrayLikeObject( arr ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', arr ) );
	}
	if ( !isArrayLikeObject( initial ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', initial ) );
	}
	if ( initial.length !== arr.length ) {
		throw new RangeError( 'invalid argument. Second argument must have a length equal to the size of the outermost input array dimension.' );
	}
	if ( !isFunction( reducer ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', reducer ) );
	}
	M = arr.length;
	out = [];
	for ( i = 0; i < M; i++ ) {
		a = arr[ i ];
		if ( !isCollection( a ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.', i, a ) );
		}
		N = a.length;
		acc = initial[ i ];
		for ( j = 0; j < N; j++ ) {
			acc = reducer.call( thisArg, acc, a[ j ], [ i, j ], arr );
		}
		out.push( acc );
	}
	return out;
}


// EXPORTS //

module.exports = reduce2d;

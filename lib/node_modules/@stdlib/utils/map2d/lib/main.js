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
var isFunction = require( '@stdlib/assert/is-function' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Applies a function to each nested element in an array of arrays and assigns the result to a nested element in a new array of arrays.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     -   **arr**: input array.
*
* @param {ArrayLikeObject<ArrayLikeObject>} arr - array of arrays
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be an array of arrays
* @throws {TypeError} second argument must be a function
* @returns {ArrayArray} array of arrays
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
*
* var arr = [
*     [ -1, -2, -3 ],
*     [ -4, -5, -6 ]
* ];
*
* var out = map2d( arr, naryFunction( abs, 1 ) );
* // returns [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
*/
function map2d( arr, fcn, thisArg ) {
	var out;
	var tmp;
	var M;
	var N;
	var a;
	var i;
	var j;

	if ( !isArrayLikeObject( arr ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', arr ) );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fcn ) );
	}
	M = arr.length;
	out = [];
	for ( i = 0; i < M; i++ ) {
		a = arr[ i ];
		if ( !isArrayLikeObject( a ) ) { // note: cannot support the more general "collections" here (which includes typed arrays having more than 2^32-1 elements), as the output array is limited to 2^32-1 elements; thus, we opt for the lowest common denominator: generic arrays
			throw new TypeError( format( 'invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.', i, a ) );
		}
		N = a.length;
		tmp = [];
		for ( j = 0; j < N; j++ ) {
			tmp.push( fcn.call( thisArg, a[ j ], [ i, j ], arr ) );
		}
		out.push( tmp );
	}
	return out;
}


// EXPORTS //

module.exports = map2d;

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
* Applies a function to each nested element in a four-dimensional nested array and assigns the result to a nested element in a new four-dimensional nested array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     -   **arr**: input array.
*
* @param {ArrayLikeObject<ArrayLikeObject>} arr - four-dimensional nested array
* @param {Function} fcn - function to apply
* @param {*} [thisArg] - function execution context
* @throws {TypeError} first argument must be a four-dimensional nested array
* @throws {TypeError} second argument must be a function
* @returns {ArrayArray} four-dimensional nested array
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
*
* var arr = [
*     [ [ [ -1, -2, -3 ] ] ],
*     [ [ [ -4, -5, -6 ] ] ]
* ];
*
* var out = map4d( arr, naryFunction( abs, 1 ) );
* // returns [ [ [ [ 1, 2, 3 ] ] ], [ [ [ 4, 5, 6 ] ] ] ]
*/
function map4d( arr, fcn, thisArg ) {
	var out;
	var t1;
	var t2;
	var t3;
	var a1;
	var a2;
	var a3;
	var S0;
	var S1;
	var S2;
	var S3;
	var i0;
	var i1;
	var i2;
	var i3;

	if ( !isArrayLikeObject( arr ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', arr ) );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fcn ) );
	}
	S0 = arr.length;
	out = [];
	for ( i0 = 0; i0 < S0; i0++ ) {
		a1 = arr[ i0 ];
		if ( !isArrayLikeObject( a1 ) ) { // note: cannot support the more general "collections" here (which includes typed arrays having more than 2^32-1 elements), as the output array is limited to 2^32-1 elements; thus, we opt for the lowest common denominator: generic arrays
			throw new TypeError( format( 'invalid argument. First argument must be a four-dimensional nested array. Index: `%u`. Value: `%s`.', i0, a1 ) );
		}
		S1 = a1.length;
		t1 = [];
		for ( i1 = 0; i1 < S1; i1++ ) {
			a2 = a1[ i1 ];
			if ( !isArrayLikeObject( a2 ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a four-dimensional nested array. Indices: (%u, %u). Value: `%s`.', i0, i1, a2 ) );
			}
			S2 = a2.length;
			t2 = [];
			for ( i2 = 0; i2 < S2; i2++ ) {
				a3 = a2[ i2 ];
				if ( !isArrayLikeObject( a3 ) ) {
					throw new TypeError( format( 'invalid argument. First argument must be a four-dimensional nested array. Indices: (%u, %u, %u). Value: `%s`.', i0, i1, i2, a3 ) );
				}
				S3 = a3.length;
				t3 = [];
				for ( i3 = 0; i3 < S3; i3++ ) {
					t3.push( fcn.call( thisArg, a3[ i3 ], [ i0, i1, i2, i3 ], arr ) ); // eslint-disable-line max-len
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		out.push( t1 );
	}
	return out;
}


// EXPORTS //

module.exports = map4d;

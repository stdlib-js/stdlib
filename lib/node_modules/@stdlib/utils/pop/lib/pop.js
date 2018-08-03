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

var isArray = require( '@stdlib/assert/is-array' );
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isInteger = require( '@stdlib/assert/is-integer' );
var popObject = require( './pop_object.js' );
var popTypedArray = require( './pop_typed_array.js' );


// MAIN //

/**
* Removes and returns the last element of a collection.
*
* @param {(Array|TypedArray|Object)} collection - collection
* @throws {TypeError} must provide either an array, typed array, or an array-like object
* @returns {Array} updated collection and the removed element
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* var out = pop( arr );
* // returns [ [ 1.0, 2.0, 3.0, 4.0 ], 5.0 ]
*
* @example
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* var out = pop( arr );
* // returns [ <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ], 5.0 ]
*/
function pop( collection ) {
	var v;
	if ( isArray( collection ) ) {
		v = collection.pop();
		return [ collection, v ];
	}
	// Check for a typed-array-like object, as verifying actual typed arrays is expensive...
	if ( isTypedArrayLike( collection ) ) {
		return popTypedArray( collection );
	}
	// Check for an array-like object...
	if (
		collection !== null &&
		typeof collection === 'object' &&
		typeof collection.length === 'number' &&
		isInteger( collection.length ) &&
		collection.length >= 0
	) {
		return popObject( collection );
	}
	throw new TypeError( 'invalid argument. Must provide either an Array, Typed Array, or an array-like Object. Value: `'+collection+'`.' );
}


// EXPORTS //

module.exports = pop;

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
var pushArray = require( './push_array.js' );
var pushObject = require( './push_object.js' );
var pushTypedArray = require( './push_typed_array.js' );


// MAIN //

/**
* Adds one or more elements to the end of a collection.
*
* @param {(Array|TypedArray|Object)} collection - collection
* @param {...*} items - items to add
* @throws {TypeError} must provide either an array, typed array, or an array-like object
* @returns {(Array|TypedArray|Object)} updated collection
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* arr = push( arr, 6.0, 7.0 );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* arr = push( arr, 6.0, 7.0 );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
function push( collection ) {
	var items;
	var i;
	items = new Array( arguments.length-1 );
	for ( i = 0; i < arguments.length-1; i++ ) {
		items[ i ] = arguments[ i+1 ];
	}
	if ( isArray( collection ) ) {
		return pushArray( collection, items );
	}
	// Check for a typed-array-like object, as verifying actual typed arrays is expensive...
	if ( isTypedArrayLike( collection ) ) {
		return pushTypedArray( collection, items );
	}
	// Check for an array-like object...
	if (
		collection !== null &&
		typeof collection === 'object' &&
		typeof collection.length === 'number' &&
		isInteger( collection.length ) &&
		collection.length >= 0
	) {
		return pushObject( collection, items );
	}
	throw new TypeError( 'invalid argument. First argument must be either an Array, Typed Array, or an array-like Object. Value: `'+collection+'`.' );
}


// EXPORTS //

module.exports = push;

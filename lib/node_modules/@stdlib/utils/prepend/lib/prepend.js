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
var isCollection = require( '@stdlib/assert/is-collection' );
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isInteger = require( '@stdlib/assert/is-integer' );
var prependArray = require( './prepend_array.js' );
var prependObject = require( './prepend_object.js' );
var prependTypedArray = require( './prepend_typed_array.js' );


// MAIN //

/**
* Adds elements from one collection to the beginning of another collection.
*
* @param {Collection} collection1 - collection
* @param {Collection} collection2 - collection containing elements to add
* @throws {TypeError} first argument must be either an array, typed array, or an array-like object
* @throws {TypeError} second argument must be an array-like object
* @returns {Collection} updated collection
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* arr = prepend( arr, [ 6.0, 7.0 ] );
* // returns [ 6.0, 7.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* arr = prepend( arr, [ 6.0, 7.0 ] );
* // returns <Float64Array>[ 6.0, 7.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function prepend( collection1, collection2 ) {
	if ( !isCollection( collection2 ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array-like object. Value: `'+collection2+'`.' );
	}
	if ( isArray( collection1 ) ) {
		return prependArray( collection1, collection2 );
	}
	// Check for a typed-array-like object, as verifying actual typed arrays is expensive...
	if ( isTypedArrayLike( collection1 ) ) {
		return prependTypedArray( collection1, collection2 );
	}
	// Check for an array-like object...
	if (
		collection1 !== null &&
		typeof collection1 === 'object' &&
		typeof collection1.length === 'number' &&
		isInteger( collection1.length ) &&
		collection1.length >= 0
	) {
		return prependObject( collection1, collection2 );
	}
	throw new TypeError( 'invalid argument. First argument must be either an Array, Typed Array, or an array-like Object. Value: `'+collection1+'`.' );
}


// EXPORTS //

module.exports = prepend;

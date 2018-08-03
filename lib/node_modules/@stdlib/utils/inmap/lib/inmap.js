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

var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Invokes a function once for each element in a collection and updates the collection in-place.
*
* ## Notes
*
* -   The invoked function's return value is cached prior to updating a collection. Before updating the collection, a collection must be inspected to ensure that a collection has not been resized during invocation such that an index no longer has a corresponding element in the collection. Were a return value automatically used to update a collection, an input collection could be converted into a sparse data structure. While some might consider this a feature, here, we take stance that a user should be less clever.
*
*
* @param {Collection} collection - input collection
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a function
* @returns {Collection} input collection
*
* @example
* function scale( value, index, collection ) {
*     return value * index;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = inmap( arr, scale );
* // returns [ 0, 2, 6, 12 ]
*
* var bool = ( out === arr );
* // returns true
*/
function inmap( collection, fcn, thisArg ) {
	var len;
	var v;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+fcn+'`.' );
	}
	len = collection.length;
	for ( i = 0; i < len; i++ ) {
		v = fcn.call( thisArg, collection[ i ], i, collection );

		// Account for dynamically resizing a collection...
		if ( len !== collection.length ) {
			len = collection.length;
		}
		if ( i < len ) {
			collection[ i ] = v;
		}
	}
	return collection;
}


// EXPORTS //

module.exports = inmap;

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
* While a test condition is true, invokes a function once for each element in a collection.
*
* ## Notes
*
* -   The condition is evaluated **after** executing the function to invoke; thus, the provided function **always** executes at least once.
* -   If provided an empty collection, the function invokes the provided function with the collection index set to `undefined`.
*
*
* @param {Collection} collection - input collection
* @param {Function} fcn - function to invoke
* @param {Function} predicate - function which indicates whether to continue iterating over a collection
* @param {*} [thisArg] - execution context for the applied function
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
* @returns {Collection} input collection
*
* @example
* function predicate( v, index, collection ) {
*     return ( v === v );
* }
*
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, 2, 3, 4, NaN, 5 ];
*
* doWhileEach( arr, log, predicate );
*/
function doWhileEach( collection, fcn, predicate, thisArg ) {
	var len;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+fcn+'`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+predicate+'`.' );
	}
	len = collection.length;
	if ( len === 0 ) {
		fcn.call( thisArg, void 0, void 0, collection );
		len = collection.length;
		if ( len === 0 ) {
			return collection;
		}
	}
	i = 0;
	do {
		fcn.call( thisArg, collection[ i ], i, collection );
		i += 1;
		len = collection.length; // ...account for dynamically resizing a collection
	} while (
		i < len &&
		predicate( collection[ i-1 ], i-1, collection )
	);
	return collection;
}


// EXPORTS //

module.exports = doWhileEach;

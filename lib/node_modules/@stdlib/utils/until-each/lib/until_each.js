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
* Until a test condition is true, invokes a function once for each element in a collection.
*
* @param {Collection} collection - input collection
* @param {Function} predicate - function which indicates whether to stop iterating over a collection
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context for the applied function
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
* @returns {Collection} input collection
*
* @example
* function predicate( v, key, collection ) {
*     return ( v !== v );
* }
*
* function log( v, key, collection ) {
*     console.log( '%s: %d', key, v );
* }
*
* var arr = [ 1, 2, 3, 4, NaN, 5 ];
*
* untilEach( arr, predicate, log );
*/
function untilEach( collection, predicate, fcn, thisArg ) {
	var len;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+predicate+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+fcn+'`.' );
	}
	len = collection.length;
	i = 0;
	while (
		i < len &&
		!predicate( collection[ i ], i, collection )
	) {
		fcn.call( thisArg, collection[ i ], i, collection );
		i += 1;
		len = collection.length; // ...account for dynamically resizing a collection
	}
	return collection;
}


// EXPORTS //

module.exports = untilEach;

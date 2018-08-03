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
* Converts a collection to an object whose keys are determined by a provided function and whose values are the collection values.
*
* @param {Collection} collection - input collection
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be a function
* @returns {Object} output object
*
* @example
* function toKey( value, index ) {
*     console.log( '%d: %s', index, JSON.stringify( value ) );
*     return value.name;
* }
*
* var collection = [
*     { 'name': 'beep', 'a': 1 },
*     { 'name': 'boop', 'b': 2 }
* ];
*
* var obj = keyBy( collection, toKey );
* // returns { 'beep': { 'name': 'beep', 'a': 1 }, 'boop': { 'name': 'boop', 'b': 2 } }
*/
function keyBy( collection, fcn, thisArg ) {
	var out;
	var len;
	var key;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+fcn+'`.' );
	}
	len = collection.length;
	out = {};
	for ( i = 0; i < len; i++ ) {
		key = fcn.call( thisArg, collection[ i ], i );
		out[ key ] = collection[ i ];
	}
	return out;
}


// EXPORTS //

module.exports = keyBy;

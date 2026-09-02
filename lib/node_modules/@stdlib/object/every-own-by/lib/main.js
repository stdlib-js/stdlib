/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Tests whether all own elements in a collection pass a test implemented by a predicate function.
*
* @param {Object} obj - input object
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be a function
* @returns {boolean} boolean indicating whether all own elements pass a test
*
* @example
* function isPositive( v ) {
*     return ( v > 0 );
* }
*
* var obj = {
*     'a': 1,
*     'b': 2,
*     'c': 3
* };
*
* var bool = everyOwnBy( obj, isPositive );
* // returns true
*/
function everyOwnBy( obj, predicate, thisArg ) {
	var key;
	if ( !isObject( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', predicate ) );
	}

	for ( key in obj ) {
		if ( hasOwnProp( obj, key ) ) {
			if ( !predicate.call( thisArg, obj[ key ], key, obj ) ) {
				return false;
			}
		}
	}
	return true;
}


// EXPORTS //

module.exports = everyOwnBy;

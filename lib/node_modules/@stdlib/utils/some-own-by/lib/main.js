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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Tests whether some own properties of a provided object satisfy a predicate function.
*
* @param {Object} obj - input object
* @param {PositiveInteger} n - number of properties
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be a positive integer
* @throws {TypeError} third argument must be a function
* @returns {boolean} boolean indicating whether an object contains at least `n` properties which pass a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var obj = { a: 1, b: 2, c: -3, d: 4, e: -1 };
*
* var bool = someOwnBy( obj, 2, isNegative );
* // returns true
*/
function someOwnBy( obj, n, predicate, thisArg ) {
	var count;
	var out;
	var key;
	if ( !isObject( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', n ) );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', predicate ) );
	}
	count = 0;
	for ( key in obj ) {
		if ( hasOwnProp( obj, key ) ) {
			out = predicate.call( thisArg, obj[ key ], key, obj );
			if ( out ) {
				count += 1;
				if ( count === n ) {
					return true;
				}
			}
		}
	}
	return false;
}


// EXPORTS //

module.exports = someOwnBy;

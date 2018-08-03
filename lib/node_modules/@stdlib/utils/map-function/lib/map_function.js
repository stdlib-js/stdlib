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

var isFunction = require( '@stdlib/assert/is-function' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Invokes a function `n` times and returns an array of accumulated function return values.
*
* @param {Function} fcn - function to invoke
* @param {NonNegativeInteger} n - number of function invocations
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {Array} accumulated results
*
* @example
* function fcn( i ) {
*     return i;
* }
*
* var arr = mapFun( fcn, 5 );
* // returns [ 0, 1, 2, 3, 4 ]
*/
function mapFun( fcn, n, thisArg ) {
	var out;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+fcn+'`.' );
	}
	if ( !isNonNegativeInteger( n ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `'+n+'`.' );
	}
	// Note: we explicitly do not preallocate in order to ensure "fast" elements for large output arrays.
	out = [];
	for ( i = 0; i < n; i++ ) {
		out.push( fcn.call( thisArg, i ) );
	}
	return out;
}


// EXPORTS //

module.exports = mapFun;

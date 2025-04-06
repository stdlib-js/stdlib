/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a thunk.
*
* @param {Function} fcn - function to convert to a thunk
* @param {...*} [args] - function arguments
* @throws {TypeError} first argument must be a function
* @returns {Function} thunk
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
*
* var f = thunk( add, 2, 3 );
* // returns <Function>
*
* // ...
*
* // Evaluate the thunk:
* var v = f();
* // returns 5
*/
function thunk( fcn ) {
	var args;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	args = [];
	for ( i = 1; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	// NOTE: we return an anonymous function to satisfy the definition of a thunk (i.e., an anonymous function which has no parameters of its own and wraps another function)...
	return function () { // eslint-disable-line no-restricted-syntax, func-names
		return fcn.apply( null, args );
	};
}


// EXPORTS //

module.exports = thunk;

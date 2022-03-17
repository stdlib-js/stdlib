/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns a function that applies arguments to a provided function according to a predicate function.
*
* ## Notes
*
-   The predicate function is provided the following arguments:
*
*     -   **value**: argument value.
*     -   **index**: argument index.
*
* -   Only those arguments in which the predicate function returns a falsy value are applied to a provided function.
*
* @param {Function} fcn - input function
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @returns {Function} wrapped function
*
* @example
* function foo( a, b ) {
*     return [ a, b ];
* }
*
* function predicate( v ) {
*     return ( v === 2 );
* }
*
* var bar = rejectArguments( foo, predicate );
*
* var out = bar( 1, 2, 3 );
* // returns [ 1, 3 ]
*/
function rejectArguments( fcn, predicate, thisArg ) {
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', predicate ) );
	}
	return wrap;

	/**
	* Invokes a function according to a predicate function.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function wrap() {
		var args;
		var v;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			v = arguments[ i ];
			if ( !predicate( v, i ) ) {
				args.push( v );
			}
		}
		return fcn.apply( thisArg, args );
	}
}


// EXPORTS //

module.exports = rejectArguments;

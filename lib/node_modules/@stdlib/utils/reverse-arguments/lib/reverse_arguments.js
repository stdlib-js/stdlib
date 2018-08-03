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


// MAIN //

/**
* Returns a function that invokes a provided function with arguments in reverse order.
*
* @param {Function} fcn - input function
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be a function
* @returns {Function} reverse arguments function
*
* @example
* function foo( a, b, c ) {
*     return [ a, b, c ];
* }
*
* var bar = reverseArguments( foo );
*
* var out = bar( 1, 2, 3 );
* // returns [ 3, 2, 1 ]
*/
function reverseArguments( fcn, thisArg ) {
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+fcn+'`.' );
	}
	return reversed;

	/**
	* Invokes a function with arguments in reverse order.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function reversed() {
		var args;
		var len;
		var i;

		len = arguments.length;
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ len-1-i ] = arguments[ i ];
		}
		return fcn.apply( thisArg, args );
	}
}


// EXPORTS //

module.exports = reverseArguments;

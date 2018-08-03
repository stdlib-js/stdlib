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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Transforms a function into a sequence of functions each accepting a single argument.
*
* @param {Function} fcn - function to curry
* @param {PositiveInteger} [arity=fcn.length] - number of parameters
* @param {*} [thisArg] - evaluation context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} `arity` argument must be a positive integer
* @returns {Function} curry function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var f = curry( add );
*
* var sum = f( 2 )( 3 );
* // returns 5
*/
function curry( fcn, arity, thisArg ) {
	var context;
	var len;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( arguments.length < 2 ) {
		len = fcn.length;
	}
	else if ( arguments.length > 2 ) {
		len = arity;
		context = thisArg;
		if ( !isPositiveInteger( len ) ) {
			throw new TypeError( 'invalid argument. Arity argument must be positive integer. Value: `' + len + '`.' );
		}
	}
	else if ( isPositiveInteger( arity ) ) {
		len = arity;
	}
	else {
		len = fcn.length;
		context = arity;
	}
	return createCurried( [] );

	/**
	* Returns a curry function.
	*
	* @private
	* @param {Array} args - arguments
	* @returns {Function} curry function
	*/
	function createCurried( args ) {
		return curried;

		/**
		* Curry function.
		*
		* @private
		* @param {*} v - curried function parameter
		* @returns {(Function|*)} partially applied curry function or curried function result
		*/
		function curried( v ) {
			var cargs = args.slice();
			cargs.push( v );
			if ( cargs.length < len ) {
				return createCurried( cargs );
			}
			return fcn.apply( context, cargs );
		}
	}
}


// EXPORTS //

module.exports = curry;

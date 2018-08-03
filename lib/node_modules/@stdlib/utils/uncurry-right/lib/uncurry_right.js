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
* Transforms a curried function into a function invoked with multiple arguments.
*
* @param {Function} fcn - curried function
* @param {PositiveInteger} [arity] - number of parameters
* @param {*} [thisArg] - evaluation context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} `arity` argument must be a positive integer
* @returns {Function} uncurried function
*
* @example
* function addX( x ) {
*     return function addY( y ) {
*         return x + y;
*     };
* }
*
* var add = uncurryRight( addX );
*
* var sum = add( 3, 2 );
* // returns 5
*/
function uncurryRight( fcn, arity, thisArg ) {
	var context;
	var len;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+fcn+'`.' );
	}
	if ( arguments.length < 2 ) {
		len = null;
	}
	else if ( arguments.length > 2 ) {
		len = arity;
		context = thisArg;
		if ( !isPositiveInteger( len ) ) {
			throw new TypeError( 'invalid argument. Arity argument must be a positive integer. Value: `'+len+'`.' );
		}
	}
	else if ( isPositiveInteger( arity ) ) {
		len = arity;
	}
	else {
		len = null;
		context = arity;
	}
	return uncurried;

	/**
	* Uncurried function.
	*
	* @private
	* @param {...*} args - arguments
	* @throws {Error} if arity is set, must provide expected number of input arguments
	* @throws {Error} configured arity must be compatible with curried function
	* @throws {Error} if arity is not set, number of arguments must be compatible with curried function
	* @returns {*} function result
	*/
	function uncurried() {
		var f;
		var i;

		f = fcn;
		if ( len ) {
			if ( len > arguments.length ) {
				throw new Error( 'insufficient input arguments. Expected '+len+' argument(s) and only received '+arguments.length+' argument(s).' );
			}
			for ( i = len-1; i >= 0; i-- ) {
				if ( isFunction( f ) ) {
					f = f.call( context, arguments[ i ] );
				} else {
					throw new Error( 'invalid invocation. The configured arity exceeds the number of possible curried function invocations. Expected: '+len+'. Actual: '+i+'.' );
				}
			}
			return f;
		}
		for ( i = arguments.length-1; i >= 0; i-- ) {
			if ( isFunction( f ) ) {
				f = f.call( context, arguments[ i ] );
			} else {
				throw new Error( 'invalid invocation. Number of arguments exceeds the number of possible curried function invocations. Expected: '+arguments.length+'. Actual: '+i+'.' );
			}
		}
		return f;
	}
}


// EXPORTS //

module.exports = uncurryRight;

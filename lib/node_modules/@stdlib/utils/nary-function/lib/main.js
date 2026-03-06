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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a function that applies a specified number of arguments to a provided function.
*
* ## Notes
*
* -   The returned function **always** invokes the wrapped function with a specified number of arguments, even when the returned function is provided fewer arguments. The value for the missing arguments is equal to `undefined`.
*
* @param {Function} fcn - input function
* @param {NonNegativeInteger} arity - number of arguments
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {Function} function wrapper
*
* @example
* function foo() {
*     var s;
*     var i;
*
*     s = 0;
*     for ( i = 0; i < arguments.length; i++ ) {
*         s += arguments[ i ];
*     }
*     return s;
* }
*
* var bar = naryFunction( foo, 2 );
*
* var out = bar( 1, 2, 3, 4, 5, 6 );
* // returns 3
*/
function naryFunction( fcn, arity, thisArg ) {
	var fcns;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isNonNegativeInteger( arity ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', arity ) );
	}
	fcns = [ nullary, unary, binary, ternary, quaternary, quinary ];
	return ( arity < fcns.length ) ? fcns[ arity ] : nary;

	/**
	* Invokes a nullary function.
	*
	* @private
	* @param {...*} [args] - arguments
	* @returns {*} return value
	*/
	function nullary() {
		return fcn.call( thisArg );
	}

	/**
	* Invokes a unary function.
	*
	* @private
	* @param {*} x - input value
	* @param {...*} [args] - arguments
	* @returns {*} return value
	*/
	function unary( x ) {
		return fcn.call( thisArg, x );
	}

	/**
	* Invokes a binary function.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {...*} [args] - arguments
	* @returns {*} return value
	*/
	function binary( x, y ) {
		return fcn.call( thisArg, x, y );
	}

	/**
	* Invokes a ternary function.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @param {...*} [args] - arguments
	* @returns {*} return value
	*/
	function ternary( x, y, z ) {
		return fcn.call( thisArg, x, y, z );
	}

	/**
	* Invokes a quaternary function.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @param {*} w - input value
	* @param {...*} [args] - arguments
	* @returns {*} return value
	*/
	function quaternary( x, y, z, w ) {
		return fcn.call( thisArg, x, y, z, w );
	}

	/**
	* Invokes a quinary function.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @param {*} w - input value
	* @param {*} v - input value
	* @param {...*} [args] - arguments
	* @returns {*} return value
	*/
	function quinary( x, y, z, w, v ) {
		return fcn.call( thisArg, x, y, z, w, v );
	}

	/**
	* Invokes an n-ary function.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @param {*} z - input value
	* @param {*} w - input value
	* @param {*} v - input value
	* @param {*} t - input value
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function nary( x, y, z, w, v, t ) {
		var args;
		var i;

		args = [ x, y, z, w, v, t ];
		for ( i = 6; i < arity; i++ ) {
			args.push( arguments[ i ] );
		}
		return fcn.apply( thisArg, args );
	}
}


// EXPORTS //

module.exports = naryFunction;

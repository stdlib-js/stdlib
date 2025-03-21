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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Applies provided arguments to a function and passes the result to another function.
*
* @private
* @param {Function} fcn - function
* @param {Array} args - function arguments
* @param {Function} after - function to invoke with the result of `fcn`
* @param {*} thisArg - evaluation context for `after`
* @returns {*} result
*/
function apply( fcn, args, after, thisArg ) {
	var r1 = fcn.apply( null, args );
	var r2 = after.call( thisArg, r1 );
	return ( r2 === void 0 ) ? r1 : r2;
}


// MAIN //

/**
* Decorates a provided function such that the function's return value is provided as an argument to another function.
*
* @param {Function} fcn - function to decorate
* @param {NonNegativeInteger} arity - number of parameters
* @param {Function} after - function to invoke with the result of the decorated function
* @param {*} [thisArg] - evaluation context for `after`
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a function
* @returns {Function} decorator
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function negate( v ) {
*     return -v;
* }
*
* var f = decorateAfter( abs, 1, negate );
* // returns <Function>
*
* var v = f( -5 );
* // returns -5
*
* v = f( 5 );
* // returns -5
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function log( v ) {
*     console.log( v );
* }
*
* var f = decorateAfter( abs, 1, log );
* // returns <Function>
*
* var v = f( -5 );
* // returns 5
*
* v = f( 5 );
* // returns 5
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function counter() {
*     this.count += 1;
* }
*
* var ctx = {
*     'count': 0
* };
*
* var f = decorateAfter( abs, 1, counter, ctx );
* // returns <Function>
*
* var v = f( -5 );
* // returns 5
*
* v = f( 5 );
* // returns 5
*
* var count = ctx.count;
* // returns 2
*/
function decorateAfter( fcn, arity, after, thisArg ) {
	var fcns;
	var f;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isFunction( after ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', after ) );
	}
	// NOTE: we select a specific signature so that `fcn.length` is preserved, thus matching the definition of a "decorator" where the decorator function should be transparent to external clients (i.e., have a matching signature). While more recent JavaScript environments allow `Function.prototype.length` to be configurable, older environments do not and error when attempting to manually specify the value for a function's length. We cap support for matching signature length as signatures with many parameters are likely to be exceedingly rare, especially when used in conjunction with this API...
	fcns = [ fN, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10 ];
	if ( !isNonNegativeInteger( arity ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', arity ) );
	}
	if ( arity < fcns.length ) {
		f = fcns[ arity ];
	} else {
		f = fN;
	}
	return f;

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {...*} [args] - arguments
	* @returns {*} result
	*/
	function fN() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @returns {*} result
	*/
	function f1( x0 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		// NOTE: the use of a `for` loop is intentional (both here and below), as JavaScript does not require that only a fixed number of arguments be provided; the number of provided arguments may be more or less than the signature specifies.

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @returns {*} result
	*/
	function f2( x0, x1 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @returns {*} result
	*/
	function f3( x0, x1, x2 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @returns {*} result
	*/
	function f4( x0, x1, x2, x3 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @param {*} x4 - fifth argument
	* @returns {*} result
	*/
	function f5( x0, x1, x2, x3, x4 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @param {*} x4 - fifth argument
	* @param {*} x5 - sixth argument
	* @returns {*} result
	*/
	function f6( x0, x1, x2, x3, x4, x5 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @param {*} x4 - fifth argument
	* @param {*} x5 - sixth argument
	* @param {*} x6 - seventh argument
	* @returns {*} result
	*/
	function f7( x0, x1, x2, x3, x4, x5, x6 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @param {*} x4 - fifth argument
	* @param {*} x5 - sixth argument
	* @param {*} x6 - seventh argument
	* @param {*} x7 - eighth argument
	* @returns {*} result
	*/
	function f8( x0, x1, x2, x3, x4, x5, x6, x7 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @param {*} x4 - fifth argument
	* @param {*} x5 - sixth argument
	* @param {*} x6 - seventh argument
	* @param {*} x7 - eighth argument
	* @param {*} x8 - ninth argument
	* @returns {*} result
	*/
	function f9( x0, x1, x2, x3, x4, x5, x6, x7, x8 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}

	/**
	* Evaluates a function and passes the result to another function.
	*
	* @private
	* @param {*} x0 - first argument
	* @param {*} x1 - second argument
	* @param {*} x2 - third argument
	* @param {*} x3 - fourth argument
	* @param {*} x4 - fifth argument
	* @param {*} x5 - sixth argument
	* @param {*} x6 - seventh argument
	* @param {*} x7 - eighth argument
	* @param {*} x8 - ninth argument
	* @param {*} x9 - tenth argument
	* @returns {*} result
	*/
	function f10( x0, x1, x2, x3, x4, x5, x6, x7, x8, x9 ) { // eslint-disable-line no-unused-vars
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return apply( fcn, args, after, thisArg );
	}
}


// EXPORTS //

module.exports = decorateAfter;

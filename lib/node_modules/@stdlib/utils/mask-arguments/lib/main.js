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
var isCollection = require( '@stdlib/assert/is-collection' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a function that applies arguments to a provided function according to a specified mask.
*
* ## Notes
*
* -   Only those arguments having a truthy mask value are applied to a provided function.
*
* @param {Function} fcn - input function
* @param {Collection} mask - argument mask
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a collection
* @returns {Function} masked function
*
* @example
* function foo( a, b ) {
*     return [ a, b ];
* }
*
* var bar = maskArguments( foo, [ 1, 0, 1 ] );
*
* var out = bar( 1, 2, 3 );
* // returns [ 1, 3 ]
*/
function maskArguments( fcn, mask, thisArg ) {
	var fcns;
	var idx;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isCollection( mask ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', mask ) );
	}
	idx = [];
	for ( i = 0; i < mask.length; i++ ) {
		if ( mask[ i ] ) {
			idx.push( i );
		}
	}
	fcns = [ nullary, unary, binary, ternary, quaternary, quinary ];
	return ( idx.length < fcns.length ) ? fcns[ idx.length ] : nary;

	/**
	* Invokes a nullary function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function nullary() {
		return fcn.call( thisArg );
	}

	/**
	* Invokes a unary function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function unary() {
		return fcn.call( thisArg, arguments[ idx[0] ] );
	}

	/**
	* Invokes a binary function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function binary() {
		return fcn.call( thisArg, arguments[ idx[0] ], arguments[ idx[1] ] );
	}

	/**
	* Invokes a ternary function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function ternary() {
		return fcn.call( thisArg, arguments[ idx[0] ], arguments[ idx[1] ], arguments[ idx[2] ] ); // eslint-disable-line max-len
	}

	/**
	* Invokes a quaternary function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function quaternary() {
		return fcn.call( thisArg, arguments[ idx[0] ], arguments[ idx[1] ], arguments[ idx[2] ], arguments[ idx[3] ] ); // eslint-disable-line max-len
	}

	/**
	* Invokes a quinary function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function quinary() {
		return fcn.call( thisArg, arguments[ idx[0] ], arguments[ idx[1] ], arguments[ idx[2] ], arguments[ idx[3] ], arguments[ idx[4] ] ); // eslint-disable-line max-len
	}

	/**
	* Invokes a function according to an argument mask.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function nary() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ idx[i] ] );
		}
		return fcn.apply( thisArg, args );
	}
}


// EXPORTS //

module.exports = maskArguments;

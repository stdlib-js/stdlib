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
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' );


// MAIN //

/**
* Returns a function that invokes a provided function with reordered arguments.
*
* @param {Function} fcn - input function
* @param {NonNegativeIntegerArray} indices - argument indices
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be an array of nonnegative integers
* @returns {Function} function with reordered arguments
*
* @example
* function foo( a, b, c ) {
*     return [ a, b, c ];
* }
*
* var bar = reorderArguments( foo, [ 2, 0, 1 ] );
*
* var out = bar( 1, 2, 3 );
* // returns [ 3, 1, 2 ]
*/
function reorderArguments( fcn, indices, thisArg ) {
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+fcn+'`.' );
	}
	if ( !isNonNegativeIntegerArray( indices ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array containing only nonnegative integers. Value: `'+indices+'`.' );
	}
	return reordered;

	/**
	* Invokes a function with reordered arguments.
	*
	* @private
	* @param {...*} args - arguments
	* @throws {Error} must provide expected number of input arguments
	* @returns {*} return value
	*/
	function reordered() {
		var args;
		var len;
		var i;

		len = arguments.length;
		if ( len !== indices.length ) {
			throw new Error( 'invalid invocation. Unexpected number of input arguments. Expected: '+indices.length+'. Actual: '+len+'.' );
		}
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ indices[i] ];
		}
		return fcn.apply( thisArg, args );
	}
}


// EXPORTS //

module.exports = reorderArguments;

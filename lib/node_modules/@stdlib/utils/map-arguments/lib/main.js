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
* Returns a function that applies arguments to a provided function after transforming arguments according to a callback function.
*
* ## Notes
*
-   The callback function is provided the following arguments:
*
*     -   **value**: argument value.
*     -   **index**: argument index.
*
* @param {Function} fcn - input function
* @param {Function} clbk - callback function
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @returns {Function} wrapped function
*
* @example
* function foo( a, b, c ) {
*     return [ a, b, c ];
* }
*
* function clbk( v ) {
*     return v * 2;
* }
*
* var bar = mapArguments( foo, clbk );
*
* var out = bar( 1, 2, 3 );
* // returns [ 2, 4, 6 ]
*/
function mapArguments( fcn, clbk, thisArg ) {
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
	}
	return wrap;

	/**
	* Invokes a function after transforming arguments according to a callback function.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} return value
	*/
	function wrap() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( clbk( arguments[ i ], i ) ); // eslint-disable-line node/callback-return
		}
		return fcn.apply( thisArg, args );
	}
}


// EXPORTS //

module.exports = mapArguments;

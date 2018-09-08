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
* Returns a function of smaller arity by partially applying arguments.
*
* @param {Function} fcn - function to partially apply
* @param {...*} [args] - arguments to partially apply
* @throws {TypeError} first argument must be a function
* @returns {Function} partially applied function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var add2 = papply( add, 2 );
*
* var sum = add2( 3 );
* // returns 5
*/
function papply( fcn ) {
	var pargs;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	pargs = new Array( arguments.length-1 );
	for ( i = 1; i < arguments.length; i++ ) {
		pargs[ i-1 ] = arguments[ i ];
	}
	return papplied;

	/**
	* Partially applied function.
	*
	* @private
	* @param {...*} [args] - function arguments
	* @returns {*} partially applied function result
	*/
	function papplied() {
		var args;
		var j;
		args = pargs.slice();
		for ( j = 0; j < arguments.length; j++ ) {
			args.push( arguments[ j ] );
		}
		return fcn.apply( null, args );
	}
}


// EXPORTS //

module.exports = papply;

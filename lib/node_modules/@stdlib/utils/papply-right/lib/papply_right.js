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
* Returns a function of smaller arity by partially applying arguments from the right.
*
* @param {Function} fcn - function to partially apply
* @param {...*} [args] - arguments to partially apply
* @throws {TypeError} first argument must be a function
* @returns {Function} partially applied function
*
* @example
* function say( text, name ) {
*     return text + ', ' + name + '.';
* }
*
* var toGrace = papplyRight( say, 'Grace Hopper' );
*
* var str = toGrace( 'Hello' );
* // returns 'Hello, Grace Hopper.'
*
* str = toGrace( 'Thank you' );
* // returns 'Thank you, Grace Hopper.'
*/
function papplyRight( fcn ) {
	var pargs;
	var len;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	len = arguments.length - 1;
	pargs = new Array( len );
	for ( i = 1; i < arguments.length; i++ ) {
		pargs[ i-1 ] = arguments[ i ];
	}
	return pappliedRight;

	/**
	* Partially applied function.
	*
	* @private
	* @param {...*} [args] - function arguments
	* @returns {*} partially applied function result
	*/
	function pappliedRight() {
		var nargs;
		var args;
		var j;
		nargs = arguments.length;
		args = new Array( len+nargs );
		for ( j = 0; j < args.length; j++ ) {
			if ( j >= nargs ) {
				args[ j ] = pargs[ j-nargs ];
			} else {
				args[ j ] = arguments[ j ];
			}
		}
		return fcn.apply( null, args );
	}
}


// EXPORTS //

module.exports = papplyRight;

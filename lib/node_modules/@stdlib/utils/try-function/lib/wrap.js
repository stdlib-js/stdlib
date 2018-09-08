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
var isError = require( '@stdlib/assert/is-error' );


// MAIN //

/**
* Wraps a function in a try/catch block.
*
* @param {Function} fcn - function to wrap
* @param {*} [thisArg] - function context
* @throws {TypeError} must provide a function
* @returns {Function} wrapped function
*
* @example
* function fcn() {
*     throw new Error( 'beep boop' );
* }
*
* var f = wrap( fcn );
*
* var out = f();
* if ( out instanceof Error ) {
*     console.error( out.message );
*     // => 'beep boop'
* }
*/
function wrap( fcn, thisArg ) {
	var ctx;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Must provide a function. Value: `' + fcn + '`.' );
	}
	if ( arguments.length > 1 ) {
		ctx = thisArg;
	} else {
		ctx = null;
	}
	return wrapped;

	/**
	* Wrapped function.
	*
	* @private
	* @param {...*} [args] - function arguments
	* @returns {*|Error} returned value or an error object
	*/
	function wrapped() {
		var args;
		var len;
		var i;

		len = arguments.length;
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}
		try {
			return fcn.apply( ctx, args );
		} catch ( error ) {
			if ( isError( error ) ) {
				return error;
			}
			// Handle thrown literals...
			if ( typeof error === 'object' ) {
				return new Error( JSON.stringify( error ) );
			}
			return new Error( error.toString() );
		}
	}
}


// EXPORTS //

module.exports = wrap;

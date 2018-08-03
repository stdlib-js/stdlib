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
* If a function does not return an error, invokes a callback with the function result; otherwise, invokes a second function `y`.
*
* @param {Function} x - function to invoke
* @param {Function} y - function to invoke if `x` returns an error
* @param {Function} done - callback to invoke upon completion
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @throws {TypeError} last argument must be a function
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
*
* function x( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         if ( randu() > 0.5 ) {
*             return clbk( null, 1.0 );
*         }
*         clbk( new Error( 'beep' ) );
*     }
* }
*
* function y( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, -1.0 );
*     }
* }
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
*
* trythenAsync( x, y, done );
*/
function trythenAsync( x, y, done ) {
	if ( !isFunction( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+x+'`.' );
	}
	if ( !isFunction( y ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+y+'`.' );
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
	}
	x( clbk1 );

	/**
	* Callback invoked by `x`.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {...*} args - function results
	* @returns {void}
	*/
	function clbk1( error ) {
		var nargs;
		var args;
		var i;
		if ( error ) {
			if ( y.length === 1 ) {
				return y( clbk2 );
			}
			return y( error, clbk2 );
		}
		nargs = arguments.length;
		args = new Array( nargs );
		args[ 0 ] = null;
		for ( i = 1; i < nargs; i++ ) {
			args[ i ] = arguments[ i ];
		}
		return done.apply( null, args );
	}

	/**
	* Callback invoked by `y`.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {...*} args - function results
	* @returns {void}
	*/
	function clbk2( error ) {
		var nargs;
		var args;
		var i;
		if ( error ) {
			return done( error );
		}
		nargs = arguments.length;
		args = new Array( nargs );
		args[ 0 ] = null;
		for ( i = 1; i < nargs; i++ ) {
			args[ i ] = arguments[ i ];
		}
		return done.apply( null, args );
	}
}


// EXPORTS //

module.exports = trythenAsync;

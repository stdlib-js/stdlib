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
* If a predicate function returns a truthy value, invokes `x`; otherwise, invokes `y`.
*
* @param {Function} predicate - predicate function
* @param {Function} x - function to invoke if a condition is truthy
* @param {Function} y - function to invoke if a condition is falsy
* @param {Function} done - callback to invoke upon completion
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
* @throws {TypeError} last argument must be a function
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
*
* function predicate( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, randu() > 0.5 );
*     }
* }
*
* function x( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, 1.0 );
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
* ifthenAsync( predicate, x, y, done );
*/
function ifthenAsync( predicate, x, y, done ) {
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+predicate+'`.' );
	}
	if ( !isFunction( x ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+x+'`.' );
	}
	if ( !isFunction( y ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+y+'`.' );
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
	}
	predicate( clbk1 );

	/**
	* Callback invoked by a predicate function.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - condition
	* @returns {void}
	*/
	function clbk1( error, bool ) {
		if ( error ) {
			return done( error );
		}
		if ( bool ) {
			return x( clbk2 );
		}
		y( clbk2 );
	}

	/**
	* Callback invoked by either `x` or `y`.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {...*} args - results
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
		done.apply( null, args );
	}
}


// EXPORTS //

module.exports = ifthenAsync;

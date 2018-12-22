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
* If a function does not return an error, invokes a callback with the function result; otherwise, invokes a callback with a value `y`.
*
* @param {Function} x - function to invoke
* @param {*} y - value to return if `x` returns an error
* @param {Function} done - callback to invoke upon completion
* @throws {TypeError} first argument must be a function
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
* function done( error, result ) {
*     if ( error ) {
*         console.log( error.message );
*     }
*     console.log( result );
* }
*
* trycatchAsync( x, -1.0, done );
*/
function trycatchAsync( x, y, done ) {
	if ( !isFunction( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+x+'`.' );
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
	}
	x( clbk );

	/**
	* Callback invoked by `x`.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {*} result - result
	* @returns {void}
	*/
	function clbk( error, result ) {
		if ( error ) {
			return done( error, y );
		}
		done( null, result );
	}
}


// EXPORTS //

module.exports = trycatchAsync;

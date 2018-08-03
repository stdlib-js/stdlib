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
* If a predicate function returns a truthy value, returns `x`; otherwise, returns `y`.
*
* @param {Function} predicate - predicate function
* @param {*} x - value to return if a condition is truthy
* @param {*} y - value to return if a condition is falsy
* @param {Function} done - callback to invoke upon completion
* @throws {TypeError} first argument must be a function
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
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
* ifelseAsync( predicate, 1.0, -1.0, done );
*/
function ifelseAsync( predicate, x, y, done ) {
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+predicate+'`.' );
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
	}
	predicate( clbk );

	/**
	* Callback invoked by a predicate function.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - condition
	* @returns {void}
	*/
	function clbk( error, bool ) {
		if ( error ) {
			return done( error );
		}
		if ( bool ) {
			return done( null, x );
		}
		done( null, y );
	}
}


// EXPORTS //

module.exports = ifelseAsync;

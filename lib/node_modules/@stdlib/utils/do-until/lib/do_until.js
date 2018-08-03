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
* Invokes a function until a test condition is true.
*
* @param {Function} fcn - function to invoke
* @param {Function} predicate - function which indicates whether to stop invoking a function
* @param {*} [thisArg] - execution context for the invoked function
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
*
* @example
* function predicate( i ) {
*     return ( i <= 5 );
* }
*
* function beep( i ) {
*     console.log( 'beep: %d', i );
* }
*
* doUntil( beep, predicate );
*/
function doUntil( fcn, predicate, thisArg ) {
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+fcn+'`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+predicate+'`.' );
	}
	i = 0;
	do {
		fcn.call( thisArg, i );
		i += 1;
	} while ( !predicate( i ) );
}


// EXPORTS //

module.exports = doUntil;

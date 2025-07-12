/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var factory = require( './factory.js' );


// MAIN //

/**
* Executes a set of functions in parallel.
*
* @param {FunctionArray} fcns - array of functions
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {Callback} done - function to invoke upon completion
* @throws {TypeError} first argument must be an array of functions
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
* @returns {void}
*
* @example
* var parallel = require( '@stdlib/utils/async/parallel' );
*
* function foo( resolve ) {
*     setTimeout( onTimeout, 300 );
*     function onTimeout() {
*         resolve( null, 'one' );
*     }
* }
*
* function bar( resolve ) {
*     setTimeout( onTimeout, 100 );
*     function onTimeout() {
*         resolve( null, 'two' );
*     }
* }
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results );
*     // => [ 'one', 'two' ]
* }
*
* var fcns = [ foo, bar ];
*
* parallel( fcns, done );
*/
function parallel( fcns, options, done ) {
	if ( arguments.length < 3 ) {
		return factory( fcns )( options );
	}
	factory( fcns, options )( done );
}


// EXPORTS //

module.exports = parallel;

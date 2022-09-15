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

var factory = require( './factory.js' );


// MAIN //

/**
* Invokes a function once for each element in a collection and updates a collection in-place.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling. Note, however, that the function may have mutated an input collection during prior invocations, resulting in a partially mutated collection.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param {Collection} collection - input collection
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection
* @param {Function} fcn - function to invoke for each element in a collection
* @param {Callback} done - function to invoke upon completion
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} second-to-last argument must be a function
* @throws {TypeError} last argument must be a function
* @returns {void}
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results );
* }
*
* function read( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error, data ) {
*         if ( error ) {
*             return next( error );
*         }
*         next( null, data );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* inmapAsync( files, read, done );
*/
function inmapAsync( collection, options, fcn, done ) {
	if ( arguments.length < 4 ) {
		return factory( options )( collection, fcn );
	}
	factory( options, fcn )( collection, done );
}


// EXPORTS //

module.exports = inmapAsync;

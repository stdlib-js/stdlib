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
* Maps keys from one object to a new object having the same values.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
* -   Iteration and insertion order are **not** guaranteed.
* -   The function only operates on own properties, not inherited properties.
*
*
* @param {Object} obj - source object
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property
* @param {Function} transform - transform function
* @param {Callback} done - function to invoke upon completion
* @throws {TypeError} first argument must be an object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} second-to-last argument must be a function
* @throws {TypeError} last argument must be a function
* @returns {void}
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
*
* function read( key, value, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( value, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, key+':unreadable' );
*         }
*         next( null, key+':readable' );
*     }
* }
*
* // Define a callback which handles errors:
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
* }
*
* // Create a dictionary of file names:
* var files = {
*     'file1': './beep.js',
*     'file2': './boop.js'
* };
*
* var opts = {
*     'series': true
* };
*
* // Process each file in `files`:
* mapKeysAsync( files, opts, read, done );
*/
function mapKeysAsync( obj, options, transform, done ) {
	if ( arguments.length < 4 ) {
		return factory( options )( obj, transform );
	}
	factory( options, transform )( obj, done );
}


// EXPORTS //

module.exports = mapKeysAsync;

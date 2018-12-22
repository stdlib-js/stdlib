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
* Groups values according to an indicator function.
*
* ## Notes
*
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param {Collection} collection - input collection
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection
* @param {string} [options.returns="values"] - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned
* @param {Function} indicator - indicator function specifying which group an element in the input collection belongs to
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
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
*
* function indicator( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, 'nonreadable' );
*         }
*         next( null, 'readable' );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* groupByAsync( files, indicator, done );
*/
function groupByAsync( collection, options, indicator, done ) {
	if ( arguments.length < 4 ) {
		return factory( options )( collection, indicator );
	}
	factory( options, indicator )( collection, done );
}


// EXPORTS //

module.exports = groupByAsync;

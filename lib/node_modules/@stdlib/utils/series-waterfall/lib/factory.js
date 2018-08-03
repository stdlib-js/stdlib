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

var isFunctionArray = require( '@stdlib/assert/is-function-array' );
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Returns a reusable waterfall function.
*
* @param {FunctionArray} fcns - array of functions
* @param {Callback} clbk - callback to invoke upon completion
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be an array of functions
* @throws {TypeError} second argument must be a function
* @returns {Function} waterfall function
*
* @example
* function foo( next ) {
*     next( null, 'beep' );
* }
*
* function bar( str, next ) {
*     console.log( str );
*     // => 'beep'
*
*     next();
* }
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* var fcns = [ foo, bar ];
*
* var waterfall = factory( fcns, done );
*
* waterfall();
* waterfall();
* waterfall();
*/
function factory( fcns, clbk, thisArg ) {
	if ( !isFunctionArray( fcns ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function array. Value: `' + fcns + '`.' );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + clbk + '`.' );
	}
	return waterfall;

	/**
	* Executes functions in series, passing the results of one function as arguments to the next function.
	*
	* @private
	*/
	function waterfall() {
		var idx = -1;
		next(); // eslint-disable-line callback-return

		/**
		* Executes the next function in the series.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {...*} args - results to pass to next callback
		* @returns {void}
		*/
		function next() {
			var args;
			var len;
			var i;

			// Check for an error...
			if ( arguments[ 0 ] ) {
				return clbk( arguments[ 0 ] );
			}
			// Update the counter and check if we have run all functions...
			idx += 1;
			if ( idx >= fcns.length ) {
				return clbk();
			}
			// Copy the remaining arguments...
			len = arguments.length;
			args = new Array( len );
			for ( i = 0; i < len-1; i++ ) {
				args[ i ] = arguments[ i+1 ];
			}
			// Add the callback:
			args[ i ] = next;

			// Apply the arguments to the next function in the waterfall:
			fcns[ idx ].apply( thisArg, args );
		}
	}
}


// EXPORTS //

module.exports = factory;

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

var isFunctionArray = require( '@stdlib/assert/is-function-array' );
var isFunction = require( '@stdlib/assert/is-function' );
var format = require( '@stdlib/string/format' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var limit = require( './limit.js' );


// MAIN //

/**
* Returns a function to execute a set of functions in parallel.
*
* @param {FunctionArray} fcns - array of functions
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @throws {TypeError} first argument must be an array of functions
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} parallel function
*
* @example
* function a( resolve ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         resolve( null, 2 );
*     }
* }
*
* function b( resolve ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         resolve( null, 4 );
*     }
* }
*
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
*     // => [ 2, 4 ]
* }
*
* var fcns = [ a, b ];
*
* var run = parallel.factory( fcns );
*
* run( done );
*/
function factory( fcns, options ) {
	var opts;
	var err;

	if ( !isFunctionArray( fcns ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array of functions. Value: `%s`.', fcns ) );
	}
	opts = {
		'limit': PINF
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	return parallel;

	/**
	* Executes a set of functions in parallel and returns an array of results.
	*
	* @private
	* @param {Callback} done - function to invoke upon completion
	* @throws {TypeError} must provide a function
	* @returns {void}
	*/
	function parallel( done ) {
		if ( !isFunction( done ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', done ) );
		}
		return limit( fcns, opts, clbk );

		/**
		* Callback invoked upon completion.
		*
		* @private
		* @param {*} [error] - error
		* @param {Array} [out] - output array
		* @returns {void}
		*/
		function clbk( error, out ) {
			if ( error ) {
				return done( error );
			}
			done( null, out );
		}
	}
}


// EXPORTS //

module.exports = factory;

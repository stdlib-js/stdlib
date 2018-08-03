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

var r = require( 'repl' );
var isFunction = require( '@stdlib/assert/is-function' );
var validate = require( './validate.js' );
var defaults = require( './defaults.js' );
var extendContext = require( './context.js' );


// MAIN //

/**
* Starts a REPL environment.
*
* @param {Options} [options] - REPL options
* @param {Callback} clbk - callback to invoke upon starting a REPL
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*
* @example
* repl( onStart );
*
* function onStart( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/
function repl( options, clbk ) {
	var server;
	var opts;
	var err;
	var cb;

	opts = defaults();
	if ( arguments.length === 1 ) {
		cb = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		cb = clbk;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	// Start the REPL server:
	server = r.start( opts );

	// Extend a REPL context:
	extendContext( server );

	// Don't release the zalgo!
	setTimeout( onTimeout, 0 );

	/**
	* Callback invoked during a subsequent tick.
	*
	* @private
	*/
	function onTimeout() {
		cb( null, server );
	}
}


// EXPORTS //

module.exports = repl;

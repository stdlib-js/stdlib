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

var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var createContext = require( './context.js' );
var asyncSource = require( './async.js' );
var syncSource = require( './sync.js' );
var compile = require( './vm_compile.js' );


// MAIN //

/**
* Evaluates source code within a V8 virtual machine context.
*
* @private
* @param {string} src - source code
* @param {Object} opts - options
* @param {string} filename - filename
* @param {string} dirname - directory name
* @param {Callback} clbk - callback to invoke upon completion
* @returns {void}
*/
function evaluate( src, opts, filename, dirname, clbk ) {
	var context;
	var tmp;
	var fcn;
	var err;
	var id;

	// Create an id:
	id = minstd();

	// Create an execution context:
	context = createContext( done );

	// Generate the source code to evaluate...
	if ( opts.asynchronous ) {
		src = asyncSource( id, src, opts );
	} else {
		src = syncSource( id, src, opts );
	}
	// Compile the source code:
	fcn = compile( filename, src );

	// Execute the source code:
	tmp = fcn.call( context, require, filename, dirname );

	// Check that the snippet did not prematurely return...
	if ( tmp !== id ) {
		err = new Error( 'evaluation error. Unable to retrieve evaluation results. Ensure that the provided snippet does not return prematurely.' );
		return done( err );
	}
	/**
	* Callback invoked upon executing source code.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {NonNegativeIntegerArray} results - results
	* @returns {void}
	*/
	function done( error, results ) {
		if ( error ) {
			return clbk( error );
		}
		return clbk( null, results );
	}
}


// EXPORTS //

module.exports = evaluate;

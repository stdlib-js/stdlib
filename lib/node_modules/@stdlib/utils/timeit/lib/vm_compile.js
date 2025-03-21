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

var vm = require( 'vm' );
var wrap = require( './wrap.js' );


// MAIN //

/**
* Compiles JavaScript source code for execution within a V8 virtual machine context.
*
* @private
* @param {string} filename - filename to associate with compiled source code
* @param {string} code - source code to compile
* @returns {Function} compiled source code wrapped within a function
*/
function compile( filename, code ) {
	var script;
	var opts;

	// Wrap the source code similar to `require`:
	code = wrap( code );

	// Compile the source code:
	opts = {
		'filename': filename,
		'lineOffset': 0
	};
	script = new vm.Script( code, opts );

	// Run the compiled code in the current V8 context:
	opts = {
		'displayErrors': true
	};
	return script.runInThisContext( opts );
}


// EXPORTS //

module.exports = compile;

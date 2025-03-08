/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var Script = require( 'vm' ).Script;


// VARIABLES //

var OPTS = {
	'filename': '<repl>',
	'lineOffset': 0
};


// MAIN //

/**
* Attempts to compile a provided code string for execution within a REPL environment.
*
* @private
* @param {string} code - code string
* @returns {(Object|Error)} compiled code object or an error
*/
function compile( code ) {
	try {
	// Note: `void 0` ensures that the compiled code does not return the string `'use strict'` when provided statements/declarations which do not return a value (e.g., `{}`, `{"a":1}`, etc):
		code = new Script( '\'use strict\'; void 0;\n'+code, OPTS );
	} catch ( error ) {
		return error;
	}
	return code;
}


// EXPORTS //

module.exports = compile;

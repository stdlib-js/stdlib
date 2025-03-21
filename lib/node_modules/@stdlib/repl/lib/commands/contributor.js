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

var DATA = require( './../../data/contributor.json' );


// VARIABLES //

var INFO = [
	'',
	'  stdlib began as a project of Athan Reines and Philipp Burckhardt to bring',
	'  libraries for numerical and scientific computing to JavaScript and, more',
	'  generally, web environments.',
	'',
	'  The project has since expanded to include an extensive standard library for',
	'  modern web and application development and provides best-in-class algorithms',
	'  and implementations for mathematics, linear algebra, statistics, random number',
	'  generation, string processing, benchmarking, testing, and so much more.',
	'',
	'  stdlib is the result of a collaborative effort with contributions from all',
	'  over the world.',
	'',
	'  stdlib would not have been able to achieve its success without the invaluable',
	'  help of those who have contributed by donating code, bug fixes, and',
	'  documentation:',
	'',
	'  ' + DATA.join( '\n  ' ),
	''
].join( '\n' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `contributors` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Prints a list of contributors.
	*
	* @private
	*/
	function onCommand() {
		repl._ostream.write( INFO ); // eslint-disable-line no-underscore-dangle
	}
}


// EXPORTS //

module.exports = command;

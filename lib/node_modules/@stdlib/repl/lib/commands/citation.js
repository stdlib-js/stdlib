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

// VARIABLES //

var YEAR = (new Date()).getFullYear();

// FIXME: include software DOI!
var INFO = [
	'',
	'  To cite stdlib in publications, use:',
	'',
	'    The Stdlib Authors ('+YEAR+'). stdlib: a standard library for JavaScript and',
	'    Node.js with an emphasis on numerical and scientific computing.',
	'    <https://github.com/stdlib-js/stdlib>.',
	'',
	'  For LaTeX users, the following is a suitable BibTeX entry:',
	'',
	'    @manual{<id>,',
	'      author = {The Stdlib Authors},',
	'      title = {{stdlib: a standard library for JavaScript and Node.js',
	'      with an emphasis on numerical and scientific computing}},',
	'      year = {'+YEAR+'},',
	'      url = {https://github.com/stdlib-js/stdlib},',
	'    }',
	'',
	'  We have invested considerable time and effort in creating stdlib, please cite',
	'  stdlib when using it for data analysis and development.',
	'',
	''
].join( '\n' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `citation` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Prints citation information.
	*
	* @private
	*/
	function onCommand() {
		repl._ostream.write( INFO ); // eslint-disable-line no-underscore-dangle
	}
}


// EXPORTS //

module.exports = command;

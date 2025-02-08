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

var INFO = [
	'',
	'  Help support stdlib!',
	'',
	'  stdlib is an open-source project which is maintained by members of the',
	'  community. Our ability to build new features, submit bug fixes, and improve',
	'  the project depends on your support.',
	'',
	'  You can help in the following ways:',
	'',
	'  - Give developer time to the project. Message us on Gitter for guidance.',
	'  - Financially sponsor the project.',
	'',
	'  If you want to be a sponsor 🤗, you can donate to one or more of the following:',
	'',
	'  - Open Collective (https://opencollective.com/stdlib)',
	'  - GitHub Sponsors (https://github.com/sponsors/stdlib-js)',
	'',
	'  Thank you for your support!',
	'',
	''
].join( '\n' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `donate` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Prints donation information.
	*
	* @private
	*/
	function onCommand() {
		repl._ostream.write( INFO ); // eslint-disable-line no-underscore-dangle
	}
}


// EXPORTS //

module.exports = command;

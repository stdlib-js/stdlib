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

// MAIN //

/**
* Returns a callback to be invoked upon calling the `currentSlide` command.
*
* @private
* @param {Presentation} pres - presentation instance
* @returns {Function} callback
*/
function command( pres ) {
	return onCommand;

	/**
	* Returns the current presentation slide index.
	*
	* ## Notes
	*
	* -   The returned index is the nominal (i.e., one-based) slide index.
	*
	* @private
	* @returns {integer} current presentation slide index
	*/
	function onCommand() {
		return pres.currentSlide;
	}
}


// EXPORTS //

module.exports = command;

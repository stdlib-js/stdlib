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
* Returns a regular expression for splitting a path into two components: a subdirectory path and a basename (filter).
*
* @private
* @returns {RegExp} regular expression
*/
function createRegExp() {
	/*
	* Regular expression for splitting a path into two components: a subdirectory path and a basename (filter).
	*
	* ## Examples
	*
	* -   `''`
	* -   `'.'`
	* -   `'./'`
	* -   `'..'`
	* -   `'../'`
	* -   `'foo/bar'`
	* -   `'./foo'`
	* -   `'./foo/bar`
	*
	* Regular expression: `/([\w@./-]+\/)?([\w@./-]*)/`
	*
	* -   `(`
	*     -   begin capture (1)
	* -   `[\w@./-]+\/`
	*     -   subdirectory path characters
	* -   `)`
	*     -   end capture (1)
	* -   `?`
	*     -   match zero or one time
	* -   `(`
	*     -   begin capture (2)
	* -   `[\w@./-]*`
	*     -   zero or more basename path characters
	* -   `)`
	*     -   end capture (2)
	*/
	return /([\w@./-]+\/)?([\w@./-]*)/;
}


// EXPORTS //

module.exports = createRegExp;

/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns a regular expression to capture a Windows filename extension.
*
* @returns {RegExp} regular expression
*
* @example
* var RE_EXTNAME_WINDOWS = reExtnameWindows();
* var ext = RE_EXTNAME_WINDOWS.exec( 'index.js' )[ 1 ];
* // returns '.js'
*/
function reExtnameWindows() {
	return /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/; // eslint-disable-line no-useless-escape
}


// EXPORTS //

module.exports = reExtnameWindows;

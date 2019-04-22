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

var stdin = require( '@stdlib/streams/node/stdin' );
var stdout = require( '@stdlib/streams/node/stdout' );
var WELCOME = require( './welcome_text.js' );


// MAIN //

/**
* Returns default options.
*
* @private
* @returns {Object} default options
*
* @example
* var opts = defaults();
* // returns {...}
*/
function defaults() {
	return {
		'input': stdin,
		'output': stdout,
		'inputPrompt': 'In [%d]: ',
		'outputPrompt': 'Out[%d]: ',
		'padding': 1,
		'isTTY': void 0,
		'timeout': 4294967295,
		'sandbox': true,
		'welcome': WELCOME,
		'save': '',
		'load': '',
		'log': '',
		'quiet': false
	};
}


// EXPORTS //

module.exports = defaults;

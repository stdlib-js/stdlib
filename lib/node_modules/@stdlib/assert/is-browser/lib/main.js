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

/* global window */

'use strict';

// MODULES //

var getGlobal = require( '@stdlib/utils/global' );
var IS_NODE = require( '@stdlib/assert/is-node' );
var globalScope = require( './global_scope.js' );


// VARIABLES //

var Global = getGlobal();


// MAIN //

/**
* Returns a boolean indicating if the runtime is a web browser.
*
* @returns {boolean} boolean indicating if runtime is a web browser
*
* @example
* var bool = isBrowser();
* // returns <boolean>
*/
function isBrowser() {
	return (
		// Check that we are not running in a Node.js runtime:
		IS_NODE === false &&

		// Check for presence of `window` variable:
		typeof window === 'object' &&

		// Check that the `window` variable matches the determined global variable:
		window === Global &&

		// Check that the `window` variable is equal to the global scope:
		globalScope === true
	);
}


// EXPORTS //

module.exports = isBrowser;

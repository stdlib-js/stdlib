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

/* global WorkerGlobalScope, WorkerNavigator, WorkerLocation, self, importScripts, navigator, location */

'use strict';

// MODULES //

var getGlobal = require( '@stdlib/utils/global' );
var IS_NODE = require( '@stdlib/assert/is-node' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var globalScope = require( './global_scope.js' );


// VARIABLES //

var Global = getGlobal();


// MAIN //

/**
* Returns a boolean indicating if the runtime is a web worker.
*
* @returns {boolean} boolean indicating if runtime is a web worker
*
* @example
* var bool = isWebWorker();
* // returns <boolean>
*/
function isWebWorker() {
	return (
		// Check that we are not running in a Node.js runtime:
		IS_NODE === false &&

		// Check for presence of `WorkerGlobalScope` global variable:
		typeof WorkerGlobalScope === 'object' &&

		// Check for presence of `WorkerNavigator` global variable:
		isObject( WorkerNavigator ) &&

		// Check that the `navigator` global object is an instance of `WorkerNavigator`:
		navigator instanceof WorkerNavigator &&

		// Check for presence of `WorkerLocation` global variable:
		isObject( WorkerLocation ) &&

		// Check that the `location` global object is an instance of `WorkerLocation`:
		location instanceof WorkerLocation &&

		// Check for presence of `self` variable:
		typeof self === 'object' &&

		// Check that the `self` variable matches the determined global variable:
		self === Global &&

		// Check that the `self` variable is equal to the global scope:
		globalScope === true &&

		// Check for presence of `importScripts` function:
		typeof importScripts === 'function'
	);
}


// EXPORTS //

module.exports = isWebWorker;

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

'use strict';

// MODULES //

var proc = require( 'process' );
var getGlobal = require( '@stdlib/utils/global' );
var nativeClass = require( '@stdlib/utils/native-class' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var globalScope = require( './global_scope.js' );


// VARIABLES //

var Global = getGlobal();
var RE = /node|io\.js/;


// MAIN //

/**
* Returns a boolean indicating if the runtime is Node.js.
*
* @returns {boolean} boolean indicating if runtime is Node.js
*
* @example
* var bool = isNode();
* // returns <boolean>
*/
function isNode() {
	return (
		// Check for presence of `global` variable:
		typeof global === 'object' &&

		// Check that the `global` variable matches the determined global variable:
		global === Global &&

		// Check for a circular reference to the global variable:
		Global === Global.global &&

		// Check that the global variable has the expected internal class:
		(
			// Node < v7
			nativeClass( Global ) === '[object global]' ||

			// Node >= v7 (https://github.com/nodejs/node/issues/9274)
			nativeClass( Global ) === '[object Object]'
		) &&

		// Check that the `global` variable is equal to the global scope:
		globalScope === true &&

		// Check for a `require` global variable:
		typeof require === 'function' &&

		// Check for a `process` global variable:
		typeof proc === 'object' &&

		// Check that the `process` global variable has the expected internal class:
		(
			// Node < v14.6.0
			nativeClass( proc ) === '[object process]' ||

			// Node >= v14.6.0
			nativeClass( proc ) === '[object Object]'
		) &&

		// Check for a `versions` property:
		isObject( proc.versions ) &&

		// Check for a `node` property:
		isString( proc.versions.node ) &&

		(
			// `process.release` was added in Node v3.0.0 via io.js:
			typeof proc.release === 'undefined' ||

			(
				// Check for a `release` property:
				isObject( proc.release ) &&

				// Check for a `name` property:
				isString( proc.release.name ) &&

				// Check that the release name contains either `node` or `io.js` (in Node.js/io.js, the release name is read-only):
				RE.test( proc.release.name )
			)
		)
	);
}


// EXPORTS //

module.exports = isNode;

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

var nativeClass = require( '@stdlib/utils/native-class' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var proc = require( './process.js' );


// MAIN //

/**
* Returns a boolean indicating if the runtime is Electron.
*
* @returns {boolean} boolean indicating if runtime is Electron
*
* @example
* var bool = isElectron();
* // returns <boolean>
*/
function isElectron() {
	return (
		// Check for a `process` global variable:
		typeof proc === 'object' &&

		// Check that the `process` global variable has the expected internal class:
		nativeClass( proc ) === '[object process]' &&

		// Check for a `versions` property:
		isObject( proc.versions ) &&

		// Check for an `electron` property:
		isString( proc.versions.electron ) &&

		// Check for a `chrome` property:
		isString( proc.versions.chrome ) &&

		// Check for a `type` property:
		(
			proc.type === 'browser' ||
			proc.type === 'renderer'
		)
	);
}


// EXPORTS //

module.exports = isElectron;

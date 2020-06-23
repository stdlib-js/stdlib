/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// Define the bundle:
var BUNDLE = {
	'name': 'bundle',
	'standalone': 'stdlib_repl',
	'namespace': 'tree', // we want the namespace, so cannot use `flat` (only want `@stdlib/repl` namespace)
	'raw': false,
	'minified': true,
	'include': [
		'@stdlib/repl'
	],
	'exclude': [
		// WARNING: this list is fragile, as we must manually update the list of what to exclude as the namespace changes.
		'@stdlib/repl/code-blocks',
		'@stdlib/repl/help',
		'@stdlib/repl/info',
		'@stdlib/repl/presentation',
		'@stdlib/repl/server',
		'@stdlib/repl/signature',
		'@stdlib/repl/typed-signature'
	]
};


// EXPORTS //

module.exports = BUNDLE;

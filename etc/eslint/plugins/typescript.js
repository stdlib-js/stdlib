/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// ESLint plugins for TypeScript:
var plugins = [
	// Allows linting $ExpectError and $ExpectType type assertions:
	'eslint-plugin-expect-type',

	// Lint rules for import/export syntax:
	'eslint-plugin-import',

	// Required for JSDoc support:
	'eslint-plugin-jsdoc',

	// Required for TypeScript support:
	'@typescript-eslint'
];


// EXPORTS //

module.exports = plugins;

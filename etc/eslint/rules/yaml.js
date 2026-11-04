/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/**
* ESLint rules for YAML files.
*
* @namespace rules
*/
var rules = {};

/**
* Enforce 2-space indentation per `.editorconfig`.
*
* @name yml/indent
* @memberof rules
* @type {Array}
*/
rules[ 'yml/indent' ] = [ 'error', 2 ];

/**
* Disallow empty YAML documents.
*
* @name yml/no-empty-document
* @memberof rules
* @type {string}
*/
rules[ 'yml/no-empty-document' ] = 'error';

/**
* Disallow empty keys.
*
* @name yml/no-empty-key
* @memberof rules
* @type {string}
*/
rules[ 'yml/no-empty-key' ] = 'error';

/**
* Disallow empty mapping values.
*
* @name yml/no-empty-mapping-value
* @memberof rules
* @type {string}
*/
rules[ 'yml/no-empty-mapping-value' ] = 'error';

/**
* Disallow empty sequence entries.
*
* @name yml/no-empty-sequence-entry
* @memberof rules
* @type {string}
*/
rules[ 'yml/no-empty-sequence-entry' ] = 'error';

/**
* Disallow irregular whitespace characters.
*
* @name yml/no-irregular-whitespace
* @memberof rules
* @type {string}
*/
rules[ 'yml/no-irregular-whitespace' ] = 'error';

/**
* Disallow tab indentation.
*
* @name yml/no-tab-indent
* @memberof rules
* @type {string}
*/
rules[ 'yml/no-tab-indent' ] = 'error';

/**
* Require string keys.
*
* @name yml/require-string-key
* @memberof rules
* @type {string}
*/
rules[ 'yml/require-string-key' ] = 'error';

/**
* Enforce block-style mappings.
*
* @name yml/block-mapping
* @memberof rules
* @type {string}
*/
rules[ 'yml/block-mapping' ] = 'error';

/**
* Enforce block-style sequences.
*
* @name yml/block-sequence
* @memberof rules
* @type {string}
*/
rules[ 'yml/block-sequence' ] = 'error';

/**
* Disallow multiple consecutive empty lines.
*
* @name yml/no-multiple-empty-lines
* @memberof rules
* @type {Array}
*/
rules[ 'yml/no-multiple-empty-lines' ] = [ 'error', {
	'max': 1
}];

/**
* Prefer single quotes (warn first to assess impact on `${{ }}` expressions).
*
* @name yml/quotes
* @memberof rules
* @type {Array}
*/
rules[ 'yml/quotes' ] = [ 'warn', {
	'prefer': 'single',
	'avoidEscape': true
}];


// EXPORTS //

module.exports = rules;

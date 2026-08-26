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
* ESLint rules for JSON files.
*
* @namespace rules
*/
var rules = {};

/**
* Enforce 2-space indentation per `.editorconfig`.
*
* @name jsonc/indent
* @memberof rules
* @type {Array}
*/
rules[ 'jsonc/indent' ] = [ 'error', 2 ];

/**
* Disallow comments in JSON files.
*
* @name jsonc/no-comments
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-comments' ] = 'error';

/**
* Disallow trailing commas.
*
* @name jsonc/comma-dangle
* @memberof rules
* @type {Array}
*/
rules[ 'jsonc/comma-dangle' ] = [ 'error', 'never' ];

/**
* Disallow duplicate keys.
*
* @name jsonc/no-dupe-keys
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-dupe-keys' ] = 'error';

/**
* Disallow floating decimals (e.g., `.5` or `1.`).
*
* @name jsonc/no-floating-decimal
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-floating-decimal' ] = 'error';

/**
* Disallow irregular whitespace characters.
*
* @name jsonc/no-irregular-whitespace
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-irregular-whitespace' ] = 'error';

/**
* Disallow multi-line strings.
*
* @name jsonc/no-multi-str
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-multi-str' ] = 'error';

/**
* Disallow octal literals.
*
* @name jsonc/no-octal
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-octal' ] = 'error';

/**
* Disallow useless escape characters.
*
* @name jsonc/no-useless-escape
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/no-useless-escape' ] = 'error';

/**
* Enforce valid JSON number literals.
*
* @name jsonc/valid-json-number
* @memberof rules
* @type {string}
*/
rules[ 'jsonc/valid-json-number' ] = 'error';


// EXPORTS //

module.exports = rules;

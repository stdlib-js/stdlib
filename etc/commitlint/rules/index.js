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

/* eslint-disable stdlib/jsdoc-leading-description-sentence */

/**
* commitlint rules.
*
* @name rules
* @type {Object}
*/
var rules = {};

/**
* Allow the commit message body to end with a full stop.
*
* @name body-full-stop
* @memberof rules
* @type {Array}
*/
rules[ 'body-full-stop' ] = [ 0, 'always', '.' ];

/**
* Require that the commit message body always begin with a blank line.
*
* @name body-leading-blank
* @memberof rules
* @type {Array}
*/
rules[ 'body-leading-blank' ] = [ 2, 'always' ];

/**
* Allow the commit message body to be empty.
*
* @name body-empty
* @memberof rules
* @type {Array}
*/
rules[ 'body-empty' ] = [ 0, 'never' ];

/**
* Do not impose a maximum commit message body length.
*
* @name body-max-length
* @memberof rules
* @type {Array}
*/
rules[ 'body-max-length' ] = [ 2, 'always', 1/0 ];

/**
* Warn whenever the commit message body line length exceeds 72 characters.
*
* @name body-max-line-length
* @memberof rules
* @type {Array}
*/
rules[ 'body-max-line-length' ] = [ 1, 'always', 72 ];

/**
* Require that the commit message body length be at least 20 characters.
*
* @name body-min-length
* @memberof rules
* @type {Array}
*/
rules[ 'body-min-length' ] = [ 0, 'always', 20 ]; // NOTE: disabled due to commitzen not respecting the rule allowing the commit message body to be empty

/**
* Allow the commit message body to be in any case.
*
* @name body-case
* @memberof rules
* @type {Array}
*/
rules[ 'body-case' ] = [ 0, 'always', 'lower-case' ];

/**
* Require that the commit message footer begin with a blank line.
*
* @name footer-leading-blank
* @memberof rules
* @type {Array}
*/
rules[ 'footer-leading-blank' ] = [ 2, 'always' ];

/**
* Do not require that a commit message footer always be present.
*
* @name footer-empty
* @memberof rules
* @type {Array}
*/
rules[ 'footer-empty' ] = [ 0, 'never' ];

/**
* Do not impose a maximum commit message footer length.
*
* @name footer-max-length
* @memberof rules
* @type {Array}
*/
rules[ 'footer-max-length' ] = [ 2, 'always', 1/0 ];

/**
* Warn whenever the commit message footer line length exceeds 72 characters.
*
* @name footer-max-line-length
* @memberof rules
* @type {Array}
*/
rules[ 'footer-max-line-length' ] = [ 1, 'always', 72 ];

/**
* Do not impose a minimum commit message footer length.
*
* @name footer-min-length
* @memberof rules
* @type {Array}
*/
rules[ 'footer-min-length' ] = [ 2, 'always', 0 ];

/**
* Delegate header casing to rules governing individual components.
*
* @name header-case
* @memberof rules
* @type {Array}
*/
rules[ 'header-case' ] = [ 0, 'always', 'lower-case' ];

/**
* Disallow ending the header with a full stop.
*
* @name header-full-stop
* @memberof rules
* @type {Array}
*/
rules[ 'header-full-stop' ] = [ 2, 'never', '.' ];

/**
* Warn if the total header length exceeds 100 characters.
*
* @name header-max-length
* @memberof rules
* @type {Array}
*/
rules[ 'header-max-length' ] = [ 1, 'always', 100 ];

/**
* Require that a commit header be at least 10 characters.
*
* @name header-min-length
* @memberof rules
* @type {Array}
*/
rules[ 'header-min-length' ] = [ 2, 'always', 10 ];

/**
* Allow references to be empty.
*
* @name references-empty
* @memberof rules
* @type {Array}
*/
rules[ 'references-empty' ] = [ 0, 'never' ];

/**
* Allow for arbitrary scopes.
*
* @name scope-enum
* @memberof rules
* @type {Array}
*/
rules[ 'scope-enum' ] = [ 0, 'always' ];

/**
* Require that scopes be in lower case.
*
* @name scope-case
* @memberof rules
* @type {Array}
*/
rules[ 'scope-case' ] = [ 2, 'always', 'lower-case' ];

/**
* Allow the scope to be empty.
*
* @name scope-empty
* @memberof rules
* @type {Array}
*/
rules[ 'scope-empty' ] = [ 0, 'never' ];

/**
* Warn if the scope length exceeds 72 characters.
*
* @name scope-max-length
* @memberof rules
* @type {Array}
*/
rules[ 'scope-max-length' ] = [ 1, 'always', 72 ];

/**
* Do not require a minimum scope length.
*
* @name scope-min-length
* @memberof rules
* @type {Array}
*/
rules[ 'scope-min-length' ] = [ 2, 'always', 0 ];

/**
* Disallow beginning a commit message subject with a capital letter.
*
* @name subject-case
* @memberof rules
* @type {Array}
*/
rules[ 'subject-case' ] = [ 2, 'never', [
	'sentence-case', // Sentence case
	'start-case',    // Start Case
	'pascal-case',   // PascalCase
	'upper-case'     // UPPERCASE
]];

/**
* Require that a commit message subject always be present.
*
* @name subject-empty
* @memberof rules
* @type {Array}
*/
rules[ 'subject-empty' ] = [ 2, 'never' ];

/**
* Disallow ending the commit message subject with a full stop.
*
* @name subject-full-stop
* @memberof rules
* @type {Array}
*/
rules[ 'subject-full-stop' ] = [ 2, 'never', '.' ];

/**
* Warn if the commit message subject exceeds 72 characters.
*
* @name subject-max-length
* @memberof rules
* @type {Array}
*/
rules[ 'subject-max-length' ] = [ 1, 'always', 72 ];

/**
* Require that the commit message subject be at least 7 characters.
*
* @name subject-min-length
* @memberof rules
* @type {Array}
*/
rules[ 'subject-min-length' ] = [ 2, 'always', 7 ];

/**
* Allow an exclamation mark before the `:` marker.
*
* @name subject-exclamation-mark
* @memberof rules
* @type {Array}
*/
rules[ 'subject-exclamation-mark' ] = [ 0, 'always' ];

/**
* Require that the commit message type be one of a finite number of values.
*
* @name type-enum
* @memberof rules
* @type {Array}
*/
rules[ 'type-enum' ] = [ 2, 'always', [
	'bench',
	'build',
	'chore',
	'deprecate',
	'docs',
	'feat',
	'fix',
	'perf',
	'refactor',
	'remove',
	'revert',
	'style',
	'test',
	'temp'
]];

/**
* Require that the commit message type always be lower case.
*
* @name type-case
* @memberof rules
* @type {Array}
*/
rules[ 'type-case' ] = [ 2, 'always', 'lower-case' ];

/**
* Require that a commit message type always be provided.
*
* @name type-empty
* @memberof rules
* @type {Array}
*/
rules[ 'type-empty' ] = [ 2, 'never' ];

/**
* Warn if the commit message type exceeds 20 characters.
*
* @name type-max-length
* @memberof rules
* @type {Array}
*/
rules[ 'type-max-length' ] = [ 1, 'always', 20 ];

/**
* Require that the commit message type be at least 1 character.
*
* @name type-min-length
* @memberof rules
* @type {Array}
*/
rules[ 'type-min-length' ] = [ 2, 'always', 1 ];

/**
* Do not require the present of the `Signed-off-by` trailer.
*
* @name signed-off-by
* @memberof rules
* @type {Array}
*/
rules[ 'signed-off-by' ] = [ 0, 'always' ];

/**
* Do not require that a commit message has a specific trailer.
*
* @name trailer-exists
* @memberof rules
* @type {Array}
*/
rules[ 'trailer-exists' ] = [ 0, 'always', 'Signed-off-by:' ];


// EXPORTS //

module.exports = rules;

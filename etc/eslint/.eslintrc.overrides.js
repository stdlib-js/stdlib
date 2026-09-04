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

/* eslint-disable vars-on-top, stdlib/empty-line-before-comment */

'use strict';

// MODULES //

// FIXME: remove the next line and uncomment the subsequent line once all remark JSDoc ESLint rules are completed
var copy = require( './../../lib/node_modules/@stdlib/utils/copy' );
// var copy = require( './utils/copy.js' );
var objectKeys = require( './../../lib/node_modules/@stdlib/utils/keys' );
var defaults = require( './.eslintrc.js' );
var examplesConfig = require( './.eslintrc.examples.js' );


// VARIABLES //

/**
* List of rules to exclude when linting JSDoc code snippets because they are incompatible with code fragments extracted from JSDoc comments.
*
* @private
* @type {Array}
*/
var JSDOC_SNIPPET_EXCLUDE = [
	'no-undef',
	'no-unused-vars',
	'strict',
	'no-var',
	'eol-last',
	'indent',
	'no-restricted-syntax'
];


// FUNCTIONS //

/**
* Extracts built-in ESLint rules from a configuration object, filtering out plugin rules and rules listed in an exclusion list.
*
* @private
* @param {Object} config - ESLint configuration object
* @param {Array} exclude - rule names to exclude
* @returns {Object} filtered rules object
*/
function extractSnippetRules( config, exclude ) {
	var rules;
	var keys;
	var key;
	var i;

	rules = {};
	keys = objectKeys( config.rules );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];

		// Skip plugin rules (e.g., "stdlib/foo", "node/bar") since the Linter instance does not have them registered:
		if ( key.indexOf( '/' ) !== -1 ) {
			continue;
		}
		// Skip rules explicitly excluded as incompatible with code snippets:
		if ( exclude.indexOf( key ) !== -1 ) {
			continue;
		}
		rules[ key ] = config.rules[ key ];
	}
	return rules;
}


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Overrides.
*
* @name overrides
* @memberof eslint
* @type {Array}
*/
eslint.overrides = require( './overrides' );

/**
* Configure JSDoc example linting using the examples ESLint config, with rules filtered for use on JSDoc code snippets.
*/
eslint.rules[ 'stdlib/jsdoc-example-eslint' ] = [ 'warn', {
	'rules': extractSnippetRules( examplesConfig, JSDOC_SNIPPET_EXCLUDE )
}];


// EXPORTS //

module.exports = eslint;

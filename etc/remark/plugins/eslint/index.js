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

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;


// VARIABLES //

var etc = resolve( __dirname, '..', '..', '..' );
var config = join( etc, 'eslint', '.eslintrc.markdown.js' );
var eslint = resolve( etc, '..', 'lib', 'node_modules', '@stdlib', '_tools', 'remark', 'plugins', 'remark-lint-eslint' );
var opts = {
	'config': config,
	'rules': {
		'stdlib/doctest': 'error' // enable otherwise disabled lint rule
	},
	'ignore': false,
	'useEslintrc': false
};


// MAIN //

/**
* Plugin.
*/
var plugin = [ require( eslint ).factory( opts ), [ 'error' ] ]; // eslint-disable-line stdlib/no-immediate-require, stdlib/no-dynamic-require


// EXPORTS //

module.exports = plugin;

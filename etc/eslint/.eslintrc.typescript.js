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

// MAIN //

var eslint = {};

/**
* Root configuration.
*
* @name root
* @memberof eslint
* @type {boolean}
* @default true
*/
eslint.root = true;

/**
* Default environments.
*
* @name env
* @memberof eslint
* @type {Object}
*/
eslint.env = require( './env/typescript.js' );

/**
* Lint rules.
*
* @name rules
* @memberof eslint
* @type {Object}
*/
eslint.rules = require( './rules/typescript.js' );

/**
* Parser.
*
* @name parser
* @memberof eslint
* @type {string}
*/
eslint.parser = '@typescript-eslint/parser';

/**
* Parser options.
*
* @name parserOptions
* @memberof eslint
* @type {Object}
*/
eslint.parserOptions = require( './parser-options/typescript.js' );

/**
* Plugins.
*
* @name plugins
* @memberof eslint
* @type {Object}
*/
eslint.plugins = require( './plugins/typescript.js' );


// EXPORTS //

module.exports = eslint;

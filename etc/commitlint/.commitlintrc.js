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
* commitlint configuration.
*
* @namespace config
*/
var config = {};

/**
* Link to commit guidance.
*
* @name helpUrl
* @memberof config
* @type {string}
*/
config[ 'helpUrl' ] = 'https://github.com/stdlib-js/stdlib/tree/develop/docs/style-guides/git';

/**
* Commit message parser.
*
* @name parserPreset
* @memberof config
* @type {Object}
*/
config[ 'parserPreset' ] = require( './parser-preset' );

/**
* Lint rules.
*
* @name rules
* @memberof config
* @type {Object}
*/
config[ 'rules' ] = require( './rules' );

/**
* Prompt configuration.
*
* @name prompt
* @memberof config
* @type {Object}
*/
config[ 'prompt' ] = require( './prompt' );


// EXPORTS //

module.exports = config;

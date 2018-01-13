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

/**
* ESLint parser options.
*
* @namespace options
*/
var options = {};

/**
* ECMAScript version.
*
* @name version
* @memberof options
* @type {number}
*/
options.version = require( './version.js' );

/**
* Source type.
*
* @name sourceType
* @memberof options
* @type {string}
*/
options.sourceType = require( './source_type.js' );

/**
* Language features.
*
* @name ecmaFeatures
* @memberof options
* @type {Object}
*/
options.ecmaFeatures = require( './features.js' );


// EXPORTS //

module.exports = options;

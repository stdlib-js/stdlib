/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// FIXME: remove the next line and uncomment the subsequent line once all remark JSDoc ESLint rules are completed
var copy = require( './../../lib/node_modules/@stdlib/utils/copy' );

// var copy = require( './utils/copy.js' );
var defaults = require( './.eslintrc.typescript.js' );


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Disable the rule which requires explicit return types for functions and class methods.
*
* @private
*/
eslint.rules[ '@typescript-eslint/explicit-function-return-type' ] = 'off';

/**
* Disable the rule which disallows the use of variables before they are defined.
*
* @private
*/
eslint.rules[ '@typescript-eslint/no-use-before-define' ] = 'off';

/**
* Disable the rule which enforces consistent brace style for blocks.
*
* @private
*/
eslint.rules[ 'brace-style' ] = 'off';

/**
* Disable the rule which requires that throws statements are documented in JSDoc.
*
* @private
*/
eslint.rules[ 'jsdoc/require-throws' ] = 'off';

/**
* Disable the rule which requires that return statements are documented in JSDoc.
*
* @private
*/
eslint.rules[ 'jsdoc/require-returns' ] = 'off';

/**
* Disable the rule which requires that function parameters are documented in JSDoc.
*
* @private
*/
eslint.rules[ 'jsdoc/require-param' ] = 'off';


// EXPORTS //

module.exports = eslint;

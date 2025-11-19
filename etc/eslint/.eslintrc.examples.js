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

// FIXME: remove the next line and uncomment the subsequent line once all remark JSDoc ESLint rules are completed
var copy = require( './../../lib/node_modules/@stdlib/utils/copy' );

// var copy = require( './utils/copy.js' );
var defaults = require( './.eslintrc.js' );


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Warn when using `String`, `Number`, and `Boolean` in place of primitives.
*
* @private
*/
eslint.rules[ 'no-new-wrappers' ] = 'warn';

/**
* Allow variables to be declared as needed.
*
* @private
*/
eslint.rules[ 'vars-on-top' ] = 'off';

/**
* Allow using `console`.
*
* @private
*/
eslint.rules[ 'no-console' ] = 'off';

/**
* Do not require JSDoc comments.
*
* @private
*/
eslint.rules[ 'require-jsdoc' ] = 'off';

/**
* Do not require `@private` annotations.
*
* @private
*/
eslint.rules[ 'stdlib/jsdoc-private-annotation' ] = 'off';

/**
* Do not lint return annotation values in JSDoc comments.
*
* @private
*/
eslint.rules[ 'stdlib/jsdoc-doctest' ] = 'off';

/**
* Lint return annotation values.
*
* @private
*/
eslint.rules[ 'stdlib/doctest' ] = 'error';

/**
* Do not require ordering of variable declarations inside of functions.
*
* @private
*/
eslint.rules[ 'stdlib/vars-order' ] = 'off';

/**
* Enforce that last `require` is a relative path.
*
* @private
*/
eslint.rules[ 'stdlib/require-last-path-relative' ] = 'error';


// EXPORTS //

module.exports = eslint;

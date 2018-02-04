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
* Override the limit for source code lines in a file.
*
* @private
*/
eslint.rules[ 'max-lines' ] = [ 'warn', {
	'max': 1000,
	'skipBlankLines': true,
	'skipComments': true
}];

/**
* Override list of restricted syntax.
*
* @private
*/
eslint.rules[ 'no-restricted-syntax' ] = [ 'error',
	'ArrowFunctionExpression',
	'ClassBody',
	'ClassDeclaration',
	'ClassExpression',
	'DebuggerStatement',
	'ExperimentalRestProperty',
	'ExperimentalSpreadProperty',

	// 'FunctionExpression',
	'LabeledStatement',
	'RestElement',
	'SpreadElement',
	'TaggedTemplateExpression',
	'TemplateElement',
	'TemplateLiteral',
	'WithStatement',
	'YieldExpression',
	'JSXIdentifier',
	'JSXNamespacedName',
	'JSXMemberExpression',
	'JSXEmptyExpression',
	'JSXExpressionContainer',
	'JSXElement',
	'JSXClosingElement',
	'JSXOpeningElement',
	'JSXAttribute',
	'JSXSpreadAttribute',
	'JSXText',
	'ExportDefaultDeclaration',
	'ExportNamedDeclaration',
	'ExportAllDeclaration',
	'ExportSpecifier',
	'ImportDeclaration',
	'ImportSpecifier',
	'ImportDefaultSpecifier',
	'ImportNamespaceSpecifier'
];

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


// EXPORTS //

module.exports = eslint;

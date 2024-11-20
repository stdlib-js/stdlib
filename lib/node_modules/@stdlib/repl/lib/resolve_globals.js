/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var walk = require( 'acorn-walk' ).ancestor;
var resolveLocalScopes = require( './resolve_local_scopes.js' );
var contains = require( './contains.js' );
var appendUnique = require( './append_unique.js' );


// FUNCTIONS //

/**
* Tests whether an AST node declares an `arguments` variable.
*
* @private
* @param {Node} node - AST node
* @returns {boolean} boolean indicating whether an AST node declares an `arguments` variable
*/
function declaresArguments( node ) {
	return (
		node.type === 'FunctionExpression' ||
		node.type === 'FunctionDeclaration'
	);
}

/**
* Tests whether an AST node declares a `this` variable.
*
* @private
* @param {Node} node - AST node
* @returns {boolean} boolean indicating whether an AST node declares a `this` variable
*/
function declaresThis( node ) {
	return (
		node.type === 'FunctionExpression' ||
		node.type === 'FunctionDeclaration'
	);
}


// MAIN //

/**
* Resolves global variables within an abstract syntax tree (AST).
*
* @private
* @param {AST} ast - abstract syntax tree (AST)
* @throws {TypeError} must provide a program AST node
* @returns {Array} list of global variables
*/
function resolveGlobals( ast ) {
	var visitors;
	var globals;
	if ( ast.type !== 'Program' ) {
		throw new TypeError( 'invalid argument. Must provide a program AST node.' );
	}
	globals = [];

	// Resolve local scopes:
	resolveLocalScopes( ast );

	// Define callbacks for relevant AST nodes:
	visitors = {
		'VariablePattern': Identifier,
		'Identifier': Identifier,
		'ThisExpression': ThisExpression
	};

	// Walk the AST to resolve globals:
	walk( ast, visitors );

	return globals;

	/**
	* Callback invoked upon encountering an identifier AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function Identifier( node, parents ) {
		var locals;
		var name;
		var i;

		name = node.name;
		if ( name === 'undefined' ) {
			return;
		}
		for ( i = 0; i < parents.length; i++ ) {
			if ( name === 'arguments' && declaresArguments( parents[ i ] ) ) {
				return;
			}
			locals = parents[ i ].locals;
			if ( locals && contains( locals.length, locals, 1, 0, name ) ) {
				return;
			}
		}
		appendUnique( globals, name );
	}

	/**
	* Callback invoked upon encountering a `ThisExpression` AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function ThisExpression( node, parents ) {
		var i;
		for ( i = 0; i < parents.length; i++ ) {
			if ( declaresThis( parents[ i ] ) ) {
				return;
			}
		}
		appendUnique( globals, 'this' );
	}
}


// EXPORTS //

module.exports = resolveGlobals;

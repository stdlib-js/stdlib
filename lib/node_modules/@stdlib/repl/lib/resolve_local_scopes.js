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

// MODULES //

var walk = require( 'acorn-walk' ).ancestor;
var appendUnique = require( './append_unique.js' );
var isScope = require( './is_scope.js' );
var isBlockScope = require( './is_block_scope.js' );


// MAIN //

/**
* Resolves local scopes within an abstract syntax tree (AST).
*
* ## Notes
*
* -   This function modifies the provided AST by adding a `locals` property to select AST nodes and returns all resolved `locals`.
*
* @private
* @param {AST} ast - abstract syntax tree (AST)
* @throws {TypeError} must provide a program AST node
* @returns {Array} array of `Identifier` nodes of all resolved `locals` in the AST
*/
function resolveScopes( ast ) {
	var declarations;
	var VISITORS;

	if ( ast.type !== 'Program' ) {
		throw new TypeError( 'invalid argument. Must provide a program AST node.' );
	}

	VISITORS = {
		'VariableDeclaration': VariableDeclaration,
		'FunctionDeclaration': FunctionDeclaration,
		'Function': declareFunction,
		'ClassDeclaration': ClassDeclaration,
		'TryStatement': TryStatement,
		'ImportDefaultSpecifier': ModuleImportSpecifier,
		'ImportSpecifier': ModuleImportSpecifier,
		'ImportNamespaceSpecifier': ModuleImportSpecifier
	};
	declarations = [];
	ast.locals = [];
	walk( ast, VISITORS );
	return declarations;

	/**
	* Resolves identifiers arising from a function declaration, such as function parameters and the function name.
	*
	* @private
	* @param {Node} node - function declaration AST node
	*/
	function declareFunction( node ) {
		var i;

		node.locals = node.locals || [];
		for ( i = 0; i < node.params.length; i++ ) {
			declarationPattern( node.params[ i ], node );
		}
		if ( node.id ) {
			appendUnique( node.locals, node.id.name );
			appendUnique( declarations, node.id );
		}
	}

	/**
	* Resolves identifiers based on the variable declaration pattern.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Node} parent - parent AST node
	* @throws {Error} unrecognized pattern type
	*/
	function declarationPattern( node, parent ) {
		var i;

		switch ( node.type ) { // eslint-disable-line padded-blocks

		// Actual identifier name:
		case 'Identifier':
			appendUnique( parent.locals, node.name );
			appendUnique( declarations, node );
			break;

		// `var { a, b } = { 'a': 10, 'b': 20 }` || `var { ...o } = {}`
		case 'ObjectPattern':
			for ( i = 0; i < node.properties.length; i++ ) {
				declarationPattern( node.properties[ i ].value || node.properties[ i ].argument, parent ); // eslint-disable-line max-len
			}
			break;

		// `var [ x, y ] = [ 10, 20 ]`
		case 'ArrayPattern':
			for ( i = 0; i < node.elements.length; i++ ) {
				if ( node.elements[ i ] ) {
					declarationPattern( node.elements[ i ], parent );
				}
			}
			break;

		// `var [ x, y, ...z ] = [ 10, 20, 30, 40, 50 ]` || `var [ ...z ] = []`
		case 'RestElement':
			declarationPattern( node.argument, parent );
			break;

		// `var [ x=5, y=7] = [ 1 ]`
		case 'AssignmentPattern':
			declarationPattern( node.left, parent );
			break;

		default:
			break;
		}
	}

	/**
	* Callback invoked upon encountering a `VariableDeclaration` AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function VariableDeclaration( node, parents ) {
		var parent;
		var i;

		// Case: `var x`
		if ( node.kind === 'var' ) {
			for ( i = parents.length-1; i >= 0; i-- ) {
				if ( isScope( parents[ i ] ) ) {
					parent = parents[ i ];
					break;
				}
			}
		}
		// Case: `let x` || `const x`
		else {
			for ( i = parents.length-1; i >= 0; i-- ) {
				if ( isBlockScope( parents[ i ] ) ) {
					parent = parents[ i ];
					break;
				}
			}
		}
		parent.locals = parent.locals || [];
		for ( i = 0; i < node.declarations.length; i++ ) {
			declarationPattern( node.declarations[ i ].id, parent );
		}
	}

	/**
	* Callback invoked upon encountering a `FunctionDeclaration` AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function FunctionDeclaration( node, parents ) {
		var parent;
		var i;
		for ( i = parents.length-2; i >= 0; i-- ) {
			if ( isScope( parents[ i ] ) ) {
				parent = parents[ i ];
				break;
			}
		}
		parent.locals = parent.locals || [];
		if ( node.id ) {
			appendUnique( parent.locals, node.id.name );
			appendUnique( declarations, node.id );
		}
		declareFunction( node );
	}

	/**
	* Callback invoked upon encountering a `ClassDeclaration` AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function ClassDeclaration( node, parents ) {
		var parent;
		var i;
		for ( i = parents.length-2; i >= 0; i-- ) {
			if ( isBlockScope( parents[ i ] ) ) {
				parent = parents[ i ];
				break;
			}
		}
		parent.locals = parent.locals || [];
		if ( node.id ) {
			appendUnique( parent.locals, node.id.name );
			appendUnique( declarations, node.id );
		}
	}

	/**
	* Callback invoked upon encountering a `TryStatement` AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function TryStatement( node ) {
		if ( node.handler && node.handler.param ) {
			node.handler.locals = node.handler.locals || [];
			appendUnique( node.handler.locals, node.handler.param.name );
			appendUnique( declarations, node.handler.param );
		}
	}

	/**
	* Callback invoked upon encountering a module `import` specifier AST node.
	*
	* @private
	* @param {Node} node - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function ModuleImportSpecifier( node, parents ) {
		parents[ 0 ].locals = parents[ 0 ].locals || [];
		appendUnique( parents[ 0 ].locals, node.local.name );
		appendUnique( declarations, node.local );
	}
}


// EXPORTS //

module.exports = resolveScopes;

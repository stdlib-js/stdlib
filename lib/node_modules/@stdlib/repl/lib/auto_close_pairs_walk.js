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

var logger = require( 'debug' );


// VARIABLES //

var debug = logger( 'repl:auto_close_pairs:walk' );


// FUNCTIONS //

/**
* Returns the AST node associated with a provided cursor position.
*
* @private
* @param {Array<Node>} nodes - list of AST nodes
* @param {NonNegativeInteger} cursor - cursor position
* @returns {(Node|null)} associated AST node or null
*/
function findNode( nodes, cursor ) {
	var node;
	var i;
	for ( i = 0; i < nodes.length; i++ ) {
		node = nodes[ i ];
		if ( node.start <= cursor && cursor <= node.end ) {
			return node;
		}
	}
	return null;
}


// MAIN //

/**
* Walks an abstract syntax tree (AST) to determine whether to auto-close.
*
* @private
* @param {Node} ast - AST to walk
* @param {NonNegativeInteger} cursor - cursor position
* @returns {boolean} boolean indicating whether to auto-close
*/
function walk( ast, cursor ) { // eslint-disable-line max-lines-per-function
	var node;
	var tmp;

	debug( 'Searching for AST node associated with current cursor position...' );
	node = findNode( ast.body, cursor );

	debug( 'Walking the AST...' );
	while ( node && ( node.type !== 'Identifier' || node.start === node.end ) ) {
		debug( 'Node type: %s', node.type );
		switch ( node.type ) {
		case 'ArrayExpression':
			// `[<|>`
			if ( node.elements.length === 0 ) {
				debug( 'Detected the start of an array expression.' );
				return true;
			}
			// `['<|>` || `[ 1, '<|>` || `[ ['<|>, 1, 2, 3 ]` || etc
			node = findNode( node.elements, cursor );
			if ( node === null ) {
				// `${foo([<|>)}`
				return true;
			}
			break;
		case 'ArrowFunctionExpression':
			// `() => [<|>` || `() => { return '<|>`
			node = node.body;
			break;
		case 'AssignmentExpression':
			// `x[ = 5`
			if ( node.left.type === 'Identifier' && node.left.start === node.left.end ) {
				node = node.left;
				break;
			}
			// `x = [<|>` || `x = foo['<|>`
			node = node.right;
			break;
		case 'BinaryExpression':
			// `x[ | 5`
			if ( node.left.type === 'Identifier' && node.left.start === node.left.end ) {
				node = node.left;
				break;
			}
			// `x | foo[<|>`
			node = node.right;
			break;
		case 'BlockStatement':
			if ( node.body.length === 0 ) {
				debug( 'Detected the start of a block statement.' );
				return true;
			}
			node = findNode( node.body, cursor );
			break;
		case 'CallExpression':
			// `foo(<|>`
			if ( node.arguments.length === 0 ) {
				debug( 'Detected the start of a call expression.' );
				return true;
			}
			// `foo( bar, x['<|>`
			node = findNode( node.arguments, cursor );
			if ( node === null ) {
				// `${foo(<|>}`
				return true;
			}
			break;
		case 'ConditionalExpression':
			// `( foo ) ? '<|>`
			if ( node.end === node.consequent.end ) {
				node = node.consequent;
				break;
			}
			// `( foo ) ? bar : '<|>`
			node = node.alternate;
			break;
		case 'DoWhileStatement':
			// `do {<|>`
			if ( node.end === node.body.end ) {
				node = node.body;
				break;
			}
			// `do {} while (<|>`
			if ( node.test.start === node.test.end ) {
				debug( 'Detected the start of a do-while test.' );
				return true;
			}
			node = node.test;
			break;
		case 'EmptyStatement':
			// `(`
			debug( 'Detected the start of an empty statement.' );
			return true;
		case 'ExpressionStatement':
			node = node.expression;
			break;
		case 'ForInStatement':
			// `for ( k in obj ) {<|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// We can omit the `left` case, as `for ( var i = '` will be parsed as a `ForStatement`:
			node = node.right;
			break;
		case 'ForOfStatement':
			// `for ( i of iter ) {<|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// We can omit the `left` case, as `for ( var i = '` will be parsed as a `ForStatement`:
			node = node.right;
			break;
		case 'ForStatement':
			// `for ( i = 0; i < 10; i++ ) {<|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// `for ( i = 0; i < 10; foo[<|>`
			if ( node.update ) {
				node = node.update;
				break;
			}
			// `for ( i = 0; foo[<|>`
			if ( node.test ) {
				node = node.test;
				break;
			}
			// By elimination, must be `init` (e.g., `for ( foo[<|>`):
			node = node.init;
			break;
		case 'FunctionDeclaration':
			// `function foo(<|>`
			if ( node.body.start === node.body.end ) {
				debug( 'Detected the start of a function declaration.' );
				return true;
			}
			// `function foo() {<|>`
			node = node.body;
			break;
		case 'FunctionExpression':
			// `foo = function(<|>`
			if ( node.body.start === node.body.end ) {
				debug( 'Detected the start of a function expression.' );
				return true;
			}
			// `foo = function() {<|>`
			node = node.body;
			break;
		case 'Identifier':
			if ( node.start === node.end ) {
				debug( 'Detected an "empty" identifier.' );
				return true;
			}
			return false;
		case 'IfStatement':
			// `if ( foo ) {<|>`
			if ( node.alternate ) {
				node = node.alternate;
				break;
			}
			// `if ( foo ) {} else {<|>`
			if ( node.consequent.type !== 'EmptyStatement' ) {
				node = node.consequent;
				break;
			}
			// By elimination, must be `test` (e.g., `if (<|>`):
			node = node.test;
			break;
		case 'Literal':
			// `'<|>` || `"<|>`
			if ( node.start === node.end-1 ) {
				debug( 'Detected the start of a string literal.' );
				return true;
			}
			// `foo('<|>)`
			if ( node.start === cursor-1 ) {
				debug( 'Detected the start of a string literal.' );
				return true;
			}
			// `/'<|>` || `/'<|>/`
			if ( node.regex ) {
				debug( 'Detected a regular expression literal.' );
				return true;
			}
			// `'foo[<|>`
			return false;
		case 'LogicalExpression':
			// `x[<|> || true`
			if ( node.left.type === 'Identifier' && node.left.start === node.left.end ) {
				node = node.left;
				break;
			}
			// `x || [<|>`
			node = node.right;
			break;
		case 'MemberExpression':
			// `x['<|>` || `x['<|>] = 5`
			if ( node.property.start === node.property.end || node.property.type === 'Literal' ) {
				debug( 'Detected the start of a member expression.' );
				return true;
			}
			node = node.property;
			break;
		case 'NewExpression':
			// `new (<|>`
			if ( node.end === node.callee.end ) {
				node = node.callee;
				break;
			}
			// `new Foo(<|>`
			if ( node.arguments.length === 0 ) {
				debug( 'Detected the start of a new expression.' );
				return true;
			}
			// `new Foo( bar, '<|>`
			node = findNode( node.arguments, cursor );
			break;
		case 'ObjectExpression':
			// `{<|>`
			if ( node.properties.length === 0 ) {
				debug( 'Detected the start of an object expression.' );
				return true;
			}
			// `{ 'a': 1, 'b': '<|>`
			node = findNode( node.properties, cursor );
			break;
		case 'Property':
			// `{'<|>}`
			return true;
		case 'ReturnStatement':
			// `return '<|>`
			node = node.argument;
			break;
		case 'SequenceExpression':
			// `x, '<|>`
			node = findNode( node.expressions, cursor );
			break;
		case 'SpreadElement':
			// `[...foo['<|>`
			node = node.argument;
			break;
		case 'SwitchCase':
			// `switch ( foo ) { case '<|>`
			if ( node.end === node.test.end ) {
				node = node.test;
				break;
			}
			node = findNode( node.consequent, cursor );
			break;
		case 'SwitchStatement':
			// `switch ( '<|>` || `switch ( foo[ '<|>`
			if ( node.end === node.discriminant.end ) {
				node = node.discriminant;
				break;
			}
			// `switch ( foo ) {<|>`
			if ( node.cases.length === 0 ) {
				debug( 'Detected the start of a switch statement.' );
				return true;
			}
			// `switch ( foo ) { case 'bar': '<|>`
			node = findNode( node.cases, cursor );
			break;
		case 'TaggedTemplateExpression':
			tmp = findNode( [ node.tag ], cursor );
			if ( tmp && !findNode( [ node.quasi ], cursor ) ) {
				node = node.tag;
				break;
			}
			debug( 'Detected the start of a tagged template expression.' );
			node = node.quasi;
			break;
		case 'TemplateElement':
			return false;
		case 'TemplateLiteral':
			// `<|>
			if ( node.start === node.end-1 ) {
				debug( 'Detected the start of a template literal.' );
				return true;
			}
			if ( node.expressions.length > 0 ) {
				tmp = findNode( node.expressions, cursor );
				if ( tmp ) {
					node = tmp;
					break;
				}
			}
			node = findNode( node.quasis, cursor-1 );
			if ( node === null ) {
				return true;
			}
			break;
		case 'ThrowStatement':
			// `throw new errs[ '<|>` || `throw new Error( '`
			node = node.argument;
			break;
		case 'TryStatement':
			// `try { y = foo( '<|>`
			node = node.handler.body;
			break;
		case 'UpdateExpression':
			// `++foo['<|>`
			node = node.argument;
			break;
		case 'VariableDeclaration':
			// `var x = '<|>` || `var x = {'<|>` || `let x = ['<|>` || `let x = {'<|>` || `const x = '<|>` || `const x = {'<|>` || `var x = 5, y = '<|>` || etc.
			node = findNode( node.declarations, cursor );
			break;
		case 'VariableDeclarator':
			// `var x = [<|>` || `var x = {<|>` || etc
			node = node.init;
			break;
		case 'WhileStatement':
			// `while ( true ) {<|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// `while (<|>` || `while ( foo[<|>`
			node = node.test;
			break;
		case 'YieldExpression':
			// `yield [<|>` || `yield {<|>` || etc
			node = node.argument;
			break;
		default:
			return false;
		}
	}
	return false;
}


// EXPORTS //

module.exports = walk;

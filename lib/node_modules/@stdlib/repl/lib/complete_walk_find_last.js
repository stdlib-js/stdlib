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

var logger = require( 'debug' );
var RESERVED_KEYWORDS_EMPTY_BLOCK_STATEMENT = require( './reserved_keywords_empty_block_statement.js' ); // eslint-disable-line id-length


// VARIABLES //

var debug = logger( 'repl:completer:walk:find_last' );
var RE_CASE_KEYWORD = /^c$|^ca$|^cas$|^case$/;
var RE_DEFAULT_KEYWORD = /^d$|^de$|^def$|^defa$|^defau$|^defaul$|^default$/;


// MAIN //

/**
* Walks an abstract syntax tree (AST) in order to find the identifier or member expression being completed.
*
* ## Notes
*
* -   Returned object fields:
*
*     -   `node`: AST node. If unable to resolve an identifier or member expression AST node, this field is the last visited node.
*
*     -   `context`: specifies a completion "context" and, thus, associated identifier restrictions. Possible values:
*
*         -   `'*'`: all available context identifiers should be completion candidates.
*         -   `'none'`: no available context identifiers should be completion candidates.
*         -   `'NewExpression'`: only identifiers/members which are compatible with `new` expressions should be completion candidates.
*         -   `'SwitchCase'`: only the `case` keyword should be a completion candidate.
*
*     -   `filter`: identifier filter.
*
*     -   `keywords`: an array containing applicable keywords given an AST node context.
*
* @private
* @param {Node} node - AST node from which to begin walking
* @returns {Object} object containing walk results
*/
function walk( node ) { // eslint-disable-line max-lines-per-function
	var FLG;
	var out;
	var n;

	FLG = true;
	out = {
		'node': null,
		'context': '*',
		'filter': '',
		'keywords': []
	};

	// Walk the tree in order to find the last node (i.e., the identifier or member expression to be completed)...
	debug( 'Walking the AST to find the identifier or member expression to be completed...' );
	while ( FLG && node.type !== 'Identifier' && node.type !== 'MemberExpression' ) {
		debug( 'Node type: %s', node.type );
		switch ( node.type ) {
		case 'ExpressionStatement':
			node = node.expression;
			break;
		case 'AssignmentExpression':
			// `x = <|>` || `x = foo<|>`
			node = node.right;
			break;
		case 'LogicalExpression':
			// `x || <|>` || `x || foo<|>`
			node = node.right;
			break;
		case 'BinaryExpression':
			// `x | <|>` || `x | foo<|>`
			node = node.right;
			break;
		case 'UpdateExpression':
			// `++<|>` || `++foo<|>`
			node = node.argument;
			break;
		case 'YieldExpression':
			// `yield foo<|>`
			if ( node.argument ) {
				node = node.argument;
				break;
			}
			// `yield <|>`
			FLG = false;
			break;
		case 'SequenceExpression':
			// `x, foo<|>`
			node = node.expressions[ node.expressions.length-1 ];
			break;
		case 'VariableDeclaration':
			// `var x = <|>` || `var x = foo<|>` || `let x = <|>` || `let x = foo<|>` || `const x = <|>` || `const x = foo<|>` || `var x = 5, y = <|>` || etc.
			node = node.declarations[ node.declarations.length-1 ];
			break;
		case 'VariableDeclarator':
			// `var foo<|>`
			if ( node.id.end === node.end ) {
				debug( 'Detected attempt to complete a newly created variable identifier, which is not supported.' );
				out.context = 'none';
				FLG = false;
				break;
			}
			// `var x = <|>` || `var x = foo<|>`
			node = node.init;
			break;
		case 'ArrayExpression':
			// `[ <|>` || `[ foo<|>` || `[ 1, 2, <|>` || `[ 1, 2, foo<|>` || etc
			if ( node.elements.length === 0 ) {
				FLG = false;
				break;
			}
			node = node.elements[ node.elements.length-1 ];
			break;
		case 'ForStatement':
			// Determine from where in the statement we are trying to TAB complete...
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// `for ( i = 0; i < 10; <|>`
			if ( node.update ) {
				debug( 'Detected attempt to complete within a for loop update expression.' );
				node = node.update;
				break;
			}
			// `for ( i = 0; <|>`
			if ( node.test ) {
				debug( 'Detected attempt to complete within a for loop test expression.' );
				node = node.test;
				break;
			}
			// By elimination, must be `init` (e.g., `for ( <|>`):
			debug( 'Detected attempt to complete within a for loop initialization expression.' );
			node = node.init;
			out.keywords.push( 'let', 'var' );
			break;
		case 'ForInStatement':
			// `for ( k in obj ) { <|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// We can omit the `left` case, as `for ( foo<TAB>` will be parsed as a `ForStatement`:
			debug( 'Detected attempt to complete within a for-in loop condition expression.' );
			node = node.right;
			break;
		case 'ForOfStatement':
			// `for ( i of iter ) { <|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// We can omit the `left` case, as `for ( foo<TAB>` will be parsed as a `ForStatement`:
			debug( 'Detected attempt to complete within a for-of loop condition expression.' );
			node = node.right;
			break;
		case 'WhileStatement':
			// `while ( true ) { <|>`
			if ( node.body.type !== 'EmptyStatement' ) {
				node = node.body;
				break;
			}
			// `while ( <|>`
			debug( 'Detected attempt to complete within a while loop test condition.' );
			node = node.test;
			break;
		case 'DoWhileStatement':
			// `do { <|>`
			if ( node.end === node.body.end ) {
				node = node.body;
				break;
			}
			// `do {} while ( <|>`
			debug( 'Detected attempt to complete within a do-while loop test condition.' );
			node = node.test;
			break;
		case 'BlockStatement':
			if ( node.body.length ) {
				node = node.body[ node.body.length-1 ];
				break;
			}
			out.keywords.push.apply( out.keywords, RESERVED_KEYWORDS_EMPTY_BLOCK_STATEMENT ); // eslint-disable-line max-len
			FLG = false;
			break;
		case 'CallExpression':
			// `foo( bar, <|>`
			if ( node.arguments.length ) {
				debug( 'Detected attempt to complete a call expression argument.' );
				node = node.arguments[ node.arguments.length-1 ];
				break;
			}
			// `foo( <|>`
			debug( 'Detected attempt to complete a call expression argument.' );
			FLG = false;
			break;
		case 'NewExpression':
			// `new <|>` || `new Foo<|>`
			if ( node.end === node.callee.end ) {
				debug( 'Detected attempt to complete a new expression callee name.' );
				out.context = 'NewExpression';
				node = node.callee;
				break;
			}
			// `new Foo( bar, <|>`
			if ( node.arguments.length ) {
				debug( 'Detected attempt to complete a new expression argument.' );
				node = node.arguments[ node.arguments.length-1 ];
				break;
			}
			// `new Foo( <|>`
			debug( 'Detected attempt to complete a new expression argument.' );
			out.context = '*';
			FLG = false;
			break;
		case 'FunctionDeclaration':
			// `function foo( <|>`
			if ( node.body.start === node.body.end ) {
				// Apparent attempt to complete from the parameter list which does not make sense:
				debug( 'Detected attempt to complete a function parameter name, which is not supported.' );
				out.context = 'none';
				FLG = false;
				break;
			}
			// `function foo() { <|>`
			node = node.body;
			break;
		case 'FunctionExpression':
			// `foo = function( <|>`
			if ( node.body.start === node.body.end ) {
				// Apparent attempt to complete from the parameter list which does not make sense:
				debug( 'Detected attempt to complete a function parameter name, which is not supported.' );
				out.context = 'none';
				FLG = false;
				break;
			}
			// `foo = function() { <|>`
			node = node.body;
			break;
		case 'ArrowFunctionExpression':
			// `() => <|>` || `() => { <|>`
			node = node.body;
			break;
		case 'ReturnStatement':
			// `return foo<|>`
			if ( node.argument ) {
				node = node.argument;
				break;
			}
			// `return <|>`
			FLG = false;
			break;
		case 'IfStatement':
			// Determine from where in the statement we are trying to TAB complete...

			// `if ( foo ) { <|>`
			if ( node.alternate ) {
				debug( 'Detected attempt to complete within an if statement alternate.' );
				node = node.alternate;
				break;
			}
			// `if ( foo ) {} else { <|>`
			if ( node.consequent.type !== 'EmptyStatement' ) {
				debug( 'Detected attempt to complete within an if statement consequent.' );
				node = node.consequent;
				break;
			}
			// By elimination, must be `test` (e.g., `if ( <|>`):
			debug( 'Detected attempt to complete within an if statement test condition.' );
			node = node.test;
			break;
		case 'ConditionalExpression':
			// `( foo ) ? <|>`
			if ( node.end === node.consequent.end ) {
				debug( 'Detected attempt to complete within a conditional expression consequent.' );
				node = node.consequent;
				break;
			}
			// `( foo ) ? bar : <|>`
			debug( 'Detected attempt to complete within a conditional expression alternate.' );
			node = node.alternate;
			break;
		case 'SwitchStatement':
			// `switch ( <|>` || `switch ( foo<|>`
			if ( node.end === node.discriminant.end ) {
				debug( 'Detected attempt to complete within a switch statement discriminant.' );
				node = node.discriminant;
				break;
			}
			// `switch ( foo ) { <|>`
			if ( node.cases.length === 0 ) {
				debug( 'Detected attempt to complete the `case` keyword.' );
				out.context = 'SwitchCase';
				out.filter = '';
				out.keywords.push( 'case', 'default' );
				FLG = false;
				break;
			}
			// `switch ( foo ) { case 'bar': <|>`
			debug( 'Detected attempt to complete within a switch statement case.' );
			node = node.cases[ node.cases.length-1 ];
			break;
		case 'SwitchCase':
			if ( node.test === null ) {
				// `switch ( foo ) { ca<|>` || `switch ( foo ) { def<|>`
				if ( node.consequent.length ) {
					node = node.consequent[ node.consequent.length-1 ].expression; // eslint-disable-line max-len
					out.context = 'SwitchCase';
					out.filter = node.name;
					FLG = false;
					if ( RE_CASE_KEYWORD.test( out.filter ) ) {
						debug( 'Detected attempt to complete the `case` keyword.' );
						out.keywords.push( 'case' );
					} else if ( RE_DEFAULT_KEYWORD.test( out.filter ) ) {
						debug( 'Detected attempt to complete the `default` keyword.' );
						out.keywords.push( 'default' );
					}
					break;
				}
				// // Apparent attempt to trigger completion of a context variable (e.g., `switch( foo ) { default: <|>`
				out.keywords.push( 'break' );
				FLG = false;
				break;
			}
			// `switch ( foo ) { case <|>`
			if ( node.end === node.test.end ) {
				debug( 'Detected attempted to complete within a switch case test.' );
				node = node.test;
				break;
			}
			if ( node.consequent.length ) {
				n = node.consequent;
				node = n[ n.length-1 ];

				// `switch ( foo ) { case bar: break; ca<|>`
				if (
					n.length > 1 &&
					n[ n.length-2 ].type === 'BreakStatement' &&
					n[ n.length-1 ].type === 'ExpressionStatement' &&
					n[ n.length-1 ].expression.type === 'Identifier'
				) {
					out.keywords.push( 'case', 'default' );
				}
				// `switch ( foo ) { case bar: break; <|>`
				else if ( node.type === 'BreakStatement' ) {
					out.keywords.push( 'case', 'default' );
				}
				break;
			}
			// Apparent attempt to trigger completion of a context variable (e.g., `switch ( foo ) { case bar: <|>`):
			out.keywords.push( 'break' );
			FLG = false;
			break;
		case 'ThrowStatement':
			// `throw <|>` || `throw foo<|>`
			node = node.argument;
			break;
		case 'TryStatement':
			// `try { <|>`
			node = node.handler.body;
			break;
		case 'TemplateLiteral':
			// ``<|>
			if ( node.expressions.length === 0 ) {
				FLG = false;
				break;
			}
			node = node.expressions[ node.expressions.length-1 ];
			break;
		case 'SpreadElement':
			// `[...<|>` || `[...foo<|>`
			node = node.argument;
			break;
		case 'ObjectExpression':
			// `{<|>`
			if ( node.properties.length === 0 ) {
				FLG = false;
				break;
			}
			// `{ 'a': 1, ...<|>` || `{ 'a': 1, ...foo<|>`
			node = node.properties[ node.properties.length-1 ];
			break;
		default:
			out.context = 'none';
			FLG = false;
			break;
		}
	}
	out.node = node;
	return out;
}


// EXPORTS //

module.exports = walk;

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

/* eslint-disable max-lines-per-function, id-length */

'use strict';

// MODULES //

var parse = require( 'acorn-loose' ).parse;
var walk = require( 'acorn-walk' );
var hasProp = require( '@stdlib/assert/has-property' );
var linkedList = require( '@stdlib/utils/linked-list' );
var contains = require( '@stdlib/array/base/assert/contains' );
var resolveLocalScopes = require( './resolve_local_scopes.js' );
var resolveLocalScope = require( './resolve_local_scope.js' );
var commands = require( './commands.js' );


// VARIABLES //

var COMMANDS = commands();
var isUnrecognizedKeyword = contains.factory( [ 'async', 'let' ] );
var isControlKeyword = contains.factory( [ 'if', 'else', 'switch', 'case', 'catch', 'finally', 'try', 'return', 'break', 'continue' ] );
var isUnrecognizedControlKeyword = contains.factory( [ 'await' ] );
var isSpecialIdentifier = contains.factory( [ 'this', 'super' ] );
var isReservedLiteral = contains.factory( [ 'null', 'true', 'false' ] );
var isUnrecognizedReservedLiteral = contains.factory( [ 'undefined' ] );
var isStringTokenType = contains.factory( [ 'string', 'template' ] );
var isLiteralType = contains.factory( [ 'string', 'boolean', 'number' ] );
var isReservedName = contains.factory( [ 'undefined', 'async', 'await', 'let' ] );
var RE_PUNCTUATION = /(\{|\}|\[|\]|\(|\)|,|;|:|\.|\?|\?\.|=>|\.\.\.|`|\${)/;


// MAIN //

/**
* Tokenizes the input line based on ECMAScript specification.
*
* @private
* @name tokenizer
* @type {Function}
* @param {string} line - input line
* @param {Object} context - REPL context
* @returns {Array} array of tokens
*/
function tokenizer( line, context ) {
	var declarations;
	var VISITORS;
	var tokens = [];
	var ast;
	var i;

	// Parse the given line into tokens & comments...
	try {
		ast = parse( line, {
			'ecmaVersion': 'latest',
			'onToken': onToken,
			'onComment': onComment
		});
	} catch ( error ) { // eslint-disable-line no-unused-vars
		return tokens;
	}

	// Resolve variable declarations from the given line as tokens...
	declarations = resolveLocalScopes( ast );
	for ( i = 0; i < declarations.length; i++ ) {
		// If declaration cannot be resolved as an identifier, push it as a `name` token:
		if ( !resolveIdentifier( declarations[ i ] ) ) {
			tokens.push({
				'value': declarations[ i ].name,
				'type': 'name',
				'start': declarations[ i ].start,
				'end': declarations[ i ].end
			});
		}
	}

	// Resolve identifiers from the given line as tokens...
	VISITORS = {
		'Identifier': resolveIdentifier,
		'MemberExpression': resolveMemberExpression
	};
	walk.simple( ast, VISITORS );

	return tokens;

	/**
	* Callback invoked upon encountering a `Token` when parsing.
	*
	* @private
	* @param {Object} token - token object
	*/
	function onToken( token ) {
		// Ignore placeholders & EOF tokens:
		if ( token.start >= token.end ) {
			return;
		}
		if ( token.type.isLoop || isControlKeyword( token.type.keyword ) || ( token.type.label === 'name' && isUnrecognizedControlKeyword( token.value ) ) ) {
			// Control flow keywords - `for`, `while`, `do`, `if`, `else` etc:
			token.type = 'control';
			tokens.push( token );
			return;
		}
		if ( isSpecialIdentifier( token.type.keyword ) ) {
			// Special identifiers - `this`, `super`:
			token.type = 'specialIdentifier';
			tokens.push( token );
			return;
		}
		if ( isReservedLiteral( token.type.keyword ) ) {
			// Built-in literals - `true`, `false`, `null`, `undefined`:
			token.type = 'literal';
			tokens.push( token );
			return;
		}
		if ( token.type.keyword || ( token.type.label === 'name' && isUnrecognizedKeyword( token.value ) ) ) {
			// Keywords - `function`, `import`, `var`, `const`, `let` etc.:
			token.type = 'keyword';
			tokens.push( token );
			return;
		}
		if ( isStringTokenType( token.type.label ) ) {
			// Strings and template string literals:
			token.type = 'string';
			tokens.push( token );
			return;
		}
		if ( token.type.label === 'regexp' ) {
			// Regex expressions:
			token.type = 'regexp';
			tokens.push( token );
			return;
		}
		if ( token.type.label === 'num' ) {
			// Numeric literals:
			token.type = 'number';
			tokens.push( token );
			return;
		}
		if ( token.type.binop || token.type.prefix || token.type.postfix || token.type.isAssign ) { // eslint-disable-line max-len
			// Operator symbols - `+`, `=`, `++` etc:
			token.type = 'operator';
			tokens.push( token );
			return;
		}
		if ( RE_PUNCTUATION.test( token.type.label ) ) {
			// Punctuation symbols - `,`, `(`, `;` etc:
			token.value = token.type.label;
			token.type = 'punctuation';
			tokens.push( token );
		}
	}

	/**
	* Callback invoked upon encountering a `Comment` when parsing.
	*
	* @private
	* @param {boolean} block - boolean indicating whether a comment is a block comment
	* @param {string} text - comment value
	* @param {number} start - start index
	* @param {number} end - end index
	*/
	function onComment( block, text, start, end ) {
		if ( block ) {
			// TODO: add support for highlighting multi-line comments.
			return;
		}
		tokens.push({
			'type': 'comment',
			'start': start,
			'end': end
		});
	}

	/**
	* Resolves an `Identifier` node.
	*
	* @private
	* @param {Object} node - AST node
	* @returns {boolean} boolean indicating whether the `Identifier` was resolved
	*/
	function resolveIdentifier( node ) {
		var identifier;
		var command;
		var i;

		// Ignore placeholder nodes:
		if ( node.start >= node.end ) {
			return true;
		}
		// Ignore node if it is an unrecognized `keyword`:
		if ( isUnrecognizedKeyword( node.name ) || isUnrecognizedControlKeyword( node.name ) ) { // eslint-disable-line max-len
			return true;
		}
		// If node is an unrecognized `literal`, push it as a token:
		if ( isUnrecognizedReservedLiteral( node.name ) ) {
			tokens.push({
				'value': node.name,
				'type': 'literal',
				'start': node.start,
				'end': node.end
			});
			return true;
		}
		// If identifier is defined in the local scope, assume and treat it like a `variable` and push it as a token...
		if ( contains( resolveLocalScope( ast, node ), node.name ) ) {
			tokens.push({
				'value': node.name,
				'type': 'variable',
				'start': node.start,
				'end': node.end
			});
			return true;
		}
		// If identifier is a REPL command, push it as a token...
		for ( i = 0; i < COMMANDS.length; i++ ) {
			command = COMMANDS[ i ];
			if ( node.name === command[ 0 ] ) {
				tokens.push({
					'value': node.name,
					'type': 'command',
					'start': node.start,
					'end': node.end
				});
				return true;
			}
		}
		// If identifier is in global context, push it as a token...
		identifier = context[ node.name ];
		if ( identifier ) {
			if ( isLiteralType( typeof identifier ) ) {
				tokens.push({
					'value': node.name,
					'type': 'variable',
					'start': node.start,
					'end': node.end
				});
			} else {
				tokens.push({
					'value': node.name,
					'type': typeof identifier,
					'start': node.start,
					'end': node.end
				});
			}
			return true;
		}
		return false;
	}

	/**
	* Resolves a `MemberExpression` node.
	*
	* @private
	* @param {Object} node - AST node
	* @param {boolean} compute - boolean indicating whether to compute the `MemberExpression`
	* @returns {(void|*)} computed value of the `MemberExpression` if compute is true
	*/
	function resolveMemberExpression( node, compute ) {
		var properties = linkedList();
		var property;
		var computed;
		var locals;
		var obj;

		// Ignore placeholder nodes:
		if ( node.start >= node.end ) {
			return;
		}

		// Resolve members of the `MemberExpression`:
		resolveMembers( node );

		// Check if the object identifier is valid...
		property = properties.first();
		if ( !property ) {
			return;
		}
		// Ignore if the object identifier is a reserved name:
		if ( isReservedName( property.value.name ) ) {
			return;
		}
		// If object identifier exists in the local scope, don't resolve from global scope...
		locals = resolveLocalScope( ast, property.value );
		if ( contains( locals, property.value.name ) ) {
			return;
		}
		// Enter object's namespace:
		obj = context;
		properties = properties.iterator();
		obj = obj[ properties.next().value.name ];
		if ( !obj ) {
			// Object not defined in context:
			return;
		}
		// Fetch properties from context:
		property = properties.next();
		while ( !property.done ) {
			// Ignore placeholder nodes:
			if ( property.value.start >= property.value.end ) {
				return;
			}
			// Case: 'bar' in `foo['bar']` - property already pushed as a string token. Ignore...
			if ( property.value.type === 'Literal' ) {
				try {
					if ( !hasProp( obj, property.value.value ) ) {
						// Property not found in context:
						break;
					}
					obj = obj[ property.value.value ];
				} catch ( error ) { // eslint-disable-line no-unused-vars
					break;
				}
				property = properties.next();
				continue;
			}
			// Case: `foo.bar` - resolve property and push it as a token...
			if ( property.value.type === 'Identifier' ) {
				try {
					if ( !hasProp( obj, property.value.name ) ) {
						// Property not found in context:
						break;
					}
					obj = obj[ property.value.name ];
				} catch ( error ) { // eslint-disable-line no-unused-vars
					break;
				}
				if ( !compute ) {
					// Push token if property exists in context:
					if ( isLiteralType( typeof obj ) ) {
						tokens.push({
							'value': property.value.name,
							'type': 'variable',
							'start': property.value.start,
							'end': property.value.end
						});
					} else {
						tokens.push({
							'value': property.value.name,
							'type': typeof obj,
							'start': property.value.start,
							'end': property.value.end
						});
					}
				}
				property = properties.next();
				continue;
			}
			// Case: `foo[a.b].bar` - recursively compute the internal `MemberExpression`...
			if ( property.value.type === 'MemberExpression' ) {
				computed = resolveMemberExpression( property.value, true );
				if ( !isLiteralType( typeof computed ) ) {
					// Couldn't compute the internal `MemberExpression` into a definite name:
					break;
				}
				try {
					if ( !hasProp( obj, computed ) ) {
						// Property not found in context:
						break;
					}
					obj = obj[ computed ];
				} catch ( error ) { // eslint-disable-line no-unused-vars
					break;
				}
				property = properties.next();
				continue;
			}
			break;
		}
		if ( compute ) {
			return obj;
		}

		/**
		* Resolves members of the `MemberExpression` node.
		*
		* @private
		* @param {Object} node - node to be traversed
		*/
		function resolveMembers( node ) {
			if ( node.object.type === 'Identifier' ) {
				// Reached a resolvable MemberExpression (a.b in a.b.c.d), save property(b) & object(a) and exit:
				properties.unshift( node.property );
				properties.unshift( node.object );
			} else if ( node.object.type === 'MemberExpression' ) {
				// Found node with another MemberExpression as object, save property and traverse it:
				properties.unshift( node.property );
				resolveMembers( node.object );
			}
		}
	}
}


// EXPORTS //

module.exports = tokenizer;

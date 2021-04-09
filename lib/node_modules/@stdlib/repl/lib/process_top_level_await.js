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

var parse = require( 'acorn' ).parse;
var walk = require( 'acorn-walk' );
var noop = require( '@stdlib/utils/noop' );
var objectKeys = require( '@stdlib/utils/keys' );
var isSilentCommand = require( './is_silent_command.js' );


// VARIABLES //

var VISITORS = createVisitors({
	'ClassDeclaration': ClassDeclaration,
	'ForOfStatement': ForOfStatement,
	'FunctionDeclaration': FunctionDeclaration,
	'FunctionExpression': noop,
	'ArrowFunctionExpression': noop,
	'MethodDefinition': noop,
	'AwaitExpression': AwaitExpression,
	'ReturnStatement': ReturnStatement,
	'VariableDeclaration': VariableDeclaration
});


// FUNCTIONS //

/**
* Returns an object containing visitor callbacks for recursively walking an abstract syntax tree (AST).
*
* @private
* @param {Object} visitors - visitor callbacks (overrides)
* @returns {Object} object containing visitor callbacks
*/
function createVisitors( visitors ) {
	var clbk;
	var type;
	var keys;
	var out;
	var i;

	keys = objectKeys( walk.base );
	out = {};
	for ( i = 0; i < keys.length; i++ ) {
		type = keys[ i ];
		clbk = visitors[ type ] || walk.base[ type ];
		out[ type ] = wrapVisitor( clbk );
	}
	return out;

	/**
	* Returns a visitor callback which tracks ancestor nodes.
	*
	* @private
	* @param {Function} clbk - callback function
	* @returns {Function} visitor callback
	*/
	function wrapVisitor( clbk ) {
		return visitor;

		/**
		* Callback invoked upon encountering an AST node.
		*
		* @private
		* @param {Node} node - AST node
		* @param {Object} state - state
		* @param {Function} c - callback
		*/
		function visitor( node, state, c ) {
			var FLG = ( node !== state.ancestors[ state.ancestors.length-1 ] );
			if ( FLG ) {
				state.ancestors.push( node );
			}
			clbk( node, state, c ); // eslint-disable-line callback-return
			if ( FLG ) {
				state.ancestors.pop();
			}
		}
	}
}

/**
* Callback invoked upon encountering a `ClassDeclaration` AST node.
*
* @private
* @param {Node} node - AST node
* @param {Object} state - state
* @param {Function} clbk - callback
*/
function ClassDeclaration( node, state, clbk ) {
	if ( state.ancestors[ state.ancestors.length-2 ] === state.body ) {
		state.prepend( node, 'global.'+node.id.name+'=' );
	}
	walk.base.ClassDeclaration( node, state, clbk ); // eslint-disable-line new-cap
}

/**
* Callback invoked upon encountering a `ForOfStatement` AST node.
*
* @private
* @param {Node} node - AST node
* @param {Object} state - state
* @param {Function} clbk - callback
*/
function ForOfStatement( node, state, clbk ) {
	if ( node.await === true ) {
		state.hasAwait = true;
	}
	walk.base.ForOfStatement( node, state, clbk ); // eslint-disable-line new-cap
}

/**
* Callback invoked upon encountering a `FunctionDeclaration` AST node.
*
* @private
* @param {Node} node - AST node
* @param {Object} state - state
* @param {Function} clbk - callback
*/
function FunctionDeclaration( node, state ) {
	state.prepend( node, 'global.'+node.id.name+'=' );
}

/**
* Callback invoked upon encountering an `AwaitExpression` AST node.
*
* @private
* @param {Node} node - AST node
* @param {Object} state - state
* @param {Function} clbk - callback
*/
function AwaitExpression( node, state, clbk ) {
	state.hasAwait = true;
	walk.base.AwaitExpression( node, state, clbk ); // eslint-disable-line new-cap
}

/**
* Callback invoked upon encountering a `ReturnStatement` AST node.
*
* @private
* @param {Node} node - AST node
* @param {Object} state - state
* @param {Function} clbk - callback
*/
function ReturnStatement( node, state, clbk ) {
	state.hasReturn = true;
	walk.base.ReturnStatement( node, state, clbk ); // eslint-disable-line new-cap
}

/**
* Callback invoked upon encountering a `VariableDeclaration` AST node.
*
* ## Notes
*
* -   **WARNING**: top-level `const` declarations are converted to `var` declarations. Unfortunately, as the declarations occur within an `async` function scope, we cannot simultaneously declare the constant in the global scope and bind the resolved value, as the former happens synchronously and the latter asynchronously.
*
* @private
* @param {Node} node - AST node
* @param {Object} state - state
* @param {Function} clbk - callback
*/
function VariableDeclaration( node, state, clbk ) {
	var len;
	var v;
	var i;
	if ( node.kind === 'var' || state.ancestors[ state.ancestors.length-2 ] === state.body ) {
		len = node.declarations.length;
		if ( len === 1 ) {
			state.replace( node.start, node.start+node.kind.length, 'void' );
		} else {
			state.replace( node.start, node.start+node.kind.length, 'void (' );
		}
		for ( i = 0; i < len; i++ ) {
			v = node.declarations[ i ];
			state.prepend( v, '(global.' );
			state.append( v, ( v.init ) ? ')' : '=void 0)' );
		}
		if ( len !== 1 ) {
			state.append( node.declarations[ len-1 ], ')' );
		}
	}
	walk.base.VariableDeclaration( node, state, clbk ); // eslint-disable-line new-cap
}

/**
* Wraps an `async`/`await` command string in order to handle the result of the returned promise.
*
* @private
* @param {string} cmd - command to wrap
* @returns {string} wrapped command
*/
function wrapCommand( cmd ) {
	return [
		'"async";',
		'(function __iife__() {',
		'function __onResult__(result) {__done__(null, result);};',
		'function __onError__(error) {__done__(error);};',
		'var __p__ = '+cmd+';',
		'__p__.then(__onResult__, __onError__);',
		'})()'
	].join( '' );
}


// MAIN //

/**
* Transforms a command containing a top-level `await` statement.
*
* @private
* @param {string} cmd - command string
* @returns {(string|Error)} transformed command or an error
*/
function processAwait( cmd ) {
	var state;
	var body;
	var node;
	var tmp;
	var ast;

	// Wrap the command string in an async IIFE:
	tmp = '(async function __wrapper__() {' + cmd + '})()';

	// Attempt to parse the wrapped command string into an abstract syntax tree (AST):
	try {
		ast = parse( tmp, {
			'ecmaVersion': 'latest' // async/await is available starting in ECMAScript Version 10 and acorn supports through version 11 (2020)
		});
	} catch ( err ) {
		return err;
	}
	body = ast.body[ 0 ].expression.callee.body;

	// Split the wrapped command string into individual characters to allow transformation:
	tmp = tmp.split( '' );

	// Create a `state` object for tracking state as we walk the AST:
	state = {};
	state.body = body;
	state.ancestors = [];
	state.replace = replace;
	state.prepend = prepend;
	state.append = append;
	state.hasAwait = false;
	state.hasReturn = false;

	// Perform a recursive walk of the AST:
	walk.recursive( body, state, VISITORS );

	// Do not transform if either the command does not actually contain an `await` expression OR if there exists a top-level `return` which is not allowed:
	if ( state.hasAwait === false || state.hasReturn ) {
		return new Error( 'invalid argument. Provided command either does not contain an `await` expression or contains a top-level `return` which is not allowed.' );
	}
	// For an expression statement of the form `( expr );`, we do not want the left parenthesis before the `return` keyword, and, thus, we need to prepend a `return (` to the last AST node. Furthermore, we do not want the right parenthesis after the semicolon; in which case, as there can only be more right parentheses between `node.expression.end` and the semicolon, we can append a right parenthesis to `node.expression`.
	node = body.body[ body.body.length-1 ];
	if ( node.type === 'ExpressionStatement' ) {
		state.prepend( node, 'return (' );
		state.append( node.expression, ')' );
	} else if ( node.type === 'VariableDeclaration' ) {
		node = node.declarations[ node.declarations.length-1 ];
		state.append( node, '; return '+node.id.name+';' ); // return the assigned value of last declared variable
	} else if ( node.type === 'FunctionDeclaration' ) {
		state.append( node, '; return '+node.id.name+';' );
	}
	// Introduce logic for handling the result of the returned promise:
	tmp = wrapCommand( tmp.join( '' ) );
	if ( isSilentCommand( cmd ) ) {
		tmp += ';';
	}
	// Return the transformed command:
	return tmp;

	/**
	* Replaces a substring within the wrapped command.
	*
	* @private
	* @param {NonNegativeInteger} start - start index
	* @param {NonNegativeInteger} stop - end index
	* @param {string} str - replacement string
	*/
	function replace( start, stop, str ) {
		var i;
		for ( i = start; i < stop; i++ ) {
			tmp[ i ] = '';
		}
		if ( start === stop ) {
			str += tmp[ start ];
		}
		tmp[ start ] = str;
	}

	/**
	* Prepends a string to the wrapped command.
	*
	* @private
	* @param {Node} node - AST node
	* @param {string} str - string to prepend
	*/
	function prepend( node, str ) {
		tmp[ node.start ] = str + tmp[ node.start ];
	}

	/**
	* Appends a string to the wrapped command.
	*
	* @private
	* @param {Node} node - AST node
	* @param {string} str - string to append
	*/
	function append( node, str ) {
		tmp[ node.end-1] += str;
	}
}


// EXPORTS //

module.exports = processAwait;

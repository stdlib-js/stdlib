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

var Script = require( 'vm' ).Script;
var logger = require( 'debug' );
var parse = require( 'acorn-loose' ).parse;
var objectKeys = require( '@stdlib/utils/keys' );
var trim = require( '@stdlib/string/trim' );
var trimRight = require( '@stdlib/string/right-trim' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var propertyNamesIn = require( '@stdlib/utils/property-names-in' );
var filterByPrefix = require( './filter_by_prefix.js' );
var findLast = require( './complete_walk_find_last.js' );
var resolveLocalScopes = require( './resolve_local_scopes.js' );
var resolveLocalScope = require( './resolve_local_scope.js' );
var RESERVED_KEYWORDS_COMMON = require( './reserved_keywords_common.js' );


// VARIABLES //

var debug = logger( 'repl:completer:expression' );
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Completes an expression statement.
*
* @private
* @param {Array} out - output array for storing completions
* @param {Object} context - REPL context
* @param {string} expression - expression to complete
* @returns {string} filter
*/
function complete( out, context, expression ) {
	var filter;
	var script;
	var node;
	var opts;
	var ast;
	var obj;
	var res;

	// Case: `<|>` (a command devoid of expressions/statements)
	if ( trim( expression ) === '' ) {
		debug( 'Auto-completion triggered without a filter. Empty expression.' );
		out.push.apply( out, objectKeys( context ) );
		out.push.apply( out, RESERVED_KEYWORDS_COMMON );
		return '';
	}
	debug( 'Parsing expression into an AST.' );
	ast = parse( expression, AOPTS );

	debug( 'Resolving local scopes within the AST.' );
	resolveLocalScopes( ast );

	// Get the last program top-level AST "node":
	debug( 'Number of statements: %d', ast.body.length );
	node = ast.body[ ast.body.length-1 ];

	// Check for an empty trailing "expression"...
	if (
		node.end !== ast.end &&
		expression[ node.end ] === ';' &&
		trim( expression.slice( node.end+1 ) ) === ''
	) {
		debug( 'Auto-completion triggered without a filter. Empty expression.' );
		out.push.apply( out, RESERVED_KEYWORDS_COMMON );
		out.push.apply( out, objectKeys( context ) );
		out.push.apply( out, ast.locals );
		return '';
	}
	// Case: `foo<|>` (completing an identifier at the top-level)
	if ( node.type === 'ExpressionStatement' && node.expression.type === 'Identifier' ) {
		// Case: `conso <|>`
		if ( trimRight( expression ) !== expression ) {
			return '';
		}
		filter = node.expression.name;
		debug( 'Identifier auto-completion. Filter: %s', filter );
		out = filterByPrefix( out, RESERVED_KEYWORDS_COMMON, filter );
		out = filterByPrefix( out, objectKeys( context ), filter );
		out = filterByPrefix( out, ast.locals, filter );
		return filter;
	}
	// Find the identifier or member expression to be completed:
	res = findLast( node );

	// Handle "easy" cases...
	node = res.node;
	if ( node.type !== 'Identifier' && node.type !== 'MemberExpression' ) {
		if ( res.context === 'none' ) {
			debug( 'Auto-completion triggered in a non-applicable context.' );
			return res.filter;
		}
		out.push.apply( out, res.keywords );
		out.push.apply( out, resolveLocalScope( ast, node ) );
		if ( res.context === '*' ) {
			debug( 'Auto-completion triggered in a generic context.' );
			out.push.apply( out, objectKeys( context ) );
			return res.filter;
		}
		if ( res.context === 'SwitchCase' ) {
			return res.filter;
		}
		debug( 'Unable to resolve an identifier or member expression.' );
		return res.filter;
	}
	// Detect whether we want to complete an object property...
	if ( node.type === 'MemberExpression' ) {
		if ( node.object.type === 'ThisExpression' ) {
			// Cannot currently handle `this.<TAB>`:
			debug( 'Unable to auto-complete `this` expressions.' );
			return '';
		}
		obj = context;

		// Case: `a.b.c<|>` || `a['b'].c<|>` || `a['b'].c['d<|>` || `a[b.c].d<|>` || etc
		if ( node.object.type === 'MemberExpression' ) {
			debug( 'Detected a nested object path.' );
			opts = {
				'filename': '<repl>',
				'lineOffset': 0
			};
			try {
				debug( 'Compiling expression.' );
				script = new Script( expression.slice( node.object.start, node.object.end ), opts ); // eslint-disable-line max-len
			} catch ( error ) {
				debug( 'Error: %s', error.message );
				return '';
			}
			opts = {
				'timeout': 2000, // end the script if evaluation takes longer than 2 seconds (2000ms), which is an **arbitrary** cutoff for evaluation considered too long
				'displayErrors': false
			};
			try {
				debug( 'Evaluating object path.' );
				obj = script.runInContext( context, opts );
			} catch ( error ) {
				debug( 'Error: %s', error.message );
				return '';
			}
			debug( 'Successfully evaluated object path. Value type: %s.', typeof obj );
		} else if ( hasOwnProp( obj, node.object.name ) ) {
			obj = obj[ node.object.name ];
		} else {
			// The identifier does not exist in current context, so we cannot do member lookup (NOTE: it is possible that **unevaluated** code which precedes the current statement would have added the identifier to the context; however, were we to evaluate the preceding code, if any, we could introduce side-effects, hence the decision to simply avoid completion altogether):
			debug( 'Identifier does not exist in current context. Identifier: %s.', node.object.name );
			return '';
		}
		// Case: `foo[<|>`
		if ( node.computed ) {
			debug( 'Detected computed property auto-completion.' );

			// Case: `foo['<|>` || `foo['bar<|>`
			if ( node.property.type === 'Literal' ) {
				filter = node.property.value.toString(); // handles numeric literals
				out = filterByPrefix( out, propertyNamesIn( obj ), filter );
				return filter;
			}
			// Case: `foo[<|>` || `foo[bar<|>`
			if ( node.property.type === 'Identifier' ) {
				// Case: `foo[<|>`
				if ( node.property.name === '✖' ) {
					filter = '';
				}
				// Case:`foo[bar<|>`
				else {
					filter = node.property.name;
				}
				out = filterByPrefix( out, objectKeys( context ), filter );
				return filter;
			}
			// Case: `foo[bar.<|>` || `foo[bar.beep<|>` || `foo[bar.beep.<|>` || `foo[bar[beep<|>` || etc
			if ( node.property.type === 'MemberExpression' ) {
				debug( 'Detected a member expression as a computed property. Recursing...' );
				expression = expression.slice( node.property.start, node.property.end ); // eslint-disable-line max-len
				return complete( out, context, expression );
			}
			// Case: `foo[bar()` or something else which must be dynamically resolved via evaluation
			debug( 'Unable to statically resolve a computed property.' );
			return '';
		}
		// Case: `foo.<|>`
		if ( node.property.name === '✖' ) {
			filter = '';
		}
		// Case: `foo.bar<|>`
		else {
			// Case: `foo.bar  <|>`
			if ( trimRight( expression ) !== expression ) {
				return '';
			}
			filter = node.property.name;
		}
		debug( 'Property auto-completion. Filter: %s', filter );
		out = filterByPrefix( out, propertyNamesIn( obj ), filter );
		return filter;
	}
	// Case: `foo<|>` (completing an identifier)
	filter = ( node.name === '✖' ) ? '' : node.name;
	debug( 'Identifier auto-completion. Filter: %s', filter );
	out = filterByPrefix( out, res.keywords, filter );
	out = filterByPrefix( out, objectKeys( context ), filter );
	out = filterByPrefix( out, resolveLocalScope( ast, node ), filter );
	return filter;
}


// EXPORTS //

module.exports = complete;

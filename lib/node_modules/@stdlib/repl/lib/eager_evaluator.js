/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-underscore-dangle, no-restricted-syntax, no-invalid-this, max-len */

'use strict';

// MODULES //

var readline = require( 'readline' );
var inspect = require( 'util' ).inspect;
var logger = require( 'debug' );
var parse = require( 'acorn' ).parse;
var replace = require( '@stdlib/string/replace' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var copy = require( '@stdlib/array/base/copy' );
var max = require( '@stdlib/math/base/special/max' );
var processCommand = require( './process_command.js' );
var compileCommand = require( './compile_command.js' );
var ANSI_COLORS = require( './ansi_colors.js' );


// VARIABLES //

var debug = logger( 'repl:eager-evaluator' );
var AOPTS = {
	'ecmaVersion': 'latest'
};
var ROPTS = {
	'timeout': 100, // (in milliseconds) this controls how long eagerly evaluated commands have to execute; we need to avoid setting this too high in order to avoid eager evaluation interfering with the UX when naturally typing
	'displayErrors': false,
	'breakOnSigint': true // Node.js >=6.3.0
};
var tempDB = {
	'base_sin': {
		'isPure': true
	}
};
var ANSI_GRAY = ANSI_COLORS[ 'brightBlack' ];
var ANSI_RESET = ANSI_COLORS[ 'reset' ];


// FUNCTIONS //

/**
* Recursively traverses the node to determine whether the node is side-effect-free.
*
* @private
* @param {Object} node - ast node
* @returns {boolean} boolean indicating whether the node is side-effect-free
*/
function traverse( node ) {
	var fname;
	var i;
	if ( !node ) {
		return false;
	}
	if ( node.type === 'Literal' || node.type === 'Identifier' || node.type === 'MemberExpression' ) {
		return true;
	}
	if ( node.type === 'BinaryExpression' ) {
		if ( traverse( node.left ) && traverse( node.right ) ) {
			return true;
		}
	} else if ( node.type === 'ExpressionStatement' ) {
		if ( traverse( node.expression ) ) {
			return true;
		}
	} else if ( node.type === 'CallExpression' ) {
		fname = getFunctionName( node.callee );
		if ( tempDB[fname] && tempDB[fname].isPure ) {
			// Examine each function argument for potential side-effects...
			for ( i = 0; i < node.arguments.length; i++ ) {
				if ( !traverse( node.arguments[ i ] ) ) {
					return false;
				}
			}
			return true;
		}
	}
	return false;
}

/**
* Resolves the function name associated with a provided AST node.
*
* @private
* @param {Object} node - ast node
* @returns {string} function name representing the node
*/
function getFunctionName( node ) {
	if ( !node ) {
		return '';
	}
	if ( node.type === 'MemberExpression' ) {
		return getFunctionName( node.object ) + '_' + node.property.name;
	}
	if ( node.type === 'Identifier' ) {
		return node.name;
	}
	return '';
}


// MAIN //

/**
* Constructor for creating an eager evaluator.
*
* @private
* @param {REPL} repl - repl instance
* @param {Object} rli - readline instance
* @param {boolean} enabled - boolean indicating whether the eager evaluator should be initially enabled
* @returns {EagerEvaluator} eager evaluator instance
*/
function EagerEvaluator( repl, rli, enabled ) {
	if ( !(this instanceof EagerEvaluator) ) {
		return new EagerEvaluator( repl, rli, enabled );
	}
	debug( 'Creating a new eager evaluator...' );

	// Cache a reference to the provided REPL instance:
	this._repl = repl;

	// Cache a reference to the readline interface:
	this._rli = rli;

	// Cache a reference to the command array:
	this._cmd = repl._cmd;

	// Initialize a flag indicating whether the eager evaluator is enabled:
	this._enabled = enabled;

	// Initialize a flag indicating whether we are currently previewing eagerly-evaluated output:
	this._isPreviewing = false;

	return this;
}

/**
* Checks whether provided code is free of side-effects.
*
* @private
* @name _isSideEffectFree
* @memberof EagerEvaluator.prototype
* @type {Function}
* @param {string} code - input code
* @returns {boolean} boolean indicating whether provided code is free of side-effects
*/
setNonEnumerableReadOnly( EagerEvaluator.prototype, '_isSideEffectFree', function isSideEffectFree( code ) {
	var ast;
	var i;

	try {
		ast = parse( code, AOPTS );
	} catch ( err ) {
		debug( 'Encountered an error when generating AST: %s', err.message );
		return false;
	}
	for ( i = 0; i < ast.body.length; i++ ) {
		if ( !traverse( ast.body[ i ] ) ) {
			return false;
		}
	}
	return true;
});

/**
* Clears eagerly-evaluated output.
*
* @private
* @name clear
* @memberof EagerEvaluator.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EagerEvaluator.prototype, 'clear', function clear() {
	var cursorPosition;

	cursorPosition = this._rli.cursor;
	readline.moveCursor( this._repl._ostream, 0, 1 );
	readline.clearLine( this._repl._ostream, 0 );
	readline.moveCursor( this._repl._ostream, 0, -1 );
	readline.cursorTo( this._repl._ostream, cursorPosition + this._repl.promptLength() );
	this._isPreviewing = false;
});

/**
* Disables the eager evaluator.
*
* @private
* @name disable
* @memberof EagerEvaluator.prototype
* @type {Function}
* @returns {EagerEvaluator} eager evaluator instance
*/
setNonEnumerableReadOnly( EagerEvaluator.prototype, 'disable', function disable() {
	this._enabled = false;
	return this;
});

/**
* Enables the eager evaluator.
*
* @private
* @name enable
* @memberof EagerEvaluator.prototype
* @type {Function}
* @returns {EagerEvaluator} eager evaluator instance
*/
setNonEnumerableReadOnly( EagerEvaluator.prototype, 'enable', function enable() {
	this._enabled = true;
	return this;
});

/**
* Callback which should be invoked **before** a "keypress" event.
*
* @private
* @name beforeKeypress
* @memberof EagerEvaluator.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( EagerEvaluator.prototype, 'beforeKeypress', function beforeKeypress() {
	if ( this._isPreviewing ) {
		this.clear();
	}
});

/**
* Callback for handling a "keypress" event.
*
* @private
* @name onKeypress
* @memberof EagerEvaluator.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( EagerEvaluator.prototype, 'onKeypress', function onKeypress() {
	var cursorPosition;
	var executable;
	var index;
	var code;
	var cmd;
	var pre;
	var res;
	var tmp;

	if ( !this._enabled || this._rli.line === '' ) {
		return;
	}

	// Build the final command:
	cmd = copy( this._cmd );
	cmd[ max( cmd.length - 1, 0 ) ] = this._rli.line; // eager-evaluation should only work when on the last line, hence updating the last index

	code = cmd.join( '\n' );
	debug( 'Eagerly evaluating: %s', code );
	if ( !this._isSideEffectFree( code ) ) {
		debug( 'Unable to perform eager-evaluation due to potential side-effects. Skipping...' );
		return;
	}
	debug( 'Processing command...' );
	tmp = processCommand( code );
	if ( tmp instanceof Error ) {
		debug( 'Error encountered when processing command: %s', tmp.message );
		return;
	}
	debug( 'Compiling command...' );
	executable = compileCommand( tmp );
	if ( executable instanceof Error ) {
		debug( 'Error encountered when compiling command: %s', executable.message );
		return;
	}
	try {
		if ( this._repl._sandbox ) {
			res = executable.compiled.runInContext( this._repl._context, ROPTS );
		} else {
			res = executable.compiled.runInThisContext( ROPTS );
		}
	} catch ( err ) {
		debug( 'Encountered an error when executing the command: %s', err.message );
		return;
	}

	res = inspect( res );
	index = res.indexOf( '\n' );
	if ( index !== -1 ) {
		res = res.slice( 0, index ) + '...';
	}
	cursorPosition = this._rli.cursor;
	pre = replace( this._repl._outputPrompt, '%d', ( this._repl._count+1 ).toString() );
	this._repl._ostream.write( '\n' + ANSI_GRAY + pre + res + ANSI_RESET );
	readline.moveCursor( this._repl._ostream, 0, -1 );
	readline.cursorTo( this._repl._ostream, cursorPosition + this._repl.promptLength() );
	this._isPreviewing = true;
	debug( 'Successfully evaluated command.' );
});


// EXPORTS //

module.exports = EagerEvaluator;

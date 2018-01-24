'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var rule = require( 'unified-lint-rule' );
var visit = require( 'unist-util-visit' );
var Engine = require( 'eslint' ).CLIEngine;
var cwd = require( '@stdlib/process/cwd' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var transformHTML = require( './transform_html.js' );


// MAIN //

/**
* Returns a plugin for linting Markdown code blocks using ESLint.
*
* @param {Object} [options] - options
* @param {string} [options.config] - path to an ESLint configuration file
* @throws {TypeError} options arguments must be an object
* @returns {Function} plugin
*
* @example
* var remark = require( 'remark' );
*
* var plugin = factory();
* var linter = remark().use( plugin ).processSync;
*
* var vfile = linter( '```javascript\nvar beep = \'boop\';\n```' );
*/
function factory( options ) {
	var opts;
	var cli;

	opts = {};
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `'+options+'`.' );
		}
		if ( hasOwnProp( options, 'config' ) ) {
			opts.configFile = resolve( cwd(), options.config );
		}
		if ( hasOwnProp( options, 'ignore' ) ) {
			opts.ignore = options.ignore;
		}
		if ( hasOwnProp( options, 'useEslintrc' ) ) {
			opts.useEslintrc = options.useEslintrc;
		}
		// TODO: add support for other ESLint options
	}
	cli = new Engine( opts );
	return rule( 'remark-lint:eslint', lint );

	/**
	* Lints Markdown code blocks using ESLint.
	*
	* @private
	* @param {Node} tree - abstract syntax tree (AST)
	* @param {File} file - file being linted
	* @param {Object} options - options
	* @param {Callback} clbk - callback
	*/
	function lint( tree, file ) {
		visit( tree, 'code', onNode );

		/**
		* Callback invoked upon encountering a code block.
		*
		* @private
		* @param {Node} node - AST node
		* @param {number} idx - position of node in parent
		* @param {Node} parent - parent AST node
		* @returns {void}
		*/
		function onNode( node, idx, parent ) {
			var comments;
			var comment;
			var report;
			var result;
			var offset;
			var prev;
			var code;
			var msg;
			var str;
			var i;
			var j;

			if ( node.lang === 'javascript' || node.lang === 'js' ) {
				// Look for HTML comments immediately preceding a code block which may contain ESLint configuration...
				idx -= 1;
				prev = parent.children[ idx ];
				comments = [];
				while ( prev && prev.type === 'html' ) {
					comment = transformHTML( prev.value );
					if ( !comment ) {
						break;
					}
					if ( comment === '/* eslint-skip */' ) {
						return;
					}
					comments.unshift( comment );
					idx -= 1;
					prev = parent.children[ idx ];
				}
				offset = comments.length;
				comments.push( node.value );
				code = comments.join( '\n' );

				// Lint the code block...
				report = cli.executeOnText( code );
				for ( i = 0; i < report.results.length; i++ ) {
					result = report.results[ i ];
					result.filePath = file.path || result.filePath;
					for ( j = 0; j < result.messages.length; j++ ) {
						msg = result.messages[ j ];
						str = '';
						str += (msg.line-offset) + ':' + msg.column;
						str += '   ';
						if ( msg.severity === 2 ) {
							str += 'error';
						} else {
							str += 'warning';
						}
						str += '   ';
						str += msg.message;
						str += '   ';
						str += msg.ruleId;
						file.message( str, node );
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = factory;

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var rule = require( 'unified-lint-rule' );
var visit = require( 'unist-util-visit' );
var Engine = require( 'eslint' ).CLIEngine;
var cwd = require( '@stdlib/utils/cwd' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var startsWith = require( '@stdlib/string/starts-with' );
var endsWith = require( '@stdlib/string/ends-with' );
var trim = require( '@stdlib/string/trim' );


// VARIABLES //

var COMMENT_START = '<!--';
var COMMENT_END = '-->';
var ESLINT_PREFIX = 'eslint';


// FUNCTIONS //

/**
* Converts an HTML comment containing ESLint configuration to a JavaScript comment.
*
* @private
* @param {string} html - text content of an HTML AST node
* @returns {(string|null)} null or a JavaScript comment
*/
function transformHTML( html ) {
	if (
		!startsWith( html, COMMENT_START ) ||
		!endsWith( html, COMMENT_END )
	) {
		return null;
	}
	html = html.slice( COMMENT_START.length, html.length-COMMENT_END.length );
	html = trim( html );
	if ( !startsWith( html, ESLINT_PREFIX ) ) {
		return null;
	}
	return '/* ' + html + ' */';
} // end FUNCTION transformHTML()


// MAIN //

/**
* Lints Markdown code blocks using ESLint.
*
* @param {Object} tree - abstract syntax tree (AST)
* @param {Object} file - file being lint
* @param {Object} options - options
* @param {string} [options.config] - path to an ESLint configuration file
*
* @example
* var remark = require( 'remark' );
* var linter = remark().use( lint ).processSync;
*
* var vfile = linter( '``` javascript\nvar beep = \'boop\';\n```' );
*/
function lint( tree, file, options ) {
	var opts;
	var cli;

	opts = {};
	if ( hasOwnProp( options, 'config' ) ) {
		opts.configFile = resolve( cwd(), options.config );
	}
	cli = new Engine( opts );
	visit( tree, 'code', onNode );

	/**
	* Callback invoked upon encountering a code block.
	*
	* @private
	* @param {Object} node - AST node
	* @param {number} idx - position of node in parent
	* @param {Object} parent - parent AST node
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
	} // end FUNCTION onNode()
} // end FUNCTION lint()


// EXPORTS //

module.exports = rule( 'remark-lint:eslint', lint );

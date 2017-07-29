'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var rule = require( 'unified-lint-rule' );
var visit = require( 'unist-util-visit' );
var Engine = require( 'eslint' ).CLIEngine;
var cwd = require( '@stdlib/utils/cwd' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Lints Markdown code blocks using ESLint.
*
* @param {Object} tree - abstract syntax tree (AST)
* @param {Object} file - file being lint
* @param {Object} options - options
* @param {string} [options.config] - path to an ESLint configuration file
* @param {string} [options.ignorePath] - path to an ESLint ignore file
*
* @example
* var remark = require( 'remark' );
* var linter = remark().use( lint ).processSync;
*
* var vfile = linter( '``` javascript\nvar beep = \'boop\';\n'```' );
*/
function lint( tree, file, options ) {
	var opts;
	var cli;

	opts = {};
	if ( hasOwnProp( options, 'config' ) ) {
		opts.configFile = resolve( cwd(), options.config );
	}
	if ( hasOwnProp( options, 'ignorePath' ) ) {
		opts.ignorePath = resolve( cwd(), options.ignorePath );
	}
	cli = new Engine( opts );
	visit( tree, 'code', onNode );

	/**
	* Callback invoked upon encountering a code block.
	*
	* @private
	* @param {Object} node - AST node
	*/
	function onNode( node ) {
		var report;
		var result;
		var msg;
		var str;
		var i;
		var j;

		if ( node.lang === 'javascript' || node.lang === 'js' ) {
			report = cli.executeOnText( node.value );
			for ( i = 0; i < report.results.length; i++ ) {
				result = report.results[ i ];
				result.filePath = file.path || result.filePath;
				for ( j = 0; j < result.messages.length; j++ ) {
					msg = result.messages[ j ];
					str = '';
					str += msg.line + ':' + msg.column;
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
